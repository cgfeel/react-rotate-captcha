import { FC } from "react";
import "../assets/icon/iconfont.css";
declare const CaptchaTooltips: FC<TooltipsProps>;
export interface TooltipsProps {
    reLoad: () => void;
}
export default CaptchaTooltips;
