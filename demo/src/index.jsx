import { StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import App from "react-rotate-captcha";
import PageDemo from "../../src/page";
import OutSide from "../../src/page/OutSide";
import { get, load, verify } from "../../src/page/server";

const Root = () => {
    const demoRef = useRef(null);
    return (
        <StrictMode>
            <App
                open={true}
                get={get}
                load={load}
                result={info => demoRef.current.setTicket(info)}
                verify={verify}
            >
                <PageDemo ref={demoRef} />
            </App>
            <OutSide />
        </StrictMode>
    );
};

createRoot(document.getElementById('root')).render(<Root />);