import { FC } from "react";
import "../assets/index.scss";
declare const CaptchaClose: FC<CaptchaCloseProps>;
export interface CaptchaCloseProps {
    close: () => void;
}
export default CaptchaClose;
