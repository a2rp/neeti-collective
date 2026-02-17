import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const BASENAME = import.meta.env.PROD ? "/neeti-collective" : "/";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter basename={BASENAME}>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
