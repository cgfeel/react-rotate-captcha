import { FC, useContext } from "react";
import Close from "../assets/close.svg";
import "../assets/index.scss";
import { CaptchaContext } from "./Captcha";

const CaptchaClose: FC<CaptchaCloseProps> = ({ close }) => {
    const { type: [code] } = useContext(CaptchaContext);
    return (
        <button 
            className={`captcha-modal-close${code === 3 ? '' : ' captcha-modal-close-disabled'}`}
            disabled={code !== 3}
            onClick={() => code === 3 && close()}
        >
            <Close />
        </button>
    );
};

export interface CaptchaCloseProps {
    close: () => void;
}

export default CaptchaClose;