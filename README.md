![logo-react](https://github.com/cgfeel/react-rotate-captcha/assets/578141/0510ddac-2c95-47f5-a6f4-e0ee8335da3c)

[![NPM version](https://img.shields.io/npm/v/react-rotate-captcha.svg?style=flat)](https://www.npmjs.com/package/react-rotate-captcha) [![NPM downloads](https://img.shields.io/npm/dm/react-rotate-captcha.svg?style=flat)](https://www.npmjs.com/package/react-rotate-captcha) [![React library](https://img.shields.io/badge/react-libaray-blue)](https://www.npmjs.com/package/react-rotate-captcha) [![React component](https://img.shields.io/badge/react-component-green)](https://www.npmjs.com/package/react-rotate-captcha) [![Typescript](https://img.shields.io/badge/typescript-8A2BE2)](https://www.npmjs.com/package/react-rotate-captcha) [![License](https://img.shields.io/npm/l/react-rotate-captcha)](https://github.com/cgfeel/react-rotate-captcha/blob/main/LICENSE) [![npm bundle size (minzip)](https://img.shields.io/bundlephobia/minzip/react-rotate-captcha)](https://www.npmjs.com/package/react-rotate-captcha) [![npm bundle size (min)](https://img.shields.io/bundlephobia/min/react-rotate-captcha)](https://www.npmjs.com/package/react-rotate-captcha)

一个开箱即用的滑动验证码React组件，基于[[isszz/rotate-captcha](https://github.com/isszz/rotate-captcha)]做的二次开发；结合了腾讯防水墙，增加安全策略，查看：策略 和 设计思路

后端提供`Laravel`扩展：`levi/laravel-rotate-captcha` [[查看](https://github.com/cgfeel/laravel-rotate-captcha)]，可直接使用或参考下方Api接口定制

<img width="351" alt="image" src="https://github.com/cgfeel/laravel-rotate-captcha/assets/578141/0f6d4073-2811-4c5b-807d-a95d56973848">

## 🎙️ 演示 (Demo)

以下演示全部都一样，分别展示了多主题，多语言、多个唤起方式；在不同的环境下的演示，可根据自己的情况选择一个环境查看演示和演示的代码

- CodeSondbox：Webpack+TS+React [[查看](https://codesandbox.io/p/devbox/tske-yong-v5-d5kgjr?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clpqci2l100073b6lcf1o65qk%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clpqci2l000023b6lh9c8vv90%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clpqci2l000043b6ld2blf0sx%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clpqci2l000063b6lewuwosa5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B60%252C40%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clpqci2l000023b6lh9c8vv90%2522%253A%257B%2522id%2522%253A%2522clpqci2l000023b6lh9c8vv90%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clpqci2l000063b6lewuwosa5%2522%253A%257B%2522id%2522%253A%2522clpqci2l000063b6lewuwosa5%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpqci2l000053b6lwhnjyn5s%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522path%2522%253A%2522%252Fzh-CN%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpqci2l000053b6lwhnjyn5s%2522%257D%252C%2522clpqci2l000043b6ld2blf0sx%2522%253A%257B%2522id%2522%253A%2522clpqci2l000043b6ld2blf0sx%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpqci2l000033b6l2vrwme3j%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpqci2l000033b6l2vrwme3j%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)]
- CodeSondbox：Webpack+JS+React [[查看](https://codesandbox.io/p/devbox/react-rotate-captcha-js-react-webpack-ngm77w?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clpp92lgn00083b6lcztfa1s7%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clpp92lgm00023b6lox4wiual%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clpp92lgm00053b6lk2sv6sks%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clpp92lgn00073b6lcb020nkl%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clpp92lgm00023b6lox4wiual%2522%253A%257B%2522id%2522%253A%2522clpp92lgm00023b6lox4wiual%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clpp92lgn00073b6lcb020nkl%2522%253A%257B%2522id%2522%253A%2522clpp92lgn00073b6lcb020nkl%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpp92lgn00063b6lt7dh3gg9%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522path%2522%253A%2522%252Fen-US%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpp92lgn00063b6lt7dh3gg9%2522%257D%252C%2522clpp92lgm00053b6lk2sv6sks%2522%253A%257B%2522id%2522%253A%2522clpp92lgm00053b6lk2sv6sks%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpp92lgm00033b6l4gn4biw7%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%257D%252C%257B%2522id%2522%253A%2522clpp92lgm00043b6lprj2oc6z%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522build%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522yarn%2520add%2520react-rotate-captcha%2540latest%2522%252C%2522id%2522%253A%2522clpt7p4yv005j3b6ld1k4bd3z%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpp92lgm00033b6l4gn4biw7%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)]
- CodeSondbox：Vite+TS+React [[查看](https://codesandbox.io/p/devbox/react-rotate-captcha-ts-react-vite-t23lcq?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clpqf4taw00073b6lf9ixqjs6%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clpqf4tav00023b6l8tmq733p%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clpqf4taw00043b6lpn1xeejf%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clpqf4taw00063b6lzext9al2%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clpqf4tav00023b6l8tmq733p%2522%253A%257B%2522id%2522%253A%2522clpqf4tav00023b6l8tmq733p%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clpqf4taw00063b6lzext9al2%2522%253A%257B%2522id%2522%253A%2522clpqf4taw00063b6lzext9al2%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpqf4taw00053b6lvewjnad1%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522path%2522%253A%2522%252Fzh-CN%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpqf4taw00053b6lvewjnad1%2522%257D%252C%2522clpqf4taw00043b6lpn1xeejf%2522%253A%257B%2522id%2522%253A%2522clpqf4taw00043b6lpn1xeejf%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpqf4taw00033b6lpioiumrk%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpqf4taw00033b6lpioiumrk%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)]
- Stackblitz：ts+react [[查看](https://stackblitz.com/edit/stackblitz-starters-paesfm?file=src%2FApp.tsx)]

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
    const [open, setOpen] = useState(true);
    return <RotateCaptcha open={open} onClose={() => setOpen(false)} />
}
```

通过`Instance`唤起

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

接受5个方法，只有`result`是同步函数，其余全部为异步函数

| 参数 | 说明 | 参数 | 返回值 |
| ----- | ----- | ----- | ----- |
| get | 初始获取验证码信息 | - | `Promise<resultType<tokenType>>` |
| load | 提取`tokenType`中的`str`去换图片，返回图片`URL`路径或图片`base64`字符 | `path: string` | `Promise<string>` |
| onClose | 关闭浮窗触发，以`status`唤起的验证，必须提供`onClose`来关闭 | - | `void` |
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

- `status`唤起的验证，不支持强制销毁

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

- URL: `/rotate.captcha`
- method: `GET`
- response: `{ code: 0|1; msg: string; data: { ${str}: string } }`
- res header: `X-Captchatoken: ${token}`

### `str`换image

- URL: `/rotate.captcha/${str}`
- method: `GET`
- response: image url or base64

### 验证信息，`token`换`ticket`

- URL: `/rotate.captcha/verify/${angle}/${token?}`
- method: `GET`
- response: `{ code: 0|1|2; msg: string; data?: { ${sid}: string; ${ticket}: string; } }`
- req header: `X-Captchatoken: ${token}`

`URL`中或`req header`中的，至少有一处提供`${token?}`

### 鉴权测试，请根据实际情况替换鉴权接口

- URL: `/rotate.captcha/test/action`
- method: `GET|POST`
- response: `{ code: 0|1|2; msg: string; }`
- req header: `X-Captchasid: ${sid}; X-Captchaticket: ${ticket}; X-Captchapolicie?: ${police}`

请求可以通过`header`或`POST formData`或`POST raw`提交；安全策略`police`根据服务器配置决定是否提交

### 自定义获取验证信息

当需要匹配不同尺寸的设备时，或者一些老的设备不支持`webp`的情况下，通过这个接口获取定制的验证图片

- URL: `/rotate.captcha`
- method: `POST`
- formData: `{ size?: number; output?: 'jpg'|'png'|'webp' }`
- response: `{ code: 0|1; msg: string; data: { ${str}: string } }`
- res header: `X-Captchatoken: ${token}`

> `code`的状态：0.正常; 1.错误可继续; 2.错误重新开始; 注意：小于0的值为内部保留状态，请勿使用

## 📜 组件类型引导 (TypeScript)

如果安装后获取不到组件类型，请在`tsconfig.json`的`compilerOptions`添加如下引导：

```
    "typeRoots": [
        "./node_modules/@types"
    ]
```

## 🛟 设计思路 (Design)

高级用法：

- 验证流程中`ua`实际并不局限使用`User-Agent`，可以通过自定义头部加密拼接增加安全系数
- 除了头部，包括图片路径，都可以在本地通过二次加密`encryption`的方式增加安全系数

![New Board](https://github.com/cgfeel/laravel-rotate-captcha/assets/578141/27e82f87-0937-4e23-9e08-395fd9f0adda)

## ✂️ 物料 (Material)

即时设计的向量稿件，包含组件设计规范：[查看](https://js.design/community?category=detail&type=resource&id=6561674f12aadf8dee1b33c2)

![911700882740_ pic](https://github.com/cgfeel/laravel-rotate-captcha/assets/578141/ea1532fa-17e1-4d08-b005-5089f705388c)

## 🗓️ 更新日志 (Changelog)

具体请查看文档：[更新日志](https://github.com/cgfeel/laravel-rotate-captcha/blob/main/docs/changelog.md)

## 🔗 相关产品 (Product)

### `Laravel`扩展

后端提供`Laravel`扩展：`levi/laravel-rotate-captcha` [[查看](https://github.com/cgfeel/laravel-rotate-captcha)]，可直接使用或参考上方Api接口定制

### isszz/rotate-captcha

第三方仓库，提供了react和laravel之外的生态扩展 [[点击打开](https://github.com/isszz/rotate-captcha)]

包含：

- 前端：vue、uni-app
- 后端：php、ThinkPHP
