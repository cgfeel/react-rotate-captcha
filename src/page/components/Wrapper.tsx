import { FC, PropsWithChildren, ReactNode, createContext, useState } from "react";
import { TicketInfoType } from "../../App";
import '../index.scss';
import { ActionType } from "../server";

const Wrapper: FC<PropsWithChildren<WrapperProps>> = ({ captcha, children, ticket }) => {
    const [info, setInfo] = useState<ActionType|undefined>(undefined);
    return (
        <WrapperContext.Provider
            value={{ setInfo }}
        >
            <div
                className="wrapper"
            >
                <div 
                    className="item"
                >
                    {captcha}
                    <pre>{JSON.stringify(ticket, null, 2)}</pre>
                </div>
                <div className="item">
                    {children}
                    <pre>{JSON.stringify(info, null, 2)}</pre>
                </div>
            </div>
        </WrapperContext.Provider>
    );
};

interface WrapperContextInstance {
    setInfo: (info: ActionType) => void;
}

export const WrapperContext = createContext<WrapperContextInstance>({} as WrapperContextInstance);

export interface WrapperProps {
    captcha?: ReactNode;
    ticket?: TicketInfoType;
}

export default Wrapper;