import { Dispatch, ReactNode, SetStateAction } from "react";
import "../assets/index.scss";
import { CaptchaProps, CurrentlyType } from "./Captcha";
declare const RotateCaptcha: import("react").ForwardRefExoticComponent<RotateCaptchaProps & {
    children?: ReactNode;
} & import("react").RefAttributes<RotateCaptchaInstance>>;
export interface RotateCaptchaInstance {
    load: (num?: 0 | 1 | 2) => void;
    start: () => Promise<void>;
    toVerify: (deg: number) => ReturnType<Required<CaptchaProps>['verify']>;
}
export interface RotateCaptchaProps extends Pick<CaptchaProps, 'className' | 'get' | 'theme' | 'verify' | 'zIndex'> {
    visible: 0 | 1;
    loadImg: (path: string, token: string) => void;
    show: Dispatch<SetStateAction<CurrentlyType>>;
    close?: ReactNode;
    mask?: ReactNode;
}
export default RotateCaptcha;
