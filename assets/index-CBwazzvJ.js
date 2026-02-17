import{l as g,r as l,j as e,p as d,B as u,e as v,t as b,q as j,C as N,D as y,E as p,h as w,g as k,y as m}from"./index-CymWrW4D.js";const z={Wrapper:g.section`
        width: 100%;
        background: var(--color-bg);

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 46px 20px 80px;
        }

        /* Hero */
        .hero {
            max-width: 980px;
            padding-bottom: 18px;
            border-bottom: 1px solid var(--color-border);
        }

        .kicker {
            font-size: 0.9rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: var(--color-text-muted);
            margin-bottom: 12px;
        }

        .title {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: clamp(2rem, 4vw, 3rem);
            line-height: 1.08;
            color: var(--color-text);
            margin-bottom: 12px;
        }

        .sub {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.65;
            max-width: 78ch;
        }

        /* Layout */
        .layout {
            padding-top: 18px;
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 14px;
            align-items: start;
        }

        .left {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .panel {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
        }

        .panelTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
            margin-bottom: 12px;
        }

        .panelTitle svg {
            color: var(--color-text);
        }

        .tips {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .tip {
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

        .note {
            margin-top: 12px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        .cards {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
            display: flex;
            gap: 12px;
            align-items: flex-start;
        }

        .cIcon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;
        }

        .cIcon svg {
            font-size: 1.15rem;
        }

        .cLabel {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 0.95rem;
            color: var(--color-text);
        }

        .cValue {
            margin-top: 4px;
            color: var(--color-text);
            font-size: 0.98rem;
            font-weight: 700;
        }

        .cHint {
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 0.92rem;
            line-height: 1.55;
        }

        /* Form */
        .form {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
        }

        .formHead {
            padding-bottom: 12px;
            border-bottom: 1px dashed var(--color-border);
            margin-bottom: 12px;
        }

        .formTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.2rem;
        }

        .formSub {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .field {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .field.full {
            grid-column: 1 / -1;
        }

        .lbl {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text);
            font-size: 0.92rem;
            font-weight: 700;
        }

        .lbl svg {
            color: var(--color-text-muted);
        }

        input,
        select,
        textarea {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-bg);
            color: var(--color-text);
            padding: 12px 12px;
            font-size: 0.95rem;
            outline: none;
        }

        textarea {
            resize: vertical;
            min-height: 160px;
        }

        /* Actions */
        .actions {
            margin-top: 12px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
            display: grid;
            gap: 10px;
        }

        .btn {
            width: 100%;
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

        .btn:hover {
            opacity: 0.92;
            transform: translateY(-1px);
        }

        .btn:active {
            transform: translateY(0);
        }

        .btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
        }

        .btnIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1.05rem;
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

        .hint {
            color: var(--color-text-muted);
            font-size: 0.92rem;
            line-height: 1.55;
        }

        /* Footer note */
        .footerNote {
            padding-top: 14px;
        }

        .fnCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
            text-align: center;
        }

        .fnTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.2rem;
        }

        .fnText {
            margin-top: 8px;
            color: var(--color-text-muted);
            font-size: 0.98rem;
            line-height: 1.65;
        }

        .strong {
            color: var(--color-text);
            font-weight: 800;
        }

        /* Responsive */
        @media (max-width: 980px) {
            .layout {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 720px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 560px) {
            .container {
                padding: 34px 16px 70px;
            }
        }
    `},C=r=>{const t=String(r||"").trim();return t?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t):!1};function S(){const[r,t]=l.useState({name:"",email:"",org:"",topic:"Partnership",message:""}),[n,c]=l.useState(!1),x=l.useMemo(()=>[{icon:e.jsx(d,{}),label:"Email",value:"hello@neeticollective.org",hint:"Best for partnership and proposals"},{icon:e.jsx(u,{}),label:"Phone",value:"+91 90000 00000",hint:"Mon-Fri, 10:00-18:00 IST"},{icon:e.jsx(v,{}),label:"Location",value:"India",hint:"Remote-first, field-aligned partnerships"},{icon:e.jsx(b,{}),label:"Response time",value:"2-5 business days",hint:"If there is a fit, we respond"}],[]),i=a=>s=>{t(o=>({...o,[a]:s.target.value}))},h=()=>{const a=r.name.trim(),s=r.email.trim(),o=r.message.trim();return a?C(s)?!o||o.length<20?"Message should be at least 20 characters.":"":"Please enter a valid email.":"Please enter your name."},f=async a=>{a.preventDefault();const s=h();if(s){m.error(s);return}c(!0),setTimeout(()=>{c(!1),m.success("Message received. We will review and respond if there is a fit."),t({name:"",email:"",org:"",topic:"Partnership",message:""})},700)};return e.jsx(z.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("section",{className:"hero",children:[e.jsx("div",{className:"kicker",children:"Contact"}),e.jsx("h1",{className:"title",children:"Start a conversation."}),e.jsx("p",{className:"sub",children:"Share a short overview of what you are building, the constraints, and what you need. If there is a fit, we will respond."})]}),e.jsxs("section",{className:"layout","aria-label":"Contact layout",children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"panelTitle",children:[e.jsx(j,{}),e.jsx("span",{children:"What to include"})]}),e.jsxs("div",{className:"tips",children:[e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"Context in 2-3 lines"})]}),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"What outcome you want"})]}),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"Timeline and constraints"})]}),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"Who is executing and where"})]})]}),e.jsx("div",{className:"note",children:"We prefer clear, small, testable proposals over long decks."})]}),e.jsx("div",{className:"cards","aria-label":"Contact info",children:x.map(a=>e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"cIcon",children:a.icon}),e.jsxs("div",{className:"cBody",children:[e.jsx("div",{className:"cLabel",children:a.label}),e.jsx("div",{className:"cValue",children:a.value}),e.jsx("div",{className:"cHint",children:a.hint})]})]},a.label))})]}),e.jsx("div",{className:"right",children:e.jsxs("form",{className:"form",onSubmit:f,"aria-label":"Contact form",children:[e.jsxs("div",{className:"formHead",children:[e.jsx("div",{className:"formTitle",children:"Send a message"}),e.jsx("div",{className:"formSub",children:"This is frontend-only for now. Toastify handles feedback. Backend can be wired later."})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("label",{className:"field",children:[e.jsxs("span",{className:"lbl",children:[e.jsx(N,{}),e.jsx("span",{children:"Name"})]}),e.jsx("input",{value:r.name,onChange:i("name"),placeholder:"Your name",autoComplete:"name"})]}),e.jsxs("label",{className:"field",children:[e.jsxs("span",{className:"lbl",children:[e.jsx(d,{}),e.jsx("span",{children:"Email"})]}),e.jsx("input",{value:r.email,onChange:i("email"),placeholder:"you@domain.com",autoComplete:"email"})]}),e.jsxs("label",{className:"field",children:[e.jsxs("span",{className:"lbl",children:[e.jsx(y,{}),e.jsx("span",{children:"Organization"})]}),e.jsx("input",{value:r.org,onChange:i("org"),placeholder:"Optional",autoComplete:"organization"})]}),e.jsxs("label",{className:"field",children:[e.jsxs("span",{className:"lbl",children:[e.jsx(p,{}),e.jsx("span",{children:"Topic"})]}),e.jsxs("select",{value:r.topic,onChange:i("topic"),children:[e.jsx("option",{value:"Partnership",children:"Partnership"}),e.jsx("option",{value:"Funding",children:"Funding"}),e.jsx("option",{value:"Program support",children:"Program support"}),e.jsx("option",{value:"Media / speaking",children:"Media / speaking"}),e.jsx("option",{value:"Other",children:"Other"})]})]}),e.jsxs("label",{className:"field full",children:[e.jsxs("span",{className:"lbl",children:[e.jsx(p,{}),e.jsx("span",{children:"Message"})]}),e.jsx("textarea",{value:r.message,onChange:i("message"),placeholder:"Write a short overview (minimum 20 characters).",rows:8})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"submit",className:"btn",disabled:n,"aria-disabled":n,children:n?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"btnIcon spin",children:e.jsx(w,{})}),e.jsx("span",{children:"Sending"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Send"}),e.jsx(k,{})]})}),e.jsx("div",{className:"hint",children:"By submitting, you agree to share this information for contact purposes."})]})]})})]}),e.jsx("section",{className:"footerNote","aria-label":"Footer note",children:e.jsxs("div",{className:"fnCard",children:[e.jsx("div",{className:"fnTitle",children:"Prefer email?"}),e.jsxs("div",{className:"fnText",children:["Write to"," ",e.jsx("span",{className:"strong",children:"hello@neeticollective.org"})," ","with a short summary and a link to any relevant document."]})]})})]})})}export{S as default};
