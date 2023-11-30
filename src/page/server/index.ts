import { TicketInfoType, TokenInfoType } from "../../App";
import { handle } from "./canvas";

const tokenRaw = "Nvuv8LdXUNRAVW022Gm7HkGc7RTDoEmU";
let angle = 0;

export async function get(): Promise<TokenInfoType> {
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
    angle = degree;

    return src;
}

export function sleep(time: number) {
    return new Promise(resolve => {
        setTimeout(() => resolve(true), time);
    });
}

export async function verify(token: string, deg: number): Promise<TicketInfoType> {
    console.log(angle, deg);
    const success = token === tokenRaw && Math.abs(deg - angle) <= 5;
    return success ? {
        code: 0,
        data: {
            sid: Math.random().toString(36).slice(-8),
            ticket: crypto.randomUUID()
        },
        msg: 'Success',
    } : {
        code: 1,
        msg: 'Fail verify',
    };
}