import{l as c,r as d,j as e,A as p,t as m,g as o,G as x,H as u}from"./index-CymWrW4D.js";const f={Wrapper:c.section`
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
    `},h="Feb 17, 2026",s=[{id:"overview",title:"Overview",body:["These Terms of Use govern your access to and use of the NeetiCollective website and related pages.","By using this site, you agree to these terms. If you do not agree, do not use the site."]},{id:"use",title:"Acceptable use",body:["Use the site for lawful purposes only.","Do not attempt to disrupt, reverse engineer, or interfere with the website, services, or security controls.","Do not upload or transmit malicious code, spam, or harmful content."]},{id:"content",title:"Content and information",body:["The site may include articles, program summaries, updates, and other content for general informational purposes.","We aim for accuracy, but we do not guarantee that content is complete, current, or error-free."]},{id:"intellectual-property",title:"Intellectual property",body:["All trademarks, logos, design elements, and site content belong to NeetiCollective or their respective owners, unless otherwise stated.","You may not copy, reproduce, republish, or distribute site content for commercial purposes without prior written permission."]},{id:"third-party",title:"Third-party links",body:["This site may link to third-party websites. We are not responsible for the content, policies, or practices of those websites.","Your use of third-party sites is at your own risk."]},{id:"privacy",title:"Privacy and communications",body:["If you submit information through the Contact page or newsletter form, it may be used to respond to your request and for related communications.","For details, please review our Privacy policy page."]},{id:"disclaimers",title:"Disclaimers",body:["The website is provided on an 'as is' and 'as available' basis.","We disclaim all warranties to the fullest extent permitted by law, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement."]},{id:"limitation",title:"Limitation of liability",body:["To the fullest extent permitted by law, NeetiCollective will not be liable for any indirect, incidental, special, consequential, or punitive damages.","Total liability for any claim related to the site will not exceed the amount you paid to access the site (if any)."]},{id:"changes",title:"Changes to these terms",body:["We may update these terms from time to time. Updates will be posted on this page with a revised 'Last updated' date.","Continued use of the site after updates means you accept the updated terms."]},{id:"contact",title:"Contact",body:["For questions about these terms, contact us using the Contact page."]}];function y(){const n=d.useMemo(()=>s.map(t=>({id:t.id,title:t.title})),[]),a=t=>r=>{r.preventDefault();const i=document.getElementById(t);if(!i)return;const l=i.getBoundingClientRect().top+window.pageYOffset+-90;window.scrollTo({top:l,behavior:"smooth"})};return e.jsx(f.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("section",{className:"hero","aria-label":"Terms hero",children:[e.jsxs("div",{className:"kicker",children:[e.jsx(p,{}),e.jsx("span",{children:"Terms"})]}),e.jsx("h1",{className:"title",children:"Terms of Use"}),e.jsxs("div",{className:"metaRow","aria-label":"Terms metadata",children:[e.jsxs("span",{className:"meta",children:[e.jsx(m,{}),e.jsxs("span",{children:["Last updated: ",h]})]}),e.jsxs("a",{className:"metaLink",href:"/privacy",children:["Privacy ",e.jsx(o,{})]})]}),e.jsx("p",{className:"sub",children:"This page provides the terms that govern your use of the site. It is designed to be clear and readable, not legal theatre."})]}),e.jsxs("section",{className:"layout","aria-label":"Terms layout",children:[e.jsxs("aside",{className:"side","aria-label":"Table of contents",children:[e.jsxs("div",{className:"sideTitle",children:[e.jsx(x,{}),e.jsx("span",{children:"On this page"})]}),e.jsx("div",{className:"toc",children:n.map(t=>e.jsxs("a",{href:`#${t.id}`,className:"tocLink",onClick:a(t.id),children:[e.jsx("span",{className:"tocDot"}),e.jsx("span",{className:"tocTxt",children:t.title})]},t.id))}),e.jsxs("a",{className:"topBtn",href:"#top",onClick:a("top"),children:[e.jsx(u,{}),e.jsx("span",{children:"Back to top"})]})]}),e.jsxs("div",{className:"content","aria-label":"Terms content",children:[e.jsx("div",{id:"top"}),s.map(t=>e.jsxs("article",{id:t.id,className:"section","aria-label":t.title,children:[e.jsx("h2",{className:"h2",children:t.title}),t.body.map(r=>e.jsx("p",{className:"p",children:r},r))]},t.id)),e.jsxs("div",{className:"footerCard","aria-label":"Terms footer card",children:[e.jsx("div",{className:"fcTitle",children:"Need clarification?"}),e.jsx("div",{className:"fcText",children:"Use the Contact page to reach us. If a backend is added later, this page can be expanded to include jurisdiction and dispute resolution details."}),e.jsxs("div",{className:"fcActions",children:[e.jsxs("a",{className:"btn primary",href:"/contact",children:["Contact ",e.jsx(o,{})]}),e.jsxs("a",{className:"btn ghost",href:"/privacy",children:["Privacy ",e.jsx(o,{})]})]})]})]})]})]})})}export{y as default};
