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

通过`status`唤起

```tsx
import { useState } from 'react';
import RotateCaptcha from "react-rotate-captcha";

function App() {
    const [open] = useState(true);
    return <RotateCaptcha open={open} />
}
```

通过`context`唤起

```tsx
import RotateCaptcha from "react-rotate-captcha";

function Page() {
    const captcha = RotateCaptcha.useCaptchaInstance();
    return (
        <button onClick={() => captcha.open()}>click it</button>
    );
}

function App() {
    return (
        <RotateCaptcha>
            <Page />
        </RotateCaptcha>
    );
}
```

通过`ref`唤起

```tsx
import { useRef } from 'react';
import RotateCaptcha, { CaptchaInstance } from "react-rotate-captcha";

function App() {
    const ref = useRef<CaptchaInstance>(null);
    return (
        <RotateCaptcha ref={ref}>
            <button onClick={() => ref.current!.open()}>click it</button>
        </RotateCaptcha>
    );
}
```

更多请见下方Api

## 📍 参数 (Props)

### Captcha Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| className | 验证浮窗顶层样式名，用于覆盖默认主题样式 | `string` | - |
| close | 自定义关闭按钮，设置`null`屏蔽按钮 | `ReactNode` &#9474; `null` | - |
| lang | 语言，默认提供`en`和`zh_CN`，接受传入`LangType`对象自定义语言 | `LangType` &#9474; `string` | `zh_CN` |
| limit | 试错次数，需要和服务端设置一致 | `number` | 2 |
| mask | 自定义背景层，设置`null`屏蔽背景层 | `ReactNode` &#9474; `null` | - |
| open | `true`打开验证码，否则关闭 | `boolean` | - |
| tips | 自定义底部提示 | `ReactNode` | - |
| theme | 提供两个主体`dark`和`light`，自定义主题通过自定义样式变量 | `string` | `light` |
| zIndex | 浮窗样式层级 | `number` | 999 |

- 主题样式变量请参考样式源文件：[[查看](https://github.com/cgfeel/react-rotate-captcha/blob/main/src/assets/index.scss)]
- `LangType`类型：[[查看](https://github.com/cgfeel/react-rotate-captcha/blob/main/lib/components/lang.d.ts)]

### Captcha Event Props

接受4个方法，只有`result`是同步函数，其余全部为异步函数

| 参数 | 说明 | 参数 | 返回值 |
| ----- | ----- | ----- | ----- |
| get | 初始获取验证码信息 | - | `Promise<resultType<tokenType>>` |
| load | 提取`tokenType`中的`str`去换图片，返回图片`URL`路径或图片`base64`字符 | `path: string` | `Promise<string>` |
| result | 提取正确或错误的票据结果，可选，也可以通过`verify`直接获取结果 | `info: resultType<ticketType>` | `void` |
| verify | 滚动验证，返回票据信息 | `token: string`，`deg: number` | `Promise<resultType<ticketType>>` |

- Captcha数据类型：[[查看](https://github.com/cgfeel/react-rotate-captcha/blob/main/lib/components/Captcha.d.ts)]
- 请通过下方提供的`Api`接口，自行获取验证数据，组件内部不提供数据获取

### Captcha Instance

通过`ref`或`useCaptchaInstance`返回的`Captcha`实例，接受3个方法，所有方法都返回`void`，具体如下：

| 参数 | 说明 | 参数 |
| ----- | ----- | ----- |
| close | 关闭浮窗，参数`force`默认值`false`，设为`true`将强制销毁验证浮窗 | `force?: boolean` |
| open | 打开浮窗 | - |
| reload | 重新获取验证码图片 | - |

### CaptchaContext

通过`useContent`提供上下文`CaptchaContext`，方便自定义提示栏：

`CurrentlyType: [0|1|2|3|4, string, boolean?]`，验证状态：

- 状态：0.正确; 1.错误; 2.待获取; 3.待提交; 4.提交中
- 提示信息
- 是否强制停止流程，例如初始信息加载失败

`LangType`使用的语言：[[查看](https://github.com/cgfeel/react-rotate-captcha/blob/main/lib/components/lang.d.ts)]

`captcha`，Captcha实例，如果只获取实例建议通过`ref`或`useCaptchaInstance`

## 🎯 接口 (Api)

这里以开源的`levi/laravel-rotate-captcha`（[查看](https://github.com/cgfeel/laravel-rotate-captcha)）举例，提供了5个接口（[查看](https://github.com/cgfeel/laravel-rotate-captcha#%E4%BD%BF%E7%94%A8-usage)），请求参数和返回数据如下：

### 获取验证码信息

- **URL: ** `/rotate.captcha`
- **method: ** `GET`
- **response: **: `{ code: 0|1; msg: string; data: { ${str}: string } }`
- **res header: ** `X-Captchatoken: ${token}`

### `str`换image

- **URL: ** `/rotate.captcha/${str}`
- **method: ** `GET`
- **response: **: image url or base64

### 验证信息，`token`换`ticket`

- **URL: ** `/rotate.captcha/verify/${angle}/${token?}`
- **method: ** `GET`
- **response: ** `{ code: 0|1|2; msg: string; data?: { ${sid}: string; ${ticket}: string; } }`
- **req header: ** `X-Captchatoken: ${token}`

`URL`中或`req header`中的，至少有一处提供`${token?}`

### 鉴权测试，请根据实际情况替换鉴权接口

- **URL: ** `/rotate.captcha/verify/${angle}/${token?}`
- **method: ** `GET`
- **response: **: `{ code: 0|1|2; msg: string; data?: { ${sid}: string; ${ticket}: string; } }`

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
