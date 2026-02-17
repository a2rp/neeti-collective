import{l as h,u as x,m as u,r as o,y as g,j as e,L as n,n as d,e as f,o as v,g as l,h as b}from"./index-CEqgXzdG.js";const p={Wrapper:h.section`
        width: 100%;
        background: var(--color-bg);

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 34px 20px 70px;
        }

        /* Image frame + loader (no blank space) */
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

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        /* Top bar */
        .topBar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
        }

        .back {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            color: var(--color-text);
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 10px 12px;
            transition:
                transform 160ms ease,
                background 160ms ease;
        }

        .back:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
            text-decoration: none;
        }

        .loc {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 10px 12px;
            font-size: 0.92rem;
            white-space: nowrap;
        }

        .loc svg {
            color: var(--color-text);
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
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-muted);
            font-size: 0.9rem;
            width: fit-content;
        }

        .kicker svg {
            color: var(--color-text);
        }

        .title {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: clamp(1.7rem, 3.2vw, 2.8rem);
            line-height: 1.08;
            color: var(--color-text);
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.55;
            max-width: 75ch;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 2px;
        }

        .tagPill {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            font-size: 0.9rem;
            padding: 7px 10px;
            border-radius: 999px;
        }

        .intro {
            margin-top: 2px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .para {
            color: var(--color-text-muted);
            font-size: 0.98rem;
            line-height: 1.65;
        }

        .ctaRow {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 4px;
        }

        .heroRight {
            display: grid;
            grid-template-rows: 1fr auto;
            gap: 10px;
        }

        .heroMediaWrap {
            width: 100%;
            height: 430px;
        }

        .heroFrame {
            height: 100%;
        }

        .heroNote {
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

        .cards3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .infoCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
            min-height: 140px;
        }

        .infoTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
        }

        .infoText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        .outGrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .outCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
            min-height: 120px;
        }

        .outKey {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
        }

        .outVal {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        .galGrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .galFrame {
            height: 210px;
        }

        /* Related */
        .relGrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .relCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            overflow: hidden;
            text-decoration: none;
            color: var(--color-text);
            transition: transform 160ms ease;
            display: flex;
            flex-direction: column;
            min-height: 340px;
        }

        .relCard:hover {
            transform: translateY(-2px);
            text-decoration: none;
        }

        .relMedia {
            padding: 12px;
            height: 170px;
        }

        .relFrame {
            height: 100%;
        }

        .relBody {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .relTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 1.05rem;
            line-height: 1.15;
            color: var(--color-text);
        }

        .relText {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        .relLink {
            margin-top: auto;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        /* Not found */
        .notFound {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 18px;
            text-align: center;
        }

        .nfTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: 1.3rem;
            color: var(--color-text);
        }

        .nfText {
            margin-top: 8px;
            color: var(--color-text-muted);
        }

        .nfBtn {
            margin-top: 12px;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            padding: 10px 12px;
            border-radius: 999px;
            text-decoration: none;
            transition:
                transform 160ms ease,
                background 160ms ease;
        }

        .nfBtn:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 1100px) {
            .hero {
                grid-template-columns: 1fr;
            }

            .heroMediaWrap {
                height: 360px;
            }
        }

        @media (max-width: 980px) {
            .cards3,
            .outGrid,
            .galGrid,
            .relGrid {
                grid-template-columns: 1fr;
            }

            .galFrame {
                height: 230px;
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
    `},m=[{slug:"education-systems",title:"Education Systems",subtitle:"Foundational learning and school operations built for real constraints.",heroImg:"https://picsum.photos/seed/neeti-wd-edu-hero/1600/1000",tags:["Education","Foundations","Public Systems"],location:"Multi-state",intro:["We support programs that improve foundational learning outcomes and strengthen school-level execution.","The focus stays on practical interventions that teachers can adopt and administrators can sustain."],approach:[{title:"Field-first design",desc:"Interventions are tested in real classrooms before scaling."},{title:"Teacher enablement",desc:"Simple tools, clear routines, and measurable practice loops."},{title:"Operations support",desc:"Attendance, materials, cadence, and school leadership rhythms."}],outcomes:[{k:"Implementation",v:"Curriculum and routines deployed across partner schools."},{k:"Capability",v:"Training playbooks with repeatable coaching models."},{k:"Measurement",v:"Simple learning metrics tied to classroom practice."}],gallery:["https://picsum.photos/seed/neeti-wd-edu-1/1200/800","https://picsum.photos/seed/neeti-wd-edu-2/1200/800","https://picsum.photos/seed/neeti-wd-edu-3/1200/800"]},{slug:"climate-resilience",title:"Climate Resilience",subtitle:"From risk to resilience - heat, water stress, and livelihoods.",heroImg:"https://picsum.photos/seed/neeti-wd-climate-hero/1600/1000",tags:["Climate","Resilience","Livelihoods"],location:"Heat and water",intro:["We back resilience work that is locally grounded and operationally realistic.","The aim is durable capability: systems and partners that keep working beyond a pilot."],approach:[{title:"Heat preparedness",desc:"Actionable plans, response drills, community readiness."},{title:"Water systems",desc:"Monitoring, maintenance loops, and local stewardship models."},{title:"Livelihood protection",desc:"Support tools that reduce climate-linked income volatility."}],outcomes:[{k:"Readiness",v:"Protocols and toolkits for local implementers."},{k:"Coverage",v:"Scalable practices designed for low-friction adoption."},{k:"Durability",v:"Programs optimized for long timelines and repeatability."}],gallery:["https://picsum.photos/seed/neeti-wd-climate-1/1200/800","https://picsum.photos/seed/neeti-wd-climate-2/1200/800","https://picsum.photos/seed/neeti-wd-climate-3/1200/800"]},{slug:"economic-mobility",title:"Economic Mobility",subtitle:"Skills-to-jobs pathways that prioritize outcomes over noise.",heroImg:"https://picsum.photos/seed/neeti-wd-mobility-hero/1600/1000",tags:["Mobility","Jobs","Skills"],location:"Jobs and skills",intro:["We focus on pathways that translate training into real job outcomes.","The work is designed to be measured, iterated, and scaled through partners."],approach:[{title:"Demand-led skills",desc:"Skills aligned to real hiring needs and constraints."},{title:"Placement systems",desc:"Structured pipelines, tracking, and employer feedback loops."},{title:"Retention support",desc:"Post-placement support to improve stability and outcomes."}],outcomes:[{k:"Placement",v:"Repeatable pipeline models with operational tracking."},{k:"Quality",v:"Outcome metrics beyond enrollment and completion."},{k:"Scale",v:"Partner-friendly playbooks for expansion."}],gallery:["https://picsum.photos/seed/neeti-wd-mobility-1/1200/800","https://picsum.photos/seed/neeti-wd-mobility-2/1200/800","https://picsum.photos/seed/neeti-wd-mobility-3/1200/800"]},{slug:"district-partnerships",title:"District Partnerships",subtitle:"Long-term partnerships focused on execution capacity.",heroImg:"https://picsum.photos/seed/neeti-wd-district-hero/1600/1000",tags:["Public Systems","Operations","Partnerships"],location:"District level",intro:["We partner for execution - cadence, ownership, and systems that survive personnel changes.","The goal is not a demo, but repeatable district-level capability."],approach:[{title:"Cadence design",desc:"Meeting rhythms, accountability, and review loops."},{title:"Operational clarity",desc:"Simple checklists and visible ownership models."},{title:"Local capacity",desc:"Training, support, and sustained coaching."}],outcomes:[{k:"Execution",v:"Operational playbooks used by district teams."},{k:"Governance",v:"Clear roles, responsibilities, and review mechanisms."},{k:"Continuity",v:"Systems designed to outlast leadership changes."}],gallery:["https://picsum.photos/seed/neeti-wd-district-1/1200/800","https://picsum.photos/seed/neeti-wd-district-2/1200/800","https://picsum.photos/seed/neeti-wd-district-3/1200/800"]},{slug:"governance-trust",title:"Governance and Trust",subtitle:"Transparency, process design, and trust-building where it matters.",heroImg:"https://picsum.photos/seed/neeti-wd-trust-hero/1600/1000",tags:["Institutions","Trust","Governance"],location:"Civic trust",intro:["Trust is operational. We support work that improves how systems show up for people.","The focus is on clear processes, transparency, and measurable reliability."],approach:[{title:"Process clarity",desc:"Less ambiguity, fewer drop-offs, clearer expectations."},{title:"Transparency tools",desc:"Simple reporting and communication patterns."},{title:"Reliability",desc:"Designing for consistency under real constraints."}],outcomes:[{k:"Clarity",v:"User-first process maps and guidance."},{k:"Transparency",v:"Better communication systems and reporting."},{k:"Reliability",v:"Reduced friction and higher trust signals."}],gallery:["https://picsum.photos/seed/neeti-wd-trust-1/1200/800","https://picsum.photos/seed/neeti-wd-trust-2/1200/800","https://picsum.photos/seed/neeti-wd-trust-3/1200/800"]},{slug:"community-labs",title:"Community Labs",subtitle:"Pilot-first programs with tight feedback loops.",heroImg:"https://picsum.photos/seed/neeti-wd-labs-hero/1600/1000",tags:["Labs","Pilots","Iteration"],location:"Pilot to scale",intro:["Labs exist to learn fast without breaking trust.","We support careful pilots, fast iteration, and clean scaling paths."],approach:[{title:"Small pilots",desc:"Start narrow, measure hard, expand only after signal."},{title:"Feedback loops",desc:"Rapid iteration with field input and clear metrics."},{title:"Scale plans",desc:"Scaling is designed, not assumed."}],outcomes:[{k:"Learning",v:"Pilot results and iteration notes captured cleanly."},{k:"Signal",v:"Clear criteria for scale vs stop."},{k:"Playbooks",v:"Reusable templates for partners."}],gallery:["https://picsum.photos/seed/neeti-wd-labs-1/1200/800","https://picsum.photos/seed/neeti-wd-labs-2/1200/800","https://picsum.photos/seed/neeti-wd-labs-3/1200/800"]}];function c({src:s,alt:i,frameClassName:a=""}){const[r,t]=o.useState("loading");return e.jsxs("div",{className:`imgFrame ${a} ${r==="loaded"?"isLoaded":""}`,children:[r==="loading"?e.jsxs("div",{className:"imgLoader","aria-label":"Loading image",children:[e.jsx(b,{}),e.jsx("span",{className:"imgLoaderText",children:"Loading"})]}):null,r==="error"?e.jsx("div",{className:"imgError","aria-label":"Image failed to load",children:"Image unavailable"}):e.jsx("img",{className:"img",src:s,alt:i,loading:"lazy",onLoad:()=>t("loaded"),onError:()=>t("error")})]})}function k(){const{slug:s}=x(),i=u(),a=o.useMemo(()=>m.find(t=>t.slug===s),[s]);o.useEffect(()=>{if(!a){g.info("Work page not found. Redirecting to Work list.");const t=setTimeout(()=>i("/work",{replace:!0}),900);return()=>clearTimeout(t)}},[a,i]);const r=o.useMemo(()=>a?m.filter(t=>t.slug!==a.slug).slice(0,3):[],[a]);return a?e.jsx(p.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"topBar",children:[e.jsxs(n,{className:"back",to:"/work","aria-label":"Back to Work",children:[e.jsx(d,{}),e.jsx("span",{children:"Work"})]}),e.jsxs("div",{className:"loc","aria-label":"Location",children:[e.jsx(f,{}),e.jsx("span",{children:a.location})]})]}),e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"heroLeft",children:[e.jsxs("div",{className:"kicker",children:[e.jsx(v,{}),e.jsx("span",{children:"Work"})]}),e.jsx("h1",{className:"title",children:a.title}),e.jsx("p",{className:"subtitle",children:a.subtitle}),e.jsx("div",{className:"tags","aria-label":"Tags",children:a.tags.map(t=>e.jsx("span",{className:"tagPill",children:t},t))}),e.jsx("div",{className:"intro",children:a.intro.map(t=>e.jsx("p",{className:"para",children:t},t))}),e.jsxs("div",{className:"ctaRow",children:[e.jsxs("a",{className:"btn primary",href:"/contact",children:["Partner with us ",e.jsx(l,{})]}),e.jsxs("a",{className:"btn ghost",href:"/initiatives",children:["Explore initiatives ",e.jsx(l,{})]})]})]}),e.jsxs("div",{className:"heroRight",children:[e.jsx("div",{className:"heroMediaWrap",children:e.jsx(c,{src:a.heroImg,alt:a.title,frameClassName:"heroFrame"})}),e.jsxs("div",{className:"heroNote",children:[e.jsx("div",{className:"noteTitle",children:"How we work"}),e.jsx("div",{className:"noteText",children:"Clear goals. Real constraints. Simple measurement. Repeatable execution."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("div",{className:"sectionTitle",children:"Approach"}),e.jsx("div",{className:"sectionSub",children:"What we do and how we execute."})]}),e.jsx("div",{className:"cards3",children:a.approach.map(t=>e.jsxs("div",{className:"infoCard",children:[e.jsx("div",{className:"infoTitle",children:t.title}),e.jsx("div",{className:"infoText",children:t.desc})]},t.title))})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("div",{className:"sectionTitle",children:"Outcomes"}),e.jsx("div",{className:"sectionSub",children:"Signals we track and improve over time."})]}),e.jsx("div",{className:"outGrid",children:a.outcomes.map(t=>e.jsxs("div",{className:"outCard",children:[e.jsx("div",{className:"outKey",children:t.k}),e.jsx("div",{className:"outVal",children:t.v})]},t.k))})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("div",{className:"sectionTitle",children:"Gallery"}),e.jsx("div",{className:"sectionSub",children:"Field snapshots and context."})]}),e.jsx("div",{className:"galGrid",children:a.gallery.map(t=>e.jsx(c,{src:t,alt:a.title,frameClassName:"galFrame"},t))})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("div",{className:"sectionTitle",children:"Related work"}),e.jsx("div",{className:"sectionSub",children:"More areas you can explore."})]}),e.jsx("div",{className:"relGrid",children:r.map(t=>e.jsxs(n,{to:`/work/${t.slug}`,className:"relCard",children:[e.jsx("div",{className:"relMedia",children:e.jsx(c,{src:t.heroImg,alt:t.title,frameClassName:"relFrame"})}),e.jsxs("div",{className:"relBody",children:[e.jsx("div",{className:"relTitle",children:t.title}),e.jsx("div",{className:"relText",children:t.subtitle}),e.jsxs("div",{className:"relLink",children:["View ",e.jsx(l,{})]})]})]},t.slug))})]})]})}):e.jsx(p.Wrapper,{children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"notFound",children:[e.jsx("div",{className:"nfTitle",children:"Work not found"}),e.jsx("div",{className:"nfText",children:"Taking you back to the Work list."}),e.jsxs(n,{className:"nfBtn",to:"/work",children:[e.jsx(d,{}),"Back to Work"]})]})})})}export{k as default};
