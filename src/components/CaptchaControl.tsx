import { forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useRef } from "react";
import Icon from "../assets/btn-icon.svg";
import "../assets/index.scss";
import { CaptchaContext, CaptchaProps } from "./Captcha";
import { RollType } from "./CaptchaImage";

const CaptchaControl = forwardRef<CaptchaControlInstance, CaptchaControlProps>(
    ({ onRoll, send, show, limit = 2 }, ref) => {
        const barRef = useRef<HTMLDivElement & BarInfoType>(null);
        const {
            type: [code, , forceStop],
        } = useContext(CaptchaContext);

        const startAction = useCallback(
            (xnum: number) => {
                if (code !== 3) return;
                barRef.current!.startX = xnum;
                onRoll("down");
            },
            [barRef, code, onRoll]
        );

        useEffect(() => {
            const isTouch = "ontouchmove" in window;
            const event = {
                mousemove: function (e: MouseEvent) {
                    e.preventDefault();
                    const start_x = barRef.current?.startX || -1;
                    if (start_x < 0) return;

                    const x = onRoll("move", e.pageX - start_x);
                    barRef.current!.setAttribute("style", `--captcha-control-x:translateX(${x}px)`);
                },
                touchmove: function (e: TouchEvent) {
                    const start_x = barRef.current?.startX || -1;
                    if (start_x < 0) return;

                    const x = onRoll("move", e.targetTouches[0].pageX - start_x);
                    barRef.current!.setAttribute("style", `--captcha-control-x:translateX(${x}px)`);
                },
                upend: function () {
                    const start_x = barRef.current?.startX || -1;
                    if (start_x < 0) return;

                    const deg = onRoll("up");
                    barRef.current!.startX = -1;
                    send(deg);
                },
            };

            const up = isTouch ? "touchend" : "mouseup";
            if (isTouch) {
                document.addEventListener("touchmove", event.touchmove, false);
            } else {
                document.addEventListener("mousemove", event.mousemove, false);
            }

            document.addEventListener(up, event.upend, false);
            return () => {
                if (isTouch) {
                    document.removeEventListener("touchmove", event.touchmove);
                } else {
                    document.removeEventListener("mousemove", event.mousemove);
                }
                document.removeEventListener(up, event.upend);
            };
        }, [barRef, onRoll]);

        useImperativeHandle(ref, () => ({
            reback: () => {
                barRef.current!.style.animation = "reback .4s";
            },
            restart: (num = -1) => {
                barRef.current!.total = num < 0 ? limit : num;
            },
        }));

        return (
            <div className="captcha-control">
                <div className="captcha-control-wrap"></div>
                <div
                    className={`captcha-control-button${code === 3 ? "" : " disabled"}`}
                    ref={barRef}
                    onAnimationEnd={(e) => {
                        const total = barRef.current!.total || 0;

                        barRef.current!.total = total + 1;
                        barRef.current?.removeAttribute("style");

                        if (limit > barRef.current!.total || forceStop) {
                            // 当错误次数未上限时，阻止冒泡发起请求，并返回代操作状态
                            e.stopPropagation();
                            !forceStop && show();
                        } else {
                            // 否则通过冒泡发起重新获取的请求，并归零
                            barRef.current!.total = 0;
                        }
                    }}
                    onMouseDown={(e) => {
                        if (!("ontouchstart" in window)) startAction(e.pageX);
                    }}
                    onTouchStart={(e) => startAction(e.targetTouches[0].pageX)}>
                    <Icon />
                </div>
            </div>
        );
    }
);

type BarInfoType = {
    total?: number;
    startX?: number;
};

export interface CaptchaControlInstance {
    reback: () => void;
    restart: (num?: number) => void;
}

export interface CaptchaControlProps extends Pick<CaptchaProps, "limit"> {
    onRoll: (name: RollType, x?: number) => number;
    send: (deg: number) => void;
    show: () => void;
}

export default CaptchaControl;
