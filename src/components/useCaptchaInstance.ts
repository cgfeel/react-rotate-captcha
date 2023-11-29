import { useContext } from "react";
import { CaptchaContext } from "./Captcha";

export default function useCaptchaInstance() {
    const { captcha } = useContext(CaptchaContext);
    return captcha;
}