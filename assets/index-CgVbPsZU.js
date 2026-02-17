import{l as u,K as b,r as s,y as l,j as e,t as v,L as p,M as j,g as d,p as y,N,h as x}from"./index-CymWrW4D.js";const w={Wrapper:u.section`
        width: 100%;
        background: var(--color-bg);

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 46px 20px 80px;
        }

        .hero {
            max-width: 980px;
            padding-bottom: 18px;
            border-bottom: 1px solid var(--color-border);
        }

        .kicker {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
        }

        .title {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: clamp(2rem, 4vw, 3rem);
            line-height: 1.08;
            color: var(--color-text);
            margin-bottom: 10px;
        }

        .sub {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.65;
            max-width: 78ch;
        }

        .ctaRow {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 12px 16px;
            border-radius: 999px;
            border: 1px solid var(--color-text);
            text-decoration: none;
            font-size: 0.95rem;
            transition:
                transform 160ms ease,
                opacity 160ms ease,
                background 160ms ease;
            white-space: nowrap;
        }

        .btn:hover {
            transform: translateY(-1px);
            text-decoration: none;
        }

        .btn:active {
            transform: translateY(0);
        }

        .primary {
            background: #0b0b0b;
            color: #ffffff;
            border-color: #0b0b0b;
        }

        .primary:hover {
            opacity: 0.92;
        }

        .ghost {
            background: transparent;
            color: var(--color-text);
            opacity: 0.9;
        }

        .ghost:hover {
            opacity: 1;
            background: var(--color-primary-soft);
        }

        .grid {
            padding-top: 18px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
            align-items: start;
        }

        .left {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
        }

        .cardTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
            margin-bottom: 10px;
        }

        .cardText {
            color: var(--color-text-muted);
            font-size: 0.98rem;
            line-height: 1.65;
            margin-bottom: 12px;
        }

        .form {
            display: grid;
            gap: 10px;
        }

        .field {
            display: grid;
            gap: 8px;
        }

        .lbl {
            font-size: 0.92rem;
            color: var(--color-text);
            font-weight: 700;
        }

        input {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-bg);
            color: var(--color-text);
            padding: 12px 12px;
            font-size: 0.95rem;
            outline: none;
        }

        .submit {
            border: none;
            border-radius: 999px;
            background: #0b0b0b;
            color: #ffffff;
            padding: 14px 16px;
            font-family: var(--font-heading);
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 1rem;
            cursor: pointer;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            transition:
                opacity 160ms ease,
                transform 160ms ease;
        }

        .submit:hover {
            opacity: 0.92;
            transform: translateY(-1px);
        }

        .submit:active {
            transform: translateY(0);
        }

        .submit:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
        }

        .spin svg {
            animation: spin 900ms linear infinite;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .miniNote {
            color: var(--color-text-muted);
            font-size: 0.92rem;
            line-height: 1.55;
        }

        .strong {
            color: var(--color-text);
            font-weight: 800;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .li {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text);
            font-size: 0.98rem;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 99px;
            background: var(--color-text);
            opacity: 0.55;
        }

        .right {
            position: sticky;
            top: 86px;
        }

        .mediaCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            overflow: hidden;
        }

        .mediaTop {
            padding: 14px 16px;
            border-bottom: 1px solid var(--color-border);
        }

        .mediaTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.05rem;
        }

        .mediaSub {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
        }

        /* Image wrapper + loader */
        .imgFrame {
            position: relative;
            width: 100%;
            height: 420px;
            background: var(--color-bg);
        }

        .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .imgLoader,
        .imgError {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
        }

        .imgLoader svg {
            font-size: 1.1rem;
            animation: spin 900ms linear infinite;
        }

        .mediaBottom {
            padding: 14px 16px;
            border-top: 1px solid var(--color-border);
        }

        .mbTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.05rem;
        }

        .mbText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        @media (max-width: 980px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .right {
                position: static;
                top: auto;
            }

            .imgFrame {
                height: 320px;
            }
        }

        @media (max-width: 560px) {
            .container {
                padding: 34px 16px 70px;
            }

            .btn {
                width: 100%;
                max-width: 420px;
            }
        }
    `};function k({src:a,alt:n}){const[o,t]=s.useState("loading");return e.jsxs("div",{className:"imgFrame",children:[o==="loading"?e.jsxs("div",{className:"imgLoader","aria-label":"Loading image",children:[e.jsx(x,{}),e.jsx("span",{className:"imgLoaderText",children:"Loading"})]}):null,o==="error"?e.jsx("div",{className:"imgError","aria-label":"Image failed to load",children:"Image unavailable"}):e.jsx("img",{className:"img",src:a,alt:n,loading:"lazy",onLoad:()=>t("loaded"),onError:()=>t("error")})]})}function z(){const a=b(),[n,o]=s.useState(""),[t,c]=s.useState(!1),r=s.useMemo(()=>{const i=((a==null?void 0:a.pathname)||"").trim();return!i||i==="/"?"":i},[a==null?void 0:a.pathname]),g=s.useMemo(()=>r?"This page is coming soon.":"Coming soon.",[r]),h=s.useMemo(()=>r?`We are building ${r} with the same structure and clarity used across the site.`:"We are building this section with care and shipping it in small, reliable steps.",[r]);s.useEffect(()=>{r&&l.info("This section is under construction.")},[]);const f=async i=>{i.preventDefault();const m=String(n||"").trim();if(!m){l.error("Please enter an email.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)){l.error("Please enter a valid email.");return}c(!0),setTimeout(()=>{c(!1),o(""),l.success("Noted. We will notify you when this is live.")},700)};return e.jsx(w.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"kicker",children:[e.jsx(v,{}),e.jsx("span",{children:"Coming soon"})]}),e.jsx("h1",{className:"title",children:g}),e.jsx("p",{className:"sub",children:h}),e.jsxs("div",{className:"ctaRow",children:[e.jsxs(p,{className:"btn primary",to:"/",children:[e.jsx(j,{}),e.jsx("span",{children:"Home"}),e.jsx(d,{})]}),e.jsxs(p,{className:"btn ghost",to:"/contact",children:[e.jsx(y,{}),e.jsx("span",{children:"Contact"}),e.jsx(d,{})]})]})]}),e.jsxs("section",{className:"grid","aria-label":"Coming soon content",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTitle",children:[e.jsx(N,{}),e.jsx("span",{children:"Get updates"})]}),e.jsx("div",{className:"cardText",children:"Drop your email. This is frontend-only for now. When backend comes, we will connect it to a real notify list and show toast feedback on submit."}),e.jsxs("form",{className:"form",onSubmit:f,children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Email"}),e.jsx("input",{value:n,onChange:i=>o(i.target.value),placeholder:"you@domain.com",autoComplete:"email"})]}),e.jsx("button",{type:"submit",className:"submit",disabled:t,"aria-disabled":t,children:t?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spin",children:e.jsx(x,{})}),e.jsx("span",{children:"Saving"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Notify me"}),e.jsx(d,{})]})}),r?e.jsxs("div",{className:"miniNote",children:["Tracking interest for"," ",e.jsx("span",{className:"strong",children:r})]}):null]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"cardTitle",children:e.jsx("span",{children:"What we are building"})}),e.jsxs("div",{className:"list",children:[e.jsxs("div",{className:"li",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"A clean page structure with real content"})]}),e.jsxs("div",{className:"li",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"Consistent navigation and institutional layout"})]}),e.jsxs("div",{className:"li",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"Accessible design and mobile polish"})]}),e.jsxs("div",{className:"li",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"Backend-ready forms and controlled feedback via toast"})]})]})]})]}),e.jsx("div",{className:"right",children:e.jsxs("div",{className:"mediaCard",children:[e.jsxs("div",{className:"mediaTop",children:[e.jsx("div",{className:"mediaTitle",children:"Preview moodboard"}),e.jsx("div",{className:"mediaSub",children:"Visual placeholder using Picsum."})]}),e.jsx("div",{className:"media",children:e.jsx(k,{src:"https://picsum.photos/1200/900?random=87",alt:"Preview"})}),e.jsxs("div",{className:"mediaBottom",children:[e.jsx("div",{className:"mbTitle",children:"Shipping in steps"}),e.jsx("div",{className:"mbText",children:"We publish small improvements frequently so the site remains consistent and reliable."})]})]})})]})]})})}export{z as default};
