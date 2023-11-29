import { Dispatch, SetStateAction, forwardRef, useCallback, useContext, useImperativeHandle, useRef } from "react";
import Fail from "../assets/fail.svg";
import Loading from "../assets/loading.svg";
import Success from "../assets/success.svg";
import "../assets/index.scss";
import { CaptchaContext, CaptchaProps, CurrentlyType } from "./Captcha";

const def_coor = { ave: 0, btn: 0, cost: 0, deg: 0, moveX: 0, size: 0, x: 0, y: 0 };
const stateIcon = [<Success />, <Fail />, null, null, <Loading />];

const defaultAction = async () => '';

const CaptchaImage = forwardRef<CaptchaImageInstance, CaptchaImageProps>((
    { show, reLoad, load = defaultAction }, ref
) => {
    const { lang, type: [code] } = useContext(CaptchaContext);

    const canvasRef = useRef<HTMLCanvasElement & CoordinateType>(null);
    const pointRef = useRef<HTMLDivElement>(null);

    const drawCanvas = useCallback(() => {
        const { 
            img, ave = 0, moveX = 0, size = 0, x = 0, y = 0 
        } = canvasRef.current?.info||{};

        const canvas = canvasRef.current;
        if (size === 0 || img === undefined || canvas === null) return;

        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext('2d');
        ctx?.beginPath();
        ctx?.arc(100, 100, size, 0, 360 * Math.PI / 180, false)
        ctx?.closePath();
        ctx?.clip();
        ctx?.save();
        ctx?.clearRect(0, 0, size, size);
        ctx?.translate(x, y);
        ctx?.rotate(moveX * ave * Math.PI / 180);
        ctx?.translate(-x, -y);
        ctx?.drawImage(img, 0, 0, size, size);
        ctx?.restore();
    }, [canvasRef]);

    const initCoordinate = useCallback((img: HTMLImageElement) => {
        const container = document.querySelector('.captcha-img');
        const control = document.querySelector('.captcha-control');
        const button = document.querySelector('.captcha-control-button');

        const size = container?.clientWidth||0;
        const cost = control?.clientWidth||0;
        const btn = button?.clientWidth||0;

        canvasRef.current!.info = {
            ave: Math.round((360 / (cost - btn)) * 100) / 100,  // 进度条百分比：360°的圆 / (控制器 - 按钮)
            deg: 0,         // 滑动的角度
            moveX: 0,       // 滑动距离
            x: size / 2,    // 验证图中心坐标x
            y: size / 2,    // 验证图中心坐标y
            btn,            // 按钮宽度
            cost,           // 进度条宽度
            img,            // 验证图
            size,           // 验证图尺寸
        };
        drawCanvas();
    }, [canvasRef]);

    const moveAction = useCallback((x: number) => {
        const info = canvasRef.current?.info;
        if (info === undefined) return 0;

        const { btn, cost } = info;
        const width = cost - btn;

        const moveX = Math.max(0, Math.min(x, width));
        const deg = (360 / width) * moveX;

        canvasRef.current!.info = {
            ...info,
            deg,
            moveX,
        };

        drawCanvas();
        return moveX;
    }, [canvasRef]);

    useImperativeHandle(ref, () => ({
        loadImg: (path, token) => {
            if (!canvasRef.current) return;
            canvasRef.current.token = token;

            load(path).then(url => {
                if (token !== canvasRef.current?.token) return;
                if (!url) {
                    show([1, lang.loadFaild, true]);
                    return;
                }

                const image = new Image();
                image.onerror = function(e) {
                    show([1, lang.loadFaild, true]);
                }
                image.onload = function() {
                    initCoordinate(image);
                    show([3, lang.wait]);
                };
                image.src = url;
            }).catch(
                () => show([1, lang.loadFaild, true])
            );
        },
        reStart: () => {
            const { img } = canvasRef.current?.info||{};
            if (img !== undefined) initCoordinate(img);
        },
        toRoll: (name, x) => {
            if (name === 'move') return x !== undefined ? moveAction(x) : 0;

            const show = name === 'down' ? 'block' : 'none';
            pointRef.current!.style.display = `${show}`;

            const { deg } = canvasRef.current?.info||{};
            return deg||0;
        },
    }));

    return (
        <div 
            className="captcha-wrap"
        >
            <div 
                className="captcha-image"
            >
                <div
                    className={`captcha-img${code === 2 ? ' captcha-loading' : ''}`}
                >
                    <canvas ref={canvasRef}></canvas>
                    <div 
                        className="captcha-loader"
                    >
                        {code === 2 && <Loading />}
                    </div>
                </div>
                 <div 
                    className="captcha-coordinate"
                    ref={pointRef}
                ></div>
                <div 
                    className="captcha-state"
                    onAnimationEnd={e => {
                        e.stopPropagation();
                        switch (code) {
                            case 0: setTimeout(() => reLoad(code), 300); break;
                            case 1: reLoad(code); break;
                        }
                    }}
                >
                    <div
                        className="captcha-state-icon"
                    >
                        {stateIcon[code]}
                    </div>
                </div>
            </div>
        </div>
    );
});

type CoordinateType = {
    info?: (typeof def_coor) & { img?: HTMLImageElement }
    token?: string;
};

export type RollType = 'down'|'move'|'up';

export interface CaptchaImageInstance {
    loadImg: (path: string, token: string) => void;
    reStart: () => void;
    toRoll: (name: RollType, x?: number) => number;
}

export interface CaptchaImageProps extends Pick<CaptchaProps, 'load'> {
    show: Dispatch<SetStateAction<CurrentlyType>>;
    reLoad: (code: 0|1) => void;
}

export default CaptchaImage;