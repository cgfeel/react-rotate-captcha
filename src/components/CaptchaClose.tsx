import { FC, useContext } from "react";
import Close from "../assets/close.svg";
import "../assets/index.scss";
import { CaptchaContext } from "./Captcha";

const CaptchaClose: FC<CaptchaCloseProps> = ({ close }) => {
    const { type: [code,,force] } = useContext(CaptchaContext);
    const disabled = code !== 3 && force !== true;

    return (
        <button 
            className={`captcha-modal-close${!disabled ? '' : ' captcha-modal-close-disabled'}`}
            disabled={disabled}
            onClick={() => (code === 3 || force === true) && close()}
        >
            <Close />
        </button>
    );
};

export interface CaptchaCloseProps {
    close: () => void;
}

export default CaptchaClose;