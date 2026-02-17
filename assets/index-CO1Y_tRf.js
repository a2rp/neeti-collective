import{l,r as d,j as e,J as p,t as m,g as i,G as x,H as f}from"./index-CymWrW4D.js";const u={Wrapper:l.section`
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
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
        }

        .kicker svg {
            color: var(--color-text-muted);
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

        .metaRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }

        .meta {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 10px 12px;
            color: var(--color-text-muted);
            font-size: 0.92rem;
            white-space: nowrap;
        }

        .meta svg {
            color: var(--color-text);
        }

        .metaLink {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 10px 12px;
            color: var(--color-text);
            font-size: 0.92rem;
            transition:
                transform 160ms ease,
                background 160ms ease;
        }

        .metaLink:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
            text-decoration: none;
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
            grid-template-columns: 320px 1fr;
            gap: 14px;
            align-items: start;
        }

        .side {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
            position: sticky;
            top: 86px;
        }

        .sideTitle {
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

        .toc {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .tocLink {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            padding: 10px 12px;
            border-radius: 12px;
            transition:
                transform 160ms ease,
                background 160ms ease;
        }

        .tocLink:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
            text-decoration: none;
        }

        .tocDot {
            width: 8px;
            height: 8px;
            border-radius: 99px;
            background: var(--color-text);
            opacity: 0.55;
        }

        .tocTxt {
            font-size: 0.95rem;
        }

        .topBtn {
            margin-top: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            text-decoration: none;
            border: 1px solid var(--color-text);
            background: transparent;
            color: var(--color-text);
            padding: 10px 12px;
            border-radius: 999px;
            transition:
                transform 160ms ease,
                background 160ms ease,
                opacity 160ms ease;
            opacity: 0.9;
        }

        .topBtn:hover {
            opacity: 1;
            background: var(--color-primary-soft);
            transform: translateY(-1px);
            text-decoration: none;
        }

        /* Content */
        .content {
            /* border: 1px solid #f00; */
            display: flex;
            flex-direction: column;
            gap: 12px;
            /* padding-top: 18px; */
            /* margin-top: 50px; */
        }

        .section {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
        }

        .h2 {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: 1.15rem;
            color: var(--color-text);
            margin-bottom: 10px;
        }

        .p {
            color: var(--color-text-muted);
            font-size: 0.98rem;
            line-height: 1.75;
            margin-bottom: 10px;
        }

        .p:last-child {
            margin-bottom: 0;
        }

        /* Footer card */
        .footerCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
            text-align: center;
        }

        .fcTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.2rem;
        }

        .fcText {
            margin-top: 8px;
            color: var(--color-text-muted);
            font-size: 0.98rem;
            line-height: 1.65;
        }

        .fcActions {
            margin-top: 12px;
            display: flex;
            justify-content: center;
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

        /* Responsive */
        @media (max-width: 980px) {
            .layout {
                grid-template-columns: 1fr;
            }

            .side {
                position: static;
                top: auto;
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
    `},g="Feb 17, 2026",n=[{id:"overview",title:"Overview",body:["NeetiCollective is aware that individuals or entities may falsely claim affiliation with us.","This page explains how to identify legitimate communication and report suspicious activity."]},{id:"no-fees",title:"We do not charge application fees",body:["NeetiCollective does not charge fees to review proposals, consider partnerships, or process submissions.","Any request for payment in exchange for partnership consideration is fraudulent."]},{id:"official-communication",title:"Official communication",body:["We communicate only through official email addresses associated with our domain.","We do not conduct funding decisions through personal messaging apps or unofficial channels."]},{id:"recruitment-scams",title:"Recruitment scams",body:["We do not request payment, financial information, or sensitive personal data as part of a hiring process.","If you receive suspicious recruitment communication claiming to represent us, do not share personal data."]},{id:"impersonation",title:"Impersonation and misuse",body:["Fraudsters may use our name, branding, or similar-looking domains to mislead individuals.","Always verify the sender's domain and confirm through our official Contact page if uncertain."]},{id:"how-to-report",title:"How to report",body:["If you believe you have encountered fraudulent activity using our name, report it through the Contact page.","Include relevant screenshots, links, or email headers when possible."]},{id:"limitation",title:"Limitation",body:["NeetiCollective is not responsible for losses resulting from fraudulent activity conducted by third parties.","We encourage verification before sharing sensitive information or funds with any entity."]}];function v(){const s=d.useMemo(()=>n.map(o=>({id:o.id,title:o.title})),[]),r=o=>t=>{t.preventDefault();const a=document.getElementById(o);if(!a)return;const c=a.getBoundingClientRect().top+window.pageYOffset+-90;window.scrollTo({top:c,behavior:"smooth"})};return e.jsx(u.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"kicker",children:[e.jsx(p,{}),e.jsx("span",{children:"Fraud Alerts"})]}),e.jsx("h1",{className:"title",children:"Protecting against misuse of our name."}),e.jsxs("div",{className:"metaRow",children:[e.jsxs("span",{className:"meta",children:[e.jsx(m,{}),e.jsxs("span",{children:["Last updated: ",g]})]}),e.jsxs("a",{className:"metaLink",href:"/contact",children:["Report ",e.jsx(i,{})]})]}),e.jsx("p",{className:"sub",children:"We do not charge fees for proposals, partnerships, or hiring. Verify communication before sharing funds or sensitive information."})]}),e.jsxs("section",{className:"layout",children:[e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"sideTitle",children:[e.jsx(x,{}),e.jsx("span",{children:"On this page"})]}),e.jsx("div",{className:"toc",children:s.map(o=>e.jsxs("a",{href:`#${o.id}`,className:"tocLink",onClick:r(o.id),children:[e.jsx("span",{className:"tocDot"}),e.jsx("span",{className:"tocTxt",children:o.title})]},o.id))}),e.jsxs("a",{className:"topBtn",href:"#top",onClick:r("top"),children:[e.jsx(f,{}),e.jsx("span",{children:"Back to top"})]})]}),e.jsxs("div",{className:"content",children:[e.jsx("div",{id:"top"}),n.map(o=>e.jsxs("article",{id:o.id,className:"section",children:[e.jsx("h2",{className:"h2",children:o.title}),o.body.map(t=>e.jsx("p",{className:"p",children:t},t))]},o.id)),e.jsxs("div",{className:"footerCard",children:[e.jsx("div",{className:"fcTitle",children:"Suspicious activity?"}),e.jsx("div",{className:"fcText",children:"Use the Contact page to report fraudulent communication claiming to represent us."}),e.jsx("div",{className:"fcActions",children:e.jsxs("a",{className:"btn primary",href:"/contact",children:["Contact ",e.jsx(i,{})]})})]})]})]})]})})}export{v as default};
