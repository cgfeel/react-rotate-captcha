import { FC, useRef, useState } from "react";
import { CaptchaInstance, RotateCaptcha, TicketInfoType } from "../App";
import ActionBtn from "./components/ActionBtn";
import Wrapper from "./components/Wrapper";
import './index.scss';

const OutSide: FC = () => {
    const ref = useRef<CaptchaInstance>(null);
    const [ticket, setTicket] = useState<TicketInfoType|undefined>();

    return (
        <div
            className="container"
        >
            <RotateCaptcha
                ref={ref}
                get={async () => {
                    const request = await fetch(`http://${location.hostname}:8000/rotate.captcha`);
                    const headers = request.headers;

                    const info = await request.json();
                    info.data.token = headers.get('X-Captchatoken');
                    
                    return info;
                }}
                load={async (path) => {
                    return `http://${location.hostname}:8000/rotate.captcha/${path}`;
                }}
                result={info => setTicket(info)}
                verify={async (token, deg) => {
                    const request = await fetch(`http://${location.hostname}:8000/rotate.captcha/verify/${deg}`, {
                        method: "GET",
                        headers: {
                            'X-Captchatoken': token,
                        }
                    });
                    const info = await request.json();
                    return info;
                }}
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