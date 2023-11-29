import { forwardRef, useImperativeHandle, useState } from "react";
import { RotateCaptcha, TicketInfoType } from "../App";
import ActionBtn from "./components/ActionBtn";
import Wrapper from "./components/Wrapper";
import './index.scss';

const PageDemo = forwardRef<DemoInstance>((_, ref) => {
    const captcha = RotateCaptcha.useCaptchaInstance();
    const [ticket, setTicket] = useState<TicketInfoType|undefined>();

    useImperativeHandle(ref, () => ({
        setTicket: info => setTicket(info),
    }));

    return [
        <div
            className="container"
            key="container"
        >
            <div 
                className="row"
            >
                <div 
                    className="text"
                >
                    <span>示例：</span>
                    <span>Context上下文中触发</span>
                </div>
            </div>
            <div 
                className="row"
            >
                <Wrapper 
                    ticket={ticket}
                    captcha={[
                        <button 
                            key="verify"
                            onClick={() => captcha.open()}
                        >
                            开始验证
                        </button>,
                        <button 
                            key="clear"
                            onClick={() => setTicket(undefined)}
                        >
                            清空
                        </button>
                    ]}
                >
                    <ActionBtn ticket={ticket} />
                </Wrapper>
            </div>
        </div>
    ];
});

export interface DemoInstance {
    setTicket: (info: TicketInfoType) => void;
}

export default PageDemo;