import { Dispatch, PropsWithChildren, ReactNode, SetStateAction, forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "../assets/index.scss";
import { CaptchaContext, CaptchaProps, CurrentlyType } from "./Captcha";

const RotateCaptcha = forwardRef<RotateCaptchaInstance, PropsWithChildren<RotateCaptchaProps>>((
    {
        children, 
        className,
        close, 
        mask, 
        visible, 
        get,
        loadImg,
        show,
        verify,
        theme = 'light',
        zIndex = 999, 
    },
    ref
) => {
    const { lang } = useContext(CaptchaContext);

    const rotate = useRef<HTMLDivElement & { token?: string }>(null);
    const [open, setOpen] = useState<0|1|2>(visible);

    const getToken = useCallback(async () => {
        try {
            rotate.current!.token = '';
            show([2, lang.loadTips]);

            if (!get) throw new Error(lang.lostProps);
            const { code, data, msg } = await get();
            
            if (data === undefined || code !== 0) {
                throw new Error(msg||lang.getFaild);
            }

            const { str, token } = data;
            rotate.current!.token = token;

            show([2, lang.loadImg]);
            loadImg(str, token);
        } catch (e) {
            show([1, lang.getFaild, true]);
        }
    }, [lang, rotate, get, loadImg, show]);

    useEffect(() => {
        if (open === 0) show([2, lang.loadTips]);
    }, [open, show]);

    useImperativeHandle(ref, () => ({
        load: (num = 1) => setOpen(num),
        start: () => getToken(),
        toVerify: async (deg) => {
            const token = rotate.current?.token;
            if (!token || !verify) {
                return {
                    code: 2,
                    msg: lang.getFaild
                };
            }

            show([4, lang.verifying]);
            return await verify(token, deg).then(info => {
                // 提交验证立即关闭窗口-重新打开验证，这个时候token就发生改变了
                return token === rotate.current?.token ? info : {
                    code: -1,
                    msg: 'is over',
                };
            });
        },
    }));

    return open === 0 ? null : createPortal(
        <div
            className={`rotate-captcha${className ? ' ' + className : ''} ${open === 1 ? 'on' : 'off'}`}
            ref={rotate}
            style={{ zIndex }}
            theme-mode={theme}
        >
            <div
                className="captcha-modal"
                onAnimationEnd={() => {
                    switch (open) {
                        case 1: getToken(); break;
                        case 2: setOpen(0); break;
                    }
                }}
            >
                {close}{children}
            </div>
            {mask}
        </div>,
        document.body
    );
});

export interface RotateCaptchaInstance {
    load: (num?: 0|1|2) => void;    // 0.强制销毁，1.打开，2.关闭
    start: () => Promise<void>;
    toVerify: (deg: number) => ReturnType<Required<CaptchaProps>['verify']>;
}

export interface RotateCaptchaProps extends Pick<CaptchaProps, 'className'|'get'|'theme'|'verify'|'zIndex'> {
    visible: 0|1;
    loadImg: (path: string, token: string) => void;
    show: Dispatch<SetStateAction<CurrentlyType>>;
    close?: ReactNode;
    mask?: ReactNode;
}

export default RotateCaptcha;