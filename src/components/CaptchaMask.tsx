import { FC, useContext } from "react";
import "../assets/index.scss";
import { CaptchaContext } from "./Captcha";
import { CaptchaCloseProps } from "./CaptchaClose";

const CaptchaMask: FC<CaptchaMaskProps> = ({ close }) => {
    const { type: [code] } = useContext(CaptchaContext);
    return (
        <div
            className="captcha-mask"
            onClick={() => code == 3 && close()}
        ></div>
    );
};

export interface CaptchaMaskProps extends CaptchaCloseProps {}

export default CaptchaMask;