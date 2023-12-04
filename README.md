![logo-react](https://github.com/cgfeel/react-rotate-captcha/assets/578141/0510ddac-2c95-47f5-a6f4-e0ee8335da3c)

[![NPM version](https://img.shields.io/npm/v/react-rotate-captcha.svg?style=flat)](https://www.npmjs.com/package/react-rotate-captcha) [![NPM downloads](https://img.shields.io/npm/dm/react-rotate-captcha.svg?style=flat)](https://www.npmjs.com/package/react-rotate-captcha) [![React library](https://img.shields.io/badge/react-libaray-blue)](https://www.npmjs.com/package/react-rotate-captcha) [![React component](https://img.shields.io/badge/react-component-green)](https://www.npmjs.com/package/react-rotate-captcha) [![Typescript](https://img.shields.io/badge/typescript-8A2BE2)](https://www.npmjs.com/package/react-rotate-captcha) [![License](https://img.shields.io/npm/l/react-rotate-captcha)](https://github.com/cgfeel/react-rotate-captcha/blob/main/LICENSE) [![npm bundle size (minzip)](https://img.shields.io/bundlephobia/minzip/react-rotate-captcha)](https://www.npmjs.com/package/react-rotate-captcha) [![npm bundle size (min)](https://img.shields.io/bundlephobia/min/react-rotate-captcha)](https://www.npmjs.com/package/react-rotate-captcha)

一个开箱即用的滑动验证码React组件，基于[[isszz/rotate-captcha](https://github.com/isszz/rotate-captcha)]做的二次开发；结合了腾讯防水墙，增加安全策略，查看：策略 和 设计思路

<img width="351" alt="image" src="https://github.com/cgfeel/laravel-rotate-captcha/assets/578141/0f6d4073-2811-4c5b-807d-a95d56973848">

Demo整理中。。。

## 📦 安装 (Installing)

Using NPM

```
npm install react-rotate-captcha
```

Using Yarn

```
yarn add react-rotate-captcha
```

Using PNPM

```
pnpm add react-rotate-captcha
```

## 🔨 使用 (Usage)

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

## 🛟 设计思路 (Design)

![New Board](https://github.com/cgfeel/laravel-rotate-captcha/assets/578141/27e82f87-0937-4e23-9e08-395fd9f0adda)

## ✂️ 物料 (Material)

即时设计的向量稿件，包含组件设计规范：[查看](https://js.design/community?category=detail&type=resource&id=6561674f12aadf8dee1b33c2)

![911700882740_ pic](https://github.com/cgfeel/laravel-rotate-captcha/assets/578141/ea1532fa-17e1-4d08-b005-5089f705388c)

## 🔗 相关产品 (Product)

### react前端组件

整理中，待开放...

### isszz/rotate-captcha

第三方仓库，提供了react和laravel之外的生态扩展 [[点击打开](https://github.com/isszz/rotate-captcha)]

包含：

- 前端：vue、uni-app
- 后端：php、ThinkPHP
