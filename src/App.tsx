import Captcha, { CaptchaInstance, CaptchaProps, resultType, ticketType } from "./components/Captcha";
import { LangType } from "./components/lang";
import useCaptchaInstance from "./components/useCaptchaInstance";

type InternalCaptchaType = typeof Captcha;

type CompoundedComponent = InternalCaptchaType & {
    useCaptchaInstance: typeof useCaptchaInstance;
}

const RotateCaptcha = Captcha as CompoundedComponent;

RotateCaptcha.useCaptchaInstance = useCaptchaInstance;

type TicketInfoType = resultType<ticketType>;
export type {
    CaptchaInstance,
    CaptchaProps,
    LangType,
    TicketInfoType,
};

export { RotateCaptcha };

export default RotateCaptcha;