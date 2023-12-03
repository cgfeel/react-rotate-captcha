import { FC } from "react";
import "../assets/index.scss";
import { CaptchaCloseProps } from "./CaptchaClose";
declare const CaptchaMask: FC<CaptchaMaskProps>;
export interface CaptchaMaskProps extends CaptchaCloseProps {
}
export default CaptchaMask;
