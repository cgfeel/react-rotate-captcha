import { StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import PageDemo from "./page";
import OutSide from "./page/OutSide";

const isSupportWebp = function () {
    try {
      return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0;
    } catch(err) {
      return false;
    }
}

const Root = () => {
    const demoRef = useRef(null);
    return (
        <StrictMode>
            <App
                open={true}
                get={async () => {
                    const request = await fetch(`http://${location.hostname}:8000/rotate.captcha`);
                    const headers = request.headers;

                    const info = await request.json();
                    info.data.token = headers.get('X-Captchatoken');
                    
                    return info;
                    return {
                        code: 0,
                        data: {
                            str: "eyJpdiI6Iml6OW9FaVdSUUVNNjFyUy8yOUtEdWc9PSIsInZhbHVlIjoibmM2R2drQlkvTnlsVkxRNmFtVXBlbFU0TFJyaWEwQk41QzdrTDFLdXZxUXhpOGZnSlRhQ2VDd3RodHZaUlAzSyIsIm1hYyI6ImEyMjhhZjQ0MTA5YjY5YTE1YjY4ZTUxMTAyZjJiN2E1NzM3YjVjMWFmM2U5YjQ2ZGNiYzk0YTQ1YmNmYzFkNTIiLCJ0YWciOiIifQ==",
                            token: "Nvuv8LdXUNRAVW022Gm7HkGc7RTDoEmU",
                        },
                        msg: "success",
                    };
                }}
                load={async (path) => {
                    return `http://${location.hostname}:8000/rotate.captcha/${path}`;
                }}
                result={info => demoRef.current.setTicket(info)}
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
                <PageDemo ref={demoRef} />
            </App>
            <OutSide />
        </StrictMode>
    );
};

createRoot(document.getElementById('root')).render(<Root />);