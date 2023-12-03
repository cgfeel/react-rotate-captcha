import { PropsWithChildren, ReactElement, ReactNode, Ref } from "react";
import { LangType } from "./lang";
export declare const CaptchaContext: import("react").Context<CaptchaContextInstance>;
export interface CaptchaContextInstance {
    captcha: CaptchaInstance;
    lang: LangType;
    type: CurrentlyType;
}
export interface CaptchaInstance {
    close: (force?: boolean) => void;
    open: () => void;
    reload: () => void;
}
export interface CaptchaProps {
    className?: string;
    close?: null | ReactNode;
    lang?: LangType | string;
    limit?: number;
    mask?: null | ReactNode;
    open?: boolean;
    tips?: ReactNode;
    theme?: 'dark' | 'light';
    zIndex?: number;
    get?: () => Promise<resultType<tokenType>>;
    load?: (path: string) => Promise<string>;
    result?: (info: resultType<ticketType>) => void;
    verify?: (token: string, deg: number) => Promise<resultType<ticketType>>;
}
/**
 * - 0.正确; 1.错误; 2.待获取; 3.待提交; 4.提交中
 * - msg
 * - forceStop
 */
export type CurrentlyType = [0 | 1 | 2 | 3 | 4, string, boolean?];
/**
 * code: 0.正常; 1.错误可继续; 2.错误重新开始; -1.过期操作(非验证行为)
 */
export type resultType<T extends any> = {
    code: -1 | 0 | 1 | 2;
    msg: string;
    data?: T;
};
export type ticketType = {
    sid: string;
    ticket: string;
};
export type tokenType = {
    str: string;
    token: string;
};
declare const Captcha: ((props: PropsWithChildren<CaptchaProps> & {
    ref?: Ref<CaptchaInstance>;
}) => ReactElement) & {
    displayName?: string | undefined;
};
export default Captcha;
