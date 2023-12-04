import { FC, useContext } from "react";
import Gantanhao from "../assets/tips/gantanhao.svg";
import Shibai from "../assets/tips/shibai.svg";
import Shuaxin from "../assets/tips/shuaxin.svg";
import Zhengque from "../assets/tips/zhengque.svg";
import { CaptchaContext } from "./Captcha";

const icon = [<Zhengque />, <Shibai />];
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
                {icon[code]||<Gantanhao />}
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
                    {refresh}<Shuaxin className={code === 2 ? 'loading' : ''} />
                </button>
            </div>
        </div>
    );
};

export interface TooltipsProps {
    reLoad: () => void;
}

export default CaptchaTooltips;