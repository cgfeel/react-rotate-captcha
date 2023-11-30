import Captcha, { CaptchaInstance, CaptchaProps, resultType, ticketType, tokenType } from "./components/Captcha";
import { LangType } from "./components/lang";
import useCaptchaInstance from "./components/useCaptchaInstance";

type InternalCaptchaType = typeof Captcha;

type CompoundedComponent = InternalCaptchaType & {
    useCaptchaInstance: typeof useCaptchaInstance;
}

const RotateCaptcha = Captcha as CompoundedComponent;

RotateCaptcha.useCaptchaInstance = useCaptchaInstance;

type TicketInfoType = resultType<ticketType>;
type TokenInfoType = resultType<tokenType>;

export type {
    CaptchaInstance,
    CaptchaProps,
    LangType,
    TicketInfoType,
    TokenInfoType,
};

export { RotateCaptcha };

export default RotateCaptcha;