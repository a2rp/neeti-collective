import{l as s,r as o,j as e,w as t,s as n,t as l,e as d,g as i,q as c}from"./index-CymWrW4D.js";const p={Wrapper:s.section`
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

        .grid {
            margin-top: 18px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 14px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            transition: transform 160ms ease;
        }

        .card:hover {
            transform: translateY(-2px);
        }

        .badge {
            display: inline-block;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 0.85rem;
            color: var(--color-text-muted);
        }

        .cardTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 1.1rem;
            color: var(--color-text);
        }

        .summary {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .details {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
        }

        .detail {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
            color: var(--color-text);
        }

        .actions {
            margin-top: auto;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 14px;
            border-radius: 999px;
            text-decoration: none;
            font-size: 0.9rem;
            border: 1px solid var(--color-text);
            transition:
                transform 160ms ease,
                opacity 160ms ease;
        }

        .btn:hover {
            transform: translateY(-1px);
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
        }

        .info {
            margin-top: 24px;
        }

        .infoCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
        }

        .infoTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-family: var(--font-heading);
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin-bottom: 10px;
        }

        .infoList {
            margin: 0 0 12px 18px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.7;
        }

        @media (max-width: 560px) {
            .container {
                padding: 34px 16px 70px;
            }
        }
    `},m="Feb 17, 2026",x=[{id:"policy-lab",title:"Policy Lab Fellowship",cohort:"Cohort 2026",duration:"6 months",mode:"Hybrid",summary:"For practitioners working on governance, systems design, and institutional reform."},{id:"field-builders",title:"Field Builders Fellowship",cohort:"Cohort 2026",duration:"9 months",mode:"On-ground",summary:"For operators building durable programs in education, health, and livelihoods."},{id:"capital-discipline",title:"Capital Discipline Fellowship",cohort:"Rolling",duration:"4 months",mode:"Remote",summary:"For funders and ecosystem actors seeking disciplined capital allocation frameworks."}];function g(){const a=o.useMemo(()=>x,[]);return e.jsx(p.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"kicker",children:[e.jsx(t,{}),e.jsx("span",{children:"Fellowships"})]}),e.jsx("h1",{className:"title",children:"Structured programs for long-term builders."}),e.jsx("div",{className:"metaRow",children:e.jsxs("span",{className:"meta",children:[e.jsx(n,{}),e.jsxs("span",{children:["Last updated: ",m]})]})}),e.jsx("p",{className:"sub",children:"Our fellowships support practitioners committed to disciplined execution, institutional thinking, and long-term impact."})]}),e.jsx("section",{className:"grid",children:a.map(r=>e.jsxs("article",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("div",{className:"badge",children:r.cohort}),e.jsx("h2",{className:"cardTitle",children:r.title})]}),e.jsx("p",{className:"summary",children:r.summary}),e.jsxs("div",{className:"details",children:[e.jsxs("div",{className:"detail",children:[e.jsx(l,{}),e.jsx("span",{children:r.duration})]}),e.jsxs("div",{className:"detail",children:[e.jsx(d,{}),e.jsx("span",{children:r.mode})]})]}),e.jsx("div",{className:"actions",children:e.jsxs("a",{href:`/fellowships/${r.id}`,className:"btn primary",children:["View details ",e.jsx(i,{})]})})]},r.id))}),e.jsx("section",{className:"info",children:e.jsxs("div",{className:"infoCard",children:[e.jsxs("div",{className:"infoTitle",children:[e.jsx(c,{}),e.jsx("span",{children:"Selection Principles"})]}),e.jsxs("ul",{className:"infoList",children:[e.jsx("li",{children:"Evidence of execution, not only ideas"}),e.jsx("li",{children:"Clear understanding of constraints"}),e.jsx("li",{children:"Commitment to long-term institutional work"}),e.jsx("li",{children:"Ability to work across systems"})]}),e.jsxs("a",{href:"/contact",className:"btn ghost",children:["Inquire ",e.jsx(i,{})]})]})})]})})}export{g as default};
