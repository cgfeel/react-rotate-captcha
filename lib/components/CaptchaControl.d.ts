/// <reference types="react" />
import "../assets/index.scss";
import { CaptchaProps } from "./Captcha";
import { RollType } from "./CaptchaImage";
declare const CaptchaControl: import("react").ForwardRefExoticComponent<CaptchaControlProps & import("react").RefAttributes<CaptchaControlInstance>>;
export interface CaptchaControlInstance {
    reback: () => void;
    restart: (num?: number) => void;
}
export interface CaptchaControlProps extends Pick<CaptchaProps, 'limit'> {
    onRoll: (name: RollType, x?: number) => number;
    send: (deg: number) => void;
    show: () => void;
}
export default CaptchaControl;
