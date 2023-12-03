import { FC, useRef, useState } from "react";
import RotateCaptcha, { CaptchaInstance, TicketInfoType } from "react-rotate-captcha";
import ActionBtn from "../components/ActionBtn";
import Wrapper from "../components/Wrapper";
import { get, load, verify } from "../server";
import "../index.scss";

const OutSide: FC = () => {
    const ref = useRef<CaptchaInstance>(null);
    const [ticket, setTicket] = useState<TicketInfoType|undefined>();

    return (
        <div
            className="container"
        >
            <RotateCaptcha
                ref={ref}
                get={get}
                load={load}
                result={info => setTicket(info)}
                verify={verify}
            >
                <div
                    className="row"
                >
                    <div 
                        className="text"
                    >
                        <span>示例：</span>
                        <span>通过Ref触发</span>
                    </div>
                </div>
            </RotateCaptcha>
            <div 
                className="row"
            >
                <Wrapper 
                    ticket={ticket}
                    captcha={[
                        <button 
                            key="verify"
                            onClick={() => ref.current!.open()}
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
    );
};

export default OutSide;