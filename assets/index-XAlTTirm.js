import{l,r as d,j as e,d as p,t as x,g as i,G as m,H as h}from"./index-CymWrW4D.js";const u={Wrapper:l.section`
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
    `},f="Feb 17, 2026",n=[{id:"overview",title:"Overview",body:["This Privacy Policy explains how NeetiCollective collects, uses, and handles information when you use this website.","We aim to collect only what is necessary and handle it responsibly."]},{id:"information-we-collect",title:"Information we collect",body:["Information you provide directly, such as your name, email, organization, and message through the Contact form.","Basic technical information such as browser type, device information, and anonymous usage analytics."]},{id:"how-we-use",title:"How we use information",body:["To respond to inquiries and partnership proposals.","To improve the website experience and understand general usage patterns.","To maintain security and prevent misuse."]},{id:"data-retention",title:"Data retention",body:["We retain contact information only as long as necessary to respond to your request or maintain relevant records.","We do not sell personal information to third parties."]},{id:"third-party-services",title:"Third-party services",body:["We may use third-party tools for analytics, hosting, or communication.","These providers may process limited technical data as part of delivering their services."]},{id:"security",title:"Security",body:["We take reasonable technical and organizational measures to protect submitted information.","However, no internet transmission or storage system can be guaranteed 100% secure."]},{id:"your-rights",title:"Your rights",body:["You may request access, correction, or deletion of your personal information by contacting us.","We will respond in accordance with applicable laws."]},{id:"changes",title:"Changes to this policy",body:["We may update this Privacy Policy periodically.","The updated version will include a revised 'Last updated' date."]},{id:"contact",title:"Contact",body:["If you have questions about this Privacy Policy, please use the Contact page."]}];function b(){const s=d.useMemo(()=>n.map(t=>({id:t.id,title:t.title})),[]),r=t=>o=>{o.preventDefault();const a=document.getElementById(t);if(!a)return;const c=a.getBoundingClientRect().top+window.pageYOffset+-90;window.scrollTo({top:c,behavior:"smooth"})};return e.jsx(u.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"kicker",children:[e.jsx(p,{}),e.jsx("span",{children:"Privacy"})]}),e.jsx("h1",{className:"title",children:"Privacy Policy"}),e.jsxs("div",{className:"metaRow",children:[e.jsxs("span",{className:"meta",children:[e.jsx(x,{}),e.jsxs("span",{children:["Last updated: ",f]})]}),e.jsxs("a",{className:"metaLink",href:"/terms",children:["Terms ",e.jsx(i,{})]})]}),e.jsx("p",{className:"sub",children:"We collect minimal information, use it responsibly, and never sell personal data. This page explains how."})]}),e.jsxs("section",{className:"layout",children:[e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"sideTitle",children:[e.jsx(m,{}),e.jsx("span",{children:"On this page"})]}),e.jsx("div",{className:"toc",children:s.map(t=>e.jsxs("a",{href:`#${t.id}`,className:"tocLink",onClick:r(t.id),children:[e.jsx("span",{className:"tocDot"}),e.jsx("span",{className:"tocTxt",children:t.title})]},t.id))}),e.jsxs("a",{className:"topBtn",href:"#top",onClick:r("top"),children:[e.jsx(h,{}),e.jsx("span",{children:"Back to top"})]})]}),e.jsxs("div",{className:"content",children:[e.jsx("div",{id:"top"}),n.map(t=>e.jsxs("article",{id:t.id,className:"section",children:[e.jsx("h2",{className:"h2",children:t.title}),t.body.map(o=>e.jsx("p",{className:"p",children:o},o))]},t.id)),e.jsxs("div",{className:"footerCard",children:[e.jsx("div",{className:"fcTitle",children:"Questions about data?"}),e.jsx("div",{className:"fcText",children:"Use the Contact page if you would like clarification or request changes."}),e.jsx("div",{className:"fcActions",children:e.jsxs("a",{className:"btn primary",href:"/contact",children:["Contact ",e.jsx(i,{})]})})]})]})]})]})})}export{b as default};
