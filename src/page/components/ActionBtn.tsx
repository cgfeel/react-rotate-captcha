import { FC, useCallback, useContext } from "react";
import { TicketInfoType } from "../../";
import { checkTicket } from "../server";
import { WrapperContext } from "./Wrapper";

const ActionBtn: FC<ActionBtnProps> = ({ ticket }) => {
    const { setInfo } = useContext(WrapperContext);
    const { data } = ticket||{};

    const getInfo = useCallback(async (ticket?: TicketInfoType) => {
        const info = await checkTicket(ticket);
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