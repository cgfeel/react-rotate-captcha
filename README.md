![logo-react](https://github.com/cgfeel/react-rotate-captcha/assets/578141/0510ddac-2c95-47f5-a6f4-e0ee8335da3c)

[![NPM version](https://img.shields.io/npm/v/react-rotate-captcha.svg?style=flat)](https://www.npmjs.com/package/react-rotate-captcha) [![NPM downloads](https://img.shields.io/npm/dm/react-rotate-captcha.svg?style=flat)](https://www.npmjs.com/package/react-rotate-captcha) [![React library](https://img.shields.io/badge/react-libaray-blue)](https://www.npmjs.com/package/react-rotate-captcha) [![React component](https://img.shields.io/badge/react-component-green)](https://www.npmjs.com/package/react-rotate-captcha) [![Typescript](https://img.shields.io/badge/typescript-8A2BE2)](https://www.npmjs.com/package/react-rotate-captcha) [![License](https://img.shields.io/npm/l/react-rotate-captcha)](https://github.com/cgfeel/react-rotate-captcha/blob/main/LICENSE.txt) [![npm bundle size (minzip)](https://img.shields.io/bundlephobia/minzip/react-rotate-captcha)](https://www.npmjs.com/package/react-rotate-captcha) [![npm bundle size (min)](https://img.shields.io/bundlephobia/min/react-rotate-captcha)](https://www.npmjs.com/package/react-rotate-captcha)

A captcha extension package for React

```
import { TicketInfoType, TokenInfoType } from "../../App";
import { handle } from "./canvas";

const tokenRaw = "Nvuv8LdXUNRAVW022Gm7HkGc7RTDoEmU";
let angle = 0;

export async function get(): Promise<TokenInfoType> {
    /*const request = await fetch(`http://${location.hostname}:8000/rotate.captcha`);
    const headers = request.headers;

    const info = await request.json();
    info.data.token = headers.get('X-Captchatoken');
    
    return info;*/
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
    return `http://${location.hostname}:8000/rotate.captcha/${path}`;
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
    /*const request = await fetch(`http://${location.hostname}:8000/rotate.captcha/verify/${deg}`, {
        method: "GET",
        headers: {
            'X-Captchatoken': token,
        }
    });
    const info = await request.json();
    return info;*/
}

export async function ticket(ticket?: TicketInfoType) {
    const { data } = ticket||{};
    const response = await fetch(`http://${location.hostname}:8000/rotate.captcha/test/action`, data === undefined ? {} : {
        headers: {
            'X-Captchasid': data.sid,
            'X-Captchaticket': data.ticket,
        },
    });
    
    const info: ActionType = await response.json();
    return info;
}
```
