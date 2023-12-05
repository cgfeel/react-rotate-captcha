import { ForwardRefRenderFunction, PropsWithChildren, ReactElement, ReactNode, Ref, createContext, forwardRef, useImperativeHandle, useRef, useState } from "react";
import CaptchaClose from "./CaptchaClose";
import CaptchaControl, { CaptchaControlInstance } from "./CaptchaControl";
import CaptchaImage, { CaptchaImageInstance } from "./CaptchaImage";
import CaptchaMask from "./CaptchaMask";
import CaptchaTooltips from "./CaptchaTooltips";
import CaptchaWrap from "./CaptchaWrap";
import RotateCaptcha, { RotateCaptchaInstance } from "./RotateCaptcha";
import { choose, LangType } from "./lang";

const resultDefault: Required<CaptchaProps>['result'] = _ => {};

const InternalCaptcha: ForwardRefRenderFunction<CaptchaInstance, PropsWithChildren<CaptchaProps>> = (
    {
        className,
        close,
        children,
        limit,
        mask,
        open,
        tips,
        theme,
        zIndex,
        get,
        load,
        onClose,
        verify,
        lang: langRaw = 'zh_CN',
        result = resultDefault,
    },
    ref
) => {
    const lang = (typeof langRaw === 'string' ? choose(langRaw) : langRaw) as LangType;
    const [currently, setCurrently] = useState<CurrentlyType>([2, lang.loadTips]);

    const control = useRef<CaptchaControlInstance>(null);
    const image = useRef<CaptchaImageInstance>(null);
    const modal = useRef<RotateCaptchaInstance>(null);

    const captchaInstance = {
        close: (force = false) => {
            if (open !== true) {
                modal.current?.load(force ? 0 : 2);
            }
            if (onClose !== undefined) onClose();
        },
        open: () => modal.current?.load(),
        reload: () => {
            if (currently[0] === 3) {
                modal.current?.start();
                control.current?.restart(0);
            }
        },
    };

    // Pass ref with captcha instance
    useImperativeHandle(ref, () => captchaInstance);

    return (
        <CaptchaContext.Provider
            value={{
                captcha: captchaInstance,
                type: currently,
                lang,
            }}
        >
            <RotateCaptcha 
                className={className}
                close={close !== null && (
                    close||<CaptchaClose close={captchaInstance.close} />
                )}
                mask={mask !== null && (
                    mask||<CaptchaMask close={captchaInstance.close} />
                )}
                ref={modal}
                theme={theme}
                visible={open === true ? 1 : 0}
                zIndex={zIndex}
                get={get}
                loadImg={(path, token) => image.current?.loadImg(path, token)}
                show={setCurrently}
                verify={verify}
            >
                <CaptchaWrap>
                    <CaptchaImage 
                        ref={image}
                        load={load}
                        reLoad={(code) => {
                            code ? control.current?.reback() : captchaInstance.close();
                        }}
                        show={setCurrently}
                    />
                    <CaptchaControl 
                        limit={limit}
                        ref={control}
                        onRoll={(name, x) => image.current!.toRoll(name, x)}
                        send={deg => modal.current?.toVerify(deg).then(info => {
                            const { code, msg } = info;
                            if (code === -1) return;

                            const tips = code === 0 ? lang.success : msg;
                            if (code === 2) {
                                control.current!.restart(-1);
                            }
                            
                            setCurrently([code === 0 ? 0 : 1, tips]);
                            result(info);
                        }).catch((e: Error) => {
                            const tips = e.message||lang.sendError;

                            setCurrently([1, tips, true]);
                            result({ code: 1, msg: lang.sendError });
                        })}
                        show={() => {
                            image.current?.reStart();
                            setCurrently([3, lang.wait]);
                        }}
                    />
                    {tips||<CaptchaTooltips 
                        reLoad={captchaInstance.reload}
                    />}
                </CaptchaWrap>
            </RotateCaptcha>
            {children}
        </CaptchaContext.Provider>
    );
};

export const CaptchaContext = createContext<CaptchaContextInstance>({} as CaptchaContextInstance);

export interface CaptchaContextInstance {
    captcha: CaptchaInstance;
    lang: LangType;
    type: CurrentlyType;
}

export interface CaptchaInstance {
    close: (force?: boolean) => void;
    open: () => void;
    reload: () => void;
}

export interface CaptchaProps {
    className?: string;
    close?: null|ReactNode;
    lang?: LangType|string;
    limit?: number;
    mask?: null|ReactNode;
    open?: boolean;
    tips?: ReactNode;
    theme?: 'dark'|'light';
    zIndex?: number;
    get?: () => Promise<resultType<tokenType>>;
    load?: (path: string) => Promise<string>;
    onClose?: () => void;
    result?: (info: resultType<ticketType>) => void;
    verify?: (token: string, deg: number) => Promise<resultType<ticketType>>;
}

/**
 * - 0.正确; 1.错误; 2.待获取; 3.待提交; 4.提交中
 * - msg
 * - forceStop
 */
export type CurrentlyType = [0|1|2|3|4, string, boolean?];

/**
 * code: 0.正常; 1.错误可继续; 2.错误重新开始; -1.过期操作(非验证行为)
 */
export type resultType<T extends any> = {
    code: -1|0|1|2;
    msg: string;
    data?: T;
};

export type ticketType = {
    sid: string;
    ticket: string;
};

export type tokenType = {
    str: string;
    token: string;
};

const Captcha = forwardRef<CaptchaInstance, CaptchaProps>(InternalCaptcha) as ((
    props: PropsWithChildren<CaptchaProps> & { ref?: Ref<CaptchaInstance> },
) => ReactElement) & { displayName?: string };
  
if (process.env.NODE_ENV !== 'production') {
    Captcha.displayName = 'RotateCaptch';
}

export default Captcha;