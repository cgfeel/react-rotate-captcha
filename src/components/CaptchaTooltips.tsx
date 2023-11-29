import { FC, useContext } from "react";
import "../assets/icon/iconfont.css";
import { CaptchaContext } from "./Captcha";

const icon = [
    <i className="iconfont">&#xe8ad;</i>,
    <i className="iconfont">&#xe8a9;</i>,
];

const color = ['tips-success', 'tips-fail'];

const CaptchaTooltips: FC<TooltipsProps> = ({ reLoad }) => {
    const { lang: { refresh }, type: [code, msg] } = useContext(CaptchaContext);
    const colorTips = color[code]||'';

    return (
        <div 
            className="captcha-tooltips"
        >
            <div
                className={`captcha-tips${colorTips ? (' ' + colorTips) : ''}`}
            >
                {icon[code]||<i className="iconfont">&#xe8a5;</i>}
                <span
                    className="captcha-tooltip-shot"
                >
                    {msg}
                </span>
            </div>
            <div
                className={`captcha-reset${code !== 3 ? ' disabled' : ''}`}
            >
                <button 
                    disabled={code !== 3}
                    onClick={reLoad}
                >
                    {refresh}<i className={`iconfont${code === 2 ? ' loading' : ''}`}>&#xe8aa;</i>
                </button>
            </div>
        </div>
    );
};

export interface TooltipsProps {
    reLoad: () => void;
}

export default CaptchaTooltips;