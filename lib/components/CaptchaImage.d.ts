import { Dispatch, SetStateAction } from "react";
import "../assets/index.scss";
import { CaptchaProps, CurrentlyType } from "./Captcha";
declare const CaptchaImage: import("react").ForwardRefExoticComponent<CaptchaImageProps & import("react").RefAttributes<CaptchaImageInstance>>;
export type RollType = 'down' | 'move' | 'up';
export interface CaptchaImageInstance {
    loadImg: (path: string, token: string) => void;
    reStart: () => void;
    toRoll: (name: RollType, x?: number) => number;
}
export interface CaptchaImageProps extends Pick<CaptchaProps, 'load'> {
    show: Dispatch<SetStateAction<CurrentlyType>>;
    reLoad: (code: 0 | 1) => void;
}
export default CaptchaImage;
