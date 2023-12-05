import { FC, useState } from "react";
import RotateCaptcha, { TicketInfoType } from "react-rotate-captcha";
import ActionBtn from "../components/ActionBtn";
import Wrapper from "../components/Wrapper";
import { get, load, verify } from "../server";

const Statusoutput: FC = () => {
    const [ticket, setTicket] = useState<TicketInfoType|undefined>();
    const [open, setOpen] = useState(false);

    return (
        <div
            className="container"
        >
            <RotateCaptcha
                open={open}
                get={get}
                load={load}
                onClose={() => setOpen(false)}
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
                            onClick={() => setOpen(true)}
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

export default Statusoutput;