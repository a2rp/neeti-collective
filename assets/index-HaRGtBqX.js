import{l as f,r as o,j as e,d as u,b as v,a as b,c as j,g as s,p as y,q as m,y as x,h as N}from"./index-CymWrW4D.js";const w={Wrapper:f.section`
        width: 100%;
        background: var(--color-bg);

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 34px 20px 70px;
        }

        /* Image frame + loader */
        .imgFrame {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
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

        .imgLoaderText {
            font-size: 0.92rem;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        /* Buttons */
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
            background: var(--color-surface);
        }

        /* Hero */
        .hero {
            display: grid;
            grid-template-columns: 1.05fr 0.95fr;
            gap: 14px;
            align-items: stretch;
            padding: 14px 0 22px;
            border-bottom: 1px solid var(--color-border);
        }

        .heroLeft {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .kicker {
            display: inline-flex;
            padding: 7px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-muted);
            font-size: 0.9rem;
            width: fit-content;
        }

        .title {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: clamp(1.7rem, 3.2vw, 2.8rem);
            line-height: 1.08;
            color: var(--color-text);
        }

        .sub {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.55;
            max-width: 78ch;
        }

        .ctaRow {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 4px;
        }

        .miniMeta {
            margin-top: 6px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
        }

        .miniItem {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        .miniItem svg {
            color: var(--color-text);
            font-size: 1.05rem;
        }

        .heroRight {
            display: grid;
            grid-template-rows: 1fr auto;
            gap: 10px;
        }

        .heroMedia {
            width: 100%;
            height: 430px;
        }

        .heroFrame {
            height: 100%;
        }

        .note {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
        }

        .noteTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 1rem;
            color: var(--color-text);
        }

        .noteText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.96rem;
            line-height: 1.55;
        }

        /* Sections */
        .section {
            padding: 22px 0 0;
        }

        .sectionHead {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 12px;
        }

        .sectionTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: 1.2rem;
            color: var(--color-text);
        }

        .sectionSub {
            color: var(--color-text-muted);
            font-size: 0.98rem;
            line-height: 1.45;
            max-width: 80ch;
        }

        /* Principles */
        .grid4 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
            min-height: 160px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text);
        }

        .icon svg {
            font-size: 1.15rem;
        }

        .cardTitle {
            margin-top: 10px;
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
        }

        .cardText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        /* FAQ */
        .faq {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .faqItem {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 12px 14px;
        }

        .faqQ {
            cursor: pointer;
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 1rem;
            color: var(--color-text);
            list-style: none;
        }

        .faqQ::-webkit-details-marker {
            display: none;
        }

        .faqA {
            margin-top: 10px;
            color: var(--color-text-muted);
            font-size: 0.96rem;
            line-height: 1.6;
        }

        /* Contact */
        .contactWrap {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 12px;
            align-items: start;
        }

        .form {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .row2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .field {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .label {
            font-size: 0.92rem;
            color: var(--color-text);
        }

        .form input,
        .form textarea {
            width: 100%;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            border-radius: 12px;
            padding: 12px 12px;
            font-size: 0.95rem;
            outline: none;
        }

        .form input:focus,
        .form textarea:focus {
            border-color: var(--color-primary);
        }

        .formActions {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            flex-wrap: wrap;
        }

        .hint {
            color: var(--color-text-muted);
            font-size: 0.92rem;
        }

        .side {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
        }

        .sideTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
        }

        .sideList {
            margin-top: 10px;
            padding-left: 18px;
            color: var(--color-text-muted);
            line-height: 1.7;
            font-size: 0.95rem;
        }

        .sideBox {
            margin-top: 14px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .sideBoxTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
        }

        .sideLink {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
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

        .sideLink:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 1100px) {
            .hero {
                grid-template-columns: 1fr;
            }

            .heroMedia {
                height: 360px;
            }
        }

        @media (max-width: 980px) {
            .grid4 {
                grid-template-columns: repeat(2, 1fr);
            }

            .contactWrap {
                grid-template-columns: 1fr;
            }

            .row2 {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 560px) {
            .container {
                padding: 24px 16px 60px;
            }

            .btn {
                width: 100%;
                max-width: 420px;
            }
        }
    `};function k({src:t,alt:n,frameClassName:l=""}){const[a,i]=o.useState("loading");return e.jsxs("div",{className:`imgFrame ${l} ${a==="loaded"?"isLoaded":""}`,children:[a==="loading"?e.jsxs("div",{className:"imgLoader","aria-label":"Loading image",children:[e.jsx(N,{}),e.jsx("span",{className:"imgLoaderText",children:"Loading"})]}):null,a==="error"?e.jsx("div",{className:"imgError","aria-label":"Image failed to load",children:"Image unavailable"}):e.jsx("img",{className:"img",src:t,alt:n,loading:"lazy",onLoad:()=>i("loaded"),onError:()=>i("error")})]})}function T(){const t="NeetiCollective",n=o.useMemo(()=>[{title:"Trust",desc:"We invest in work that builds trust through reliability, clarity, and respect for constraints.",icon:e.jsx(u,{})},{title:"Outcomes",desc:"We prefer measurable progress over performative motion. Signal matters more than noise.",icon:e.jsx(v,{})},{title:"Durability",desc:"We support systems that survive leadership changes, funding cycles, and real-world friction.",icon:e.jsx(b,{})},{title:"Execution",desc:"Good ideas are common. Execution is rare. We partner with teams that ship and iterate.",icon:e.jsx(j,{})}],[]),l=o.useMemo(()=>[{q:"What does NeetiCollective do?",a:"We partner with builders working on education systems, economic mobility, and climate resilience. We support programs that are practical, measurable, and designed for long timelines."},{q:"Do you accept unsolicited proposals?",a:"Yes. If your work is execution-focused and outcomes-driven, share a short overview and what you need. We will respond if there is a fit."},{q:"Do you fund early-stage pilots?",a:"We support pilots when the learning plan is clear and the scaling path is realistic. We prefer small pilots with strong measurement over big launches."}],[]),[a,i]=o.useState({name:"",email:"",note:""}),c=r=>d=>{i(p=>({...p,[r]:d.target.value}))},h=r=>{r.preventDefault();const d=a.name.trim(),p=a.email.trim(),g=a.note.trim();if(!d||!p||!g){x.error("Please fill all fields.");return}x.success("Message saved. Backend can be connected later."),i({name:"",email:"",note:""})};return e.jsx(w.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("section",{className:"hero","aria-label":"About hero",children:[e.jsxs("div",{className:"heroLeft",children:[e.jsx("div",{className:"kicker",children:"About"}),e.jsx("h1",{className:"title",children:"We invest in rigorous work that expands opportunity and strengthens everyday systems."}),e.jsxs("p",{className:"sub",children:[t," partners with entrepreneurs, researchers, and operators building in real environments. The focus is on practical execution, measurable outcomes, and long timelines."]}),e.jsxs("div",{className:"ctaRow",children:[e.jsxs("a",{className:"btn primary",href:"/work",children:["Explore work ",e.jsx(s,{})]}),e.jsxs("a",{className:"btn ghost",href:"/contact",children:["Contact ",e.jsx(y,{})]})]}),e.jsxs("div",{className:"miniMeta","aria-label":"Highlights",children:[e.jsxs("div",{className:"miniItem",children:[e.jsx(m,{}),e.jsx("span",{children:"Execution-first partnerships"})]}),e.jsxs("div",{className:"miniItem",children:[e.jsx(m,{}),e.jsx("span",{children:"Simple measurement loops"})]}),e.jsxs("div",{className:"miniItem",children:[e.jsx(m,{}),e.jsx("span",{children:"Durable systems, not demos"})]})]})]}),e.jsxs("div",{className:"heroRight",children:[e.jsx("div",{className:"heroMedia",children:e.jsx(k,{src:"https://picsum.photos/seed/neeti-about-hero/1600/1100",alt:"NeetiCollective",frameClassName:"heroFrame"})}),e.jsxs("div",{className:"note",children:[e.jsx("div",{className:"noteTitle",children:"Working style"}),e.jsx("div",{className:"noteText",children:"Less theatre. More field work. Clear ownership. Honest reporting."})]})]})]}),e.jsxs("section",{className:"section","aria-label":"Principles",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("div",{className:"sectionTitle",children:"Principles"}),e.jsx("div",{className:"sectionSub",children:"What we optimize for in every partnership."})]}),e.jsx("div",{className:"grid4",children:n.map(r=>e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"icon",children:r.icon}),e.jsx("div",{className:"cardTitle",children:r.title}),e.jsx("div",{className:"cardText",children:r.desc})]},r.title))})]}),e.jsxs("section",{className:"section","aria-label":"FAQ",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("div",{className:"sectionTitle",children:"FAQ"}),e.jsx("div",{className:"sectionSub",children:"Quick answers to common questions."})]}),e.jsx("div",{className:"faq",children:l.map(r=>e.jsxs("details",{className:"faqItem",children:[e.jsx("summary",{className:"faqQ",children:r.q}),e.jsx("div",{className:"faqA",children:r.a})]},r.q))})]}),e.jsxs("section",{className:"section","aria-label":"Contact form",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("div",{className:"sectionTitle",children:"Get in touch"}),e.jsx("div",{className:"sectionSub",children:"This form is functional in the UI. Connect to a backend later to send messages."})]}),e.jsxs("div",{className:"contactWrap",children:[e.jsxs("form",{className:"form",onSubmit:h,children:[e.jsxs("div",{className:"row2",children:[e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"label",children:"Name"}),e.jsx("input",{value:a.name,onChange:c("name"),placeholder:"Your name"})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"label",children:"Email"}),e.jsx("input",{value:a.email,onChange:c("email"),placeholder:"you@example.com"})]})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"label",children:"Message"}),e.jsx("textarea",{value:a.note,onChange:c("note"),placeholder:"Share a short overview and what you need.",rows:5})]}),e.jsxs("div",{className:"formActions",children:[e.jsxs("button",{className:"btn primary",type:"submit",children:["Send ",e.jsx(s,{})]}),e.jsx("div",{className:"hint",children:"Backend hookup later: Axios + Toastify ready."})]})]}),e.jsxs("div",{className:"side",children:[e.jsx("div",{className:"sideTitle",children:"What helps"}),e.jsxs("ul",{className:"sideList",children:[e.jsx("li",{children:"Problem statement and target audience"}),e.jsx("li",{children:"Current traction or pilot plan"}),e.jsx("li",{children:"What support you need (funding, ops, partners)"}),e.jsx("li",{children:"How you measure outcomes"})]}),e.jsxs("div",{className:"sideBox",children:[e.jsx("div",{className:"sideBoxTitle",children:"Next"}),e.jsxs("a",{className:"sideLink",href:"/work",children:["Browse work ",e.jsx(s,{})]}),e.jsxs("a",{className:"sideLink",href:"/initiatives",children:["Explore initiatives ",e.jsx(s,{})]}),e.jsxs("a",{className:"sideLink",href:"/journal",children:["Read journal ",e.jsx(s,{})]})]})]})]})]})]})})}export{T as default};
