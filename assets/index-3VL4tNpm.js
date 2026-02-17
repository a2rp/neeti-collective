import{l as v,r as t,j as e,F as f,a as p,b as m,c as x,d as h,e as b,f as s,g as i,h as j}from"./index-CrgLGKuv.js";const N={Wrapper:v.div`
        width: 100%;
        background: var(--color-bg);

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 34px 20px 70px;
        }

        /* Reusable image frame + loader (no blank space) */
        .imgFrame {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
            letter-spacing: 0.2px;
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

        .btn svg {
            font-size: 1.05rem;
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

        /* Section head */
        .sectionHead {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 14px;
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
            max-width: 70ch;
        }

        .sectionCtaRow {
            margin-top: 16px;
            display: flex;
            justify-content: center;
        }

        /* HERO */
        .hero {
            display: grid;
            grid-template-columns: 1.05fr 0.95fr;
            gap: 18px;
            align-items: stretch;
            padding: 16px 0 26px;
            border-bottom: 1px solid var(--color-border);
        }

        .heroLeft {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .kicker {
            display: inline-flex;
            align-self: flex-start;
            padding: 7px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-muted);
            font-size: 0.9rem;
        }

        .heroTitle {
            font-family: var(--font-heading);
            font-size: clamp(1.8rem, 3.2vw, 2.9rem);
            letter-spacing: 0.9px;
            line-height: 1.08;
            color: var(--color-text);
            text-transform: uppercase;
        }

        .heroText {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.55;
            max-width: 72ch;
        }

        .heroCtas {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 4px;
        }

        .heroStats {
            margin-top: 6px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }

        .stat {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-bg);
            padding: 12px;
            text-align: left;
        }

        .statNum {
            font-family: var(--font-heading);
            font-size: 1.35rem;
            letter-spacing: 0.6px;
            color: var(--color-text);
        }

        .statLabel {
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 0.92rem;
        }

        .heroRight {
            display: grid;
            grid-template-rows: 1fr auto;
            gap: 10px;
        }

        .heroFrame {
            height: 420px;
        }

        .heroCard {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 14px;
        }

        .heroCardTitle {
            font-family: var(--font-heading);
            text-transform: uppercase;
            letter-spacing: 0.8px;
            font-size: 1rem;
            color: var(--color-text);
        }

        .heroCardText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.96rem;
            line-height: 1.5;
        }

        /* VALUES */
        .values {
            padding: 26px 0;
        }

        .valueGrid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
            margin-top: 14px;
        }

        .valueCard {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 14px;
            min-height: 150px;
        }

        .valueIcon {
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

        .valueIcon svg {
            font-size: 1.15rem;
        }

        .valueTitle {
            margin-top: 10px;
            font-family: var(--font-heading);
            letter-spacing: 0.7px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
        }

        .valueText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.5;
        }

        /* WORK */
        .work {
            padding: 10px 0 26px;
            border-top: 1px solid var(--color-border);
        }

        .workGrid {
            margin-top: 14px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .workCard {
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            overflow: hidden;
            text-decoration: none;
            transition: transform 160ms ease;
            min-height: 430px;
        }

        .workCard:hover {
            transform: translateY(-2px);
            text-decoration: none;
        }

        .workMedia {
            height: 190px;
            padding: 12px;
        }

        .workFrame {
            height: 100%;
            border-radius: 14px;
        }

        .workBody {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .workTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .workIcon {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text);
        }

        .workIcon svg {
            font-size: 1.1rem;
        }

        .workTag {
            font-size: 0.88rem;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 6px 10px;
            border-radius: 999px;
            white-space: nowrap;
        }

        .workTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.7px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.1rem;
            line-height: 1.1;
        }

        .workText {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        .workLink {
            margin-top: 2px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        /* JOURNAL */
        .journal {
            padding: 26px 0;
            border-top: 1px solid var(--color-border);
        }

        .journalGrid {
            margin-top: 14px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .jCard {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;
            text-decoration: none;
            transition: transform 160ms ease;
            min-height: 360px;
            display: flex;
            flex-direction: column;
        }

        .jCard:hover {
            transform: translateY(-2px);
            text-decoration: none;
        }

        .jFrame {
            height: 180px;
        }

        .jBody {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .jMeta {
            font-size: 0.88rem;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 6px 10px;
            border-radius: 999px;
            display: inline-flex;
            align-self: flex-start;
        }

        .jTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.7px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.05rem;
            line-height: 1.15;
        }

        .jLink {
            margin-top: 2px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        /* INITIATIVES */
        .initiatives {
            padding: 26px 0 10px;
            border-top: 1px solid var(--color-border);
        }

        .initGrid {
            margin-top: 14px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .initCard {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 14px;
            text-decoration: none;
            transition: transform 160ms ease;
            min-height: 170px;
        }

        .initCard:hover {
            transform: translateY(-2px);
            text-decoration: none;
        }

        .initIcon {
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

        .initIcon svg {
            font-size: 1.15rem;
        }

        .initTitle {
            margin-top: 10px;
            font-family: var(--font-heading);
            letter-spacing: 0.7px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
        }

        .initText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.5;
        }

        .initLink {
            margin-top: 10px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        /* FINAL */
        .final {
            margin-top: 26px;
            border-top: 1px solid var(--color-border);
            padding-top: 26px;
        }

        .finalInner {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            text-align: center;
        }

        .finalTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: 1.25rem;
            color: var(--color-text);
        }

        .finalText {
            margin: 10px auto 0;
            max-width: 70ch;
            color: var(--color-text-muted);
            font-size: 0.98rem;
            line-height: 1.55;
        }

        .finalCtas {
            margin-top: 14px;
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 1100px) {
            .hero {
                grid-template-columns: 1fr;
            }

            .heroFrame {
                height: 360px;
            }
        }

        @media (max-width: 980px) {
            .valueGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .workGrid,
            .journalGrid,
            .initGrid {
                grid-template-columns: 1fr;
            }

            .workMedia {
                height: 210px;
            }
        }

        @media (max-width: 560px) {
            .container {
                padding: 24px 16px 60px;
            }

            .heroStats {
                grid-template-columns: 1fr;
            }

            .btn {
                width: 100%;
                max-width: 420px;
            }
        }
    `};function d({src:a,alt:o,frameClassName:l="",imgClassName:n=""}){const[r,g]=t.useState(!1),[c,u]=t.useState(!1);return e.jsxs("div",{className:`imgFrame ${l}`,children:[!r&&!c?e.jsxs("div",{className:"imgLoader","aria-label":"Loading image",children:[e.jsx(j,{}),e.jsx("span",{className:"imgLoaderText",children:"Loading"})]}):null,c?e.jsx("div",{className:"imgError","aria-label":"Image failed to load",children:"Image unavailable"}):e.jsx("img",{className:`img ${n}`,src:a,alt:o,loading:"lazy",onLoad:()=>g(!0),onError:()=>u(!0),style:{display:r?"block":"none"}})]})}function y(){const a="NeetiCollective",o=t.useMemo(()=>[{title:"Education Systems",tag:"Learning outcomes",desc:"Practical interventions that improve fundamentals, teacher support, and school operations.",icon:e.jsx(f,{}),img:"https://picsum.photos/seed/neeti-edu/1200/800",to:"/work/education-systems"},{title:"Climate Resilience",tag:"Risk to resilience",desc:"Heat, water, and livelihoods. We back scalable, locally grounded resilience work.",icon:e.jsx(p,{}),img:"https://picsum.photos/seed/neeti-climate/1200/800",to:"/work/climate-resilience"},{title:"Economic Mobility",tag:"Jobs and dignity",desc:"Skills, placement pathways, and small-business enablement with measurable outcomes.",icon:e.jsx(m,{}),img:"https://picsum.photos/seed/neeti-mobility/1200/800",to:"/work/economic-mobility"}],[]),l=t.useMemo(()=>[{title:"Field Notes: What scaled, what broke, and what we learned",meta:"Journal",img:"https://picsum.photos/seed/neeti-journal-1/1200/800",to:"/journal/field-notes-scale"},{title:"A simple model for measuring real-world impact",meta:"Methods",img:"https://picsum.photos/seed/neeti-journal-2/1200/800",to:"/journal/impact-measurement-model"},{title:"Partner spotlight: building trust where it matters",meta:"Partners",img:"https://picsum.photos/seed/neeti-journal-3/1200/800",to:"/journal/partner-spotlight-trust"}],[]),n=t.useMemo(()=>[{title:"Community Labs",desc:"Pilot-first programs with tight feedback loops and fast iteration.",icon:e.jsx(x,{}),to:"/initiatives/community-labs"},{title:"Fellowships",desc:"Support for builders who ship in public systems and hard environments.",icon:e.jsx(h,{}),to:"/initiatives/fellowships"},{title:"District Partners",desc:"Long-term partnerships focused on execution, not slogans.",icon:e.jsx(b,{}),to:"/initiatives/district-partners"}],[]);return e.jsx(N.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"heroLeft",children:[e.jsx("div",{className:"kicker",children:"Impact Collective"}),e.jsx("h1",{className:"heroTitle",children:"We back rigorous work that expands opportunity and strengthens everyday systems."}),e.jsxs("p",{className:"heroText",children:[a," partners with builders, researchers, and operators working on education, economic mobility, and climate resilience. We invest in practical execution, measurable outcomes, and long timelines."]}),e.jsxs("div",{className:"heroCtas",children:[e.jsxs("a",{className:"btn primary",href:"/work","aria-label":"Explore work",children:["Explore work ",e.jsx(s,{})]}),e.jsxs("a",{className:"btn ghost",href:"/about","aria-label":`About ${a}`,children:["About ",a," ",e.jsx(i,{})]})]}),e.jsxs("div",{className:"heroStats","aria-label":"Key numbers",children:[e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"statNum",children:"12+"}),e.jsx("div",{className:"statLabel",children:"Active programs"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"statNum",children:"28"}),e.jsx("div",{className:"statLabel",children:"Partner orgs"})]}),e.jsxs("div",{className:"stat",children:[e.jsx("div",{className:"statNum",children:"4"}),e.jsx("div",{className:"statLabel",children:"Priority themes"})]})]})]}),e.jsxs("div",{className:"heroRight",children:[e.jsx(d,{src:"https://picsum.photos/seed/neeti-hero/1400/1000",alt:"NeetiCollective hero",frameClassName:"heroFrame"}),e.jsxs("div",{className:"heroCard","aria-label":"Short note",children:[e.jsx("div",{className:"heroCardTitle",children:"Focus"}),e.jsx("div",{className:"heroCardText",children:"We fund and support work that survives real constraints: budget, people, time, and messy ground truth."})]})]})]}),e.jsxs("section",{className:"values","aria-label":"What we optimize for",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("div",{className:"sectionTitle",children:"What we optimize for"}),e.jsx("div",{className:"sectionSub",children:"Calm design, sharp thinking, and outcomes that matter outside slides."})]}),e.jsxs("div",{className:"valueGrid",children:[e.jsxs("div",{className:"valueCard",children:[e.jsx("div",{className:"valueIcon",children:e.jsx(h,{})}),e.jsx("div",{className:"valueTitle",children:"Trust"}),e.jsx("div",{className:"valueText",children:"Transparent processes, clear governance, and humility about uncertainty."})]}),e.jsxs("div",{className:"valueCard",children:[e.jsx("div",{className:"valueIcon",children:e.jsx(m,{})}),e.jsx("div",{className:"valueTitle",children:"Outcomes"}),e.jsx("div",{className:"valueText",children:"Metrics that map to real life, not vanity numbers and dashboards."})]}),e.jsxs("div",{className:"valueCard",children:[e.jsx("div",{className:"valueIcon",children:e.jsx(p,{})}),e.jsx("div",{className:"valueTitle",children:"Durability"}),e.jsx("div",{className:"valueText",children:"Work designed for long timelines, with systems that keep working."})]}),e.jsxs("div",{className:"valueCard",children:[e.jsx("div",{className:"valueIcon",children:e.jsx(x,{})}),e.jsx("div",{className:"valueTitle",children:"Execution"}),e.jsx("div",{className:"valueText",children:"Strong operators, simple tools, and repeatable playbooks."})]})]})]}),e.jsxs("section",{className:"work","aria-label":"Work highlights",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("div",{className:"sectionTitle",children:"Work highlights"}),e.jsx("div",{className:"sectionSub",children:"A few areas where we invest deeply and learn publicly."})]}),e.jsx("div",{className:"workGrid",children:o.map(r=>e.jsxs("a",{className:"workCard",href:r.to,"aria-label":r.title,children:[e.jsx("div",{className:"workMedia",children:e.jsx(d,{src:r.img,alt:r.title,frameClassName:"workFrame"})}),e.jsxs("div",{className:"workBody",children:[e.jsxs("div",{className:"workTop",children:[e.jsx("div",{className:"workIcon",children:r.icon}),e.jsx("div",{className:"workTag",children:r.tag})]}),e.jsx("div",{className:"workTitle",children:r.title}),e.jsx("div",{className:"workText",children:r.desc}),e.jsxs("div",{className:"workLink",children:["View work ",e.jsx(i,{})]})]})]},r.title))}),e.jsx("div",{className:"sectionCtaRow",children:e.jsxs("a",{className:"btn primary",href:"/work",children:["All work ",e.jsx(s,{})]})})]}),e.jsxs("section",{className:"journal","aria-label":"Journal",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("div",{className:"sectionTitle",children:"Journal"}),e.jsx("div",{className:"sectionSub",children:"Notes from the field, methods, and partner stories."})]}),e.jsx("div",{className:"journalGrid",children:l.map(r=>e.jsxs("a",{className:"jCard",href:r.to,"aria-label":r.title,children:[e.jsx(d,{src:r.img,alt:r.title,frameClassName:"jFrame"}),e.jsxs("div",{className:"jBody",children:[e.jsx("div",{className:"jMeta",children:r.meta}),e.jsx("div",{className:"jTitle",children:r.title}),e.jsxs("div",{className:"jLink",children:["Read ",e.jsx(i,{})]})]})]},r.title))}),e.jsx("div",{className:"sectionCtaRow",children:e.jsxs("a",{className:"btn ghost",href:"/journal",children:["All posts ",e.jsx(s,{})]})})]}),e.jsxs("section",{className:"initiatives","aria-label":"Initiatives",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("div",{className:"sectionTitle",children:"Initiatives"}),e.jsx("div",{className:"sectionSub",children:"Programs that build capacity, not just coverage."})]}),e.jsx("div",{className:"initGrid",children:n.map(r=>e.jsxs("a",{className:"initCard",href:r.to,"aria-label":r.title,children:[e.jsx("div",{className:"initIcon",children:r.icon}),e.jsx("div",{className:"initTitle",children:r.title}),e.jsx("div",{className:"initText",children:r.desc}),e.jsxs("div",{className:"initLink",children:["View ",e.jsx(i,{})]})]},r.title))})]}),e.jsx("section",{className:"final",children:e.jsxs("div",{className:"finalInner",children:[e.jsx("div",{className:"finalTitle",children:"Build with us"}),e.jsx("div",{className:"finalText",children:"We partner with teams that ship in the real world. Clear goals, honest metrics, and durable execution."}),e.jsxs("div",{className:"finalCtas",children:[e.jsxs("a",{className:"btn primary",href:"/contact",children:["Contact ",e.jsx(s,{})]}),e.jsxs("a",{className:"btn ghost",href:"/initiatives",children:["Explore initiatives ",e.jsx(i,{})]})]})]})})]})})}export{y as default};
