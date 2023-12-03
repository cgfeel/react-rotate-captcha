import type { TicketInfoType, TokenInfoType } from "react-rotate-captcha";
import { handle } from "./canvas";

export type ActionType = {
    code: 0|1;
    msg: string;
};

const tokenRaw = "Nvuv8LdXUNRAVW022Gm7HkGc7RTDoEmU";
const info = {
    angle: -1,
    sid: '',
    ticket: '',
};

export async function checkTicket(ticket?: TicketInfoType) {
    const { sid, ticket: ticketRaw } = info;
    const { data } = ticket||{};

    const isWait = sid !== '' && ticketRaw !== '';
    const success = sid === data?.sid && ticketRaw === data.ticket;

    const result = isWait && success ? {
        code: 0,
        msg: 'Successful',
    } : {
        code: 1,
        msg: 'Failed',
    };

    return result as ActionType;
}

export async function get(): Promise<TokenInfoType> {
    info.angle = -1;
    info.sid = '';
    info.ticket = '';
    return {
        code: 0,
        data: {
            str: "t01b6eac4d21e9d24d4",
            token: tokenRaw,
        },
        msg: "success",
    };
}

export function isSupportWebp() {
    try {
      return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0;
    } catch(err) {
      return false;
    }
}

export async function load(path: string) {
    const [degree, src] = await handle(`${location.origin}/${path}.jpg`);
    info.angle = degree;

    return src;
}

export function sleep(time: number) {
    return new Promise(resolve => {
        setTimeout(() => resolve(true), time);
    });
}

export async function verify(token: string, deg: number): Promise<TicketInfoType> {
    const { angle } = info;
    const success = token === tokenRaw && Math.abs(deg - angle) <= 5;

    info.sid = Math.random().toString(36).slice(-8);
    info.ticket = crypto.randomUUID();

    return angle >= 0 && success ? {
        code: 0,
        data: {
            sid: info.sid,
            ticket: info.ticket
        },
        msg: 'Success',
    } : {
        code: 1,
        msg: 'Fail verify',
    };
}