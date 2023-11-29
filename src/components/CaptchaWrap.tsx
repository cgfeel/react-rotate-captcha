import { FC, PropsWithChildren, useContext } from "react";
import { CaptchaContext } from "./Captcha";
import { LangType } from "./lang";

const statusType = ['captcha-success', 'captcha-fail' ];

const CaptchaHeader: FC<{ lang: LangType }> = ({ lang }) => {
    const { desc, title }  = lang;
    return (
        <div>
            <div className="captcha-title">{title}</div>
            <span className="captcha-desc">{desc}</span>
        </div>
    );
};

const CaptchaWrap: FC<PropsWithChildren<CaptchaWrapProps>> = ({ children }) => {
    const { lang, type: [code] } = useContext(CaptchaContext);
    return (
        <div 
            className="captcha-wrap"
        >
            <div 
                className="captcha"
            >
                <CaptchaHeader lang={lang} />
                <div 
                    className={`captcha-status-${code}${[0, 1, 4].indexOf(code) < 0 ? '' : ' captcha-status-show'}`}
                >
                    {children}
                </div>
                <div 
                    className="captcha-timer-progress-bar-wrap"
                >
                    <div className="captcha-timer-progress-bar"></div>
                </div>
            </div>
        </div>
    );
};

export interface CaptchaWrapProps {}

export default CaptchaWrap;