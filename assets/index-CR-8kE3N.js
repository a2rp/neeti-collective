import{l as c,r as d,j as e,I as p,t as m,g as i,G as x,H as h}from"./index-CymWrW4D.js";const u={Wrapper:c.section`
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

        .content {
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding-top: 18px;
        }

        .section {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
            scroll-margin-top: 100px;
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

        @media (max-width: 980px) {
            .layout {
                grid-template-columns: 1fr;
            }

            .side {
                position: static;
                top: auto;
            }

            .content {
                padding-top: 8px;
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
    `},g="Feb 17, 2026",s=[{id:"overview",title:"Overview",body:["This Submission Policy explains how NeetiCollective handles unsolicited ideas, proposals, materials, and other submissions shared through the website.","The goal is simple: protect both you and us from misunderstandings about ownership and use."]},{id:"what-you-can-submit",title:"What you can submit",body:["You may submit general partnership inquiries, program overviews, and requests for collaboration using the Contact page.","Keep submissions concise and focused on context, constraints, and what kind of support you are seeking."]},{id:"no-confidential-info",title:"Do not submit confidential information",body:["Do not submit confidential, proprietary, or sensitive information through this website.","If a confidential exchange is necessary, we will explicitly request it and share an appropriate process."]},{id:"ownership",title:"Ownership and rights",body:["You retain ownership of any materials you submit.","By submitting materials, you confirm you have the right to share them and that doing so does not violate third-party rights."]},{id:"how-we-handle",title:"How we handle submissions",body:["We review submissions to determine whether there is a potential fit for partnership or engagement.","We may not respond to every submission. If there is a fit, we will respond using the contact details you provide.","We may internally discuss submissions for evaluation purposes, but we do not claim ownership of your original work."]},{id:"similar-ideas",title:"Similar ideas may exist",body:["NeetiCollective may already be working on, evaluating, or aware of ideas similar to your submission.","Submitting an idea does not create any obligation for us to compensate you or treat the idea as exclusive."]},{id:"no-obligation",title:"No obligation to use",body:["NeetiCollective is not obligated to use, adopt, or implement any submission.","Any engagement will occur only through a separate written agreement."]},{id:"links-and-files",title:"Links and files",body:["If you include links or attachments, ensure they are accessible and safe to open.","We may decline to open files or links that appear suspicious or require special access."]},{id:"contact",title:"Contact",body:["If you have questions about this Submission Policy, please use the Contact page."]}];function y(){const n=d.useMemo(()=>s.map(o=>({id:o.id,title:o.title})),[]),a=o=>t=>{t.preventDefault();const r=document.getElementById(o);if(!r)return;const l=r.getBoundingClientRect().top+window.pageYOffset+-90;window.scrollTo({top:l,behavior:"smooth"})};return e.jsx(u.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"kicker",children:[e.jsx(p,{}),e.jsx("span",{children:"Submission Policy"})]}),e.jsx("h1",{className:"title",children:"Submission Policy"}),e.jsxs("div",{className:"metaRow",children:[e.jsxs("span",{className:"meta",children:[e.jsx(m,{}),e.jsxs("span",{children:["Last updated: ",g]})]}),e.jsxs("a",{className:"metaLink",href:"/contact",children:["Contact ",e.jsx(i,{})]})]}),e.jsx("p",{className:"sub",children:"This policy explains how we handle unsolicited submissions and partnership proposals shared through the website."})]}),e.jsxs("section",{className:"layout",children:[e.jsxs("aside",{className:"side",children:[e.jsxs("div",{className:"sideTitle",children:[e.jsx(x,{}),e.jsx("span",{children:"On this page"})]}),e.jsx("div",{className:"toc",children:n.map(o=>e.jsxs("a",{href:`#${o.id}`,className:"tocLink",onClick:a(o.id),children:[e.jsx("span",{className:"tocDot"}),e.jsx("span",{className:"tocTxt",children:o.title})]},o.id))}),e.jsxs("a",{className:"topBtn",href:"#top",onClick:a("top"),children:[e.jsx(h,{}),e.jsx("span",{children:"Back to top"})]})]}),e.jsxs("div",{className:"content",children:[e.jsx("div",{id:"top"}),s.map(o=>e.jsxs("article",{id:o.id,className:"section",children:[e.jsx("h2",{className:"h2",children:o.title}),o.body.map(t=>e.jsx("p",{className:"p",children:t},t))]},o.id)),e.jsxs("div",{className:"footerCard",children:[e.jsx("div",{className:"fcTitle",children:"Submitting a proposal?"}),e.jsx("div",{className:"fcText",children:"Keep it short, avoid confidential details, and share the outcome you want. If there is a fit, we will respond."}),e.jsxs("div",{className:"fcActions",children:[e.jsxs("a",{className:"btn primary",href:"/contact",children:["Contact ",e.jsx(i,{})]}),e.jsxs("a",{className:"btn ghost",href:"/terms",children:["Terms ",e.jsx(i,{})]})]})]})]})]})]})})}export{y as default};
