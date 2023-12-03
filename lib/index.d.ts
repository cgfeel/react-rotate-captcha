import Captcha, { CaptchaInstance, CaptchaProps, resultType, ticketType, tokenType } from "./components/Captcha";
import { LangType } from "./components/lang";
import useCaptchaInstance from "./components/useCaptchaInstance";
type InternalCaptchaType = typeof Captcha;
type CompoundedComponent = InternalCaptchaType & {
    useCaptchaInstance: typeof useCaptchaInstance;
};
declare const RotateCaptcha: CompoundedComponent;
type TicketInfoType = resultType<ticketType>;
type TokenInfoType = resultType<tokenType>;
export type { CaptchaInstance, CaptchaProps, LangType, TicketInfoType, TokenInfoType, };
export { RotateCaptcha };
export default RotateCaptcha;
