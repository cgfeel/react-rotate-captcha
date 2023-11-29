import { FC, useCallback, useContext } from "react";
import { TicketInfoType } from "../../App";
import { ActionType, WrapperContext } from "./Wrapper";

const ActionBtn: FC<ActionBtnProps> = ({ ticket }) => {
    const { setInfo } = useContext(WrapperContext);
    const { data } = ticket||{};

    const getInfo = useCallback(async (ticket?: TicketInfoType) => {
        const { data } = ticket||{};
        const response = await fetch(`http://${location.hostname}:8000/rotate.captcha/test/action`, data === undefined ? {} : {
            headers: {
                'X-Captchasid': data.sid,
                'X-Captchaticket': data.ticket,
            },
        });
        
        const info: ActionType = await response.json();
        setInfo(info);
    }, [setInfo]);

    return [
        <button
            key="ticket"
            disabled={!data?.sid || !data.ticket}
            onClick={() => getInfo(ticket)}
        >
            通过ticket请求
        </button>,
        <button
            key="nopower"
            onClick={() => getInfo()}
        >
            无权限请求
        </button>,
    ];
};

export interface ActionBtnProps {
    ticket?: TicketInfoType;
}

export default ActionBtn;