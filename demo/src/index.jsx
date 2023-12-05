import { StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import RotateCaptcha from "react-rotate-captcha";
import PageDemo from "./page";
import OutSide from "./page/OutSide";
import Statusoutput from "./page/Statusoutput";
import { get, load, verify } from "./server";

const Root = () => {
    const demoRef = useRef(null);
    return (
        <StrictMode>
            <RotateCaptcha
                open={false}
                get={get}
                load={load}
                result={info => demoRef.current.setTicket(info)}
                verify={verify}
            >
                <PageDemo ref={demoRef} />
            </RotateCaptcha>
            <OutSide />
            <Statusoutput />
        </StrictMode>
    );
};

createRoot(document.getElementById('root')).render(<Root />);