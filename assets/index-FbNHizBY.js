import{l as u,u as b,m as j,r as o,y as N,j as e,L as c,n as d,q as y,g as s,w as k,e as w,s as p,x as g,z as f,A as v,h as T}from"./index-CrgLGKuv.js";import{i as x}from"./initiativesData-DIs4gVEJ.js";const m={Wrapper:u.section`
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
            flex-wrap: wrap;
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

        .metaPills {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 10px 12px;
            color: var(--color-text-muted);
            font-size: 0.92rem;
            white-space: nowrap;
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
            background: var(--color-primary-soft);
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
            gap: 10px;
        }

        .kicker {
            display: inline-flex;
            width: fit-content;
            padding: 7px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-muted);
            font-size: 0.9rem;
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
            line-height: 1.6;
        }

        .summary {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.65;
        }

        .hl {
            margin-top: 6px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
        }

        .hlItem {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        .hlItem svg {
            color: var(--color-text);
        }

        .ctaRow {
            margin-top: 10px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .heroRight {
            display: grid;
            grid-template-rows: 1fr auto;
            gap: 10px;
        }

        .heroMediaWrap {
            width: 100%;
            height: 420px;
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

        .pillRow {
            margin-top: 10px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .miniPill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 8px 10px;
            color: var(--color-text-muted);
            font-size: 0.9rem;
        }

        .miniPill svg {
            color: var(--color-text);
        }

        /* Main content */
        .main {
            padding-top: 18px;
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 12px;
            align-items: start;
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .block {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
        }

        .blockTitle {
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

        .blockTitle svg {
            color: var(--color-text);
        }

        .ul {
            padding-left: 18px;
            color: var(--color-text-muted);
            line-height: 1.85;
            font-size: 0.98rem;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .chip {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            font-size: 0.92rem;
            padding: 9px 12px;
            border-radius: 999px;
        }

        .timeline {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .tRow {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 12px;
            align-items: start;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .tLabel {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        .tText {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.65;
        }

        /* Sidebar */
        .side {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
            position: sticky;
            top: 86px;
        }

        .sideTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
            margin-bottom: 10px;
        }

        .sideList {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .sideItem {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 99px;
            background: var(--color-text);
            opacity: 0.55;
        }

        .sideBox {
            margin-top: 12px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
        }

        .sideBoxTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
            margin-bottom: 10px;
        }

        .res {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .resLink {
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

        .resLink:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
            text-decoration: none;
        }

        .resIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text);
        }

        .resTxt {
            flex: 1;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        /* Related */
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
        }

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
            min-height: 300px;
        }

        .relCard:hover {
            transform: translateY(-2px);
            text-decoration: none;
        }

        .relMedia {
            padding: 12px;
            height: 160px;
        }

        .relFrame {
            height: 100%;
            border-radius: 14px;
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

        .relGo {
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

            .main {
                grid-template-columns: 1fr;
            }

            .side {
                position: static;
                top: auto;
            }
        }

        @media (max-width: 980px) {
            .relGrid {
                grid-template-columns: 1fr;
            }

            .tRow {
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
    `};function h({src:t,alt:l,frameClassName:a=""}){const[i,n]=o.useState("loading");return e.jsxs("div",{className:`imgFrame ${a}`,children:[i==="loading"?e.jsxs("div",{className:"imgLoader","aria-label":"Loading image",children:[e.jsx(T,{}),e.jsx("span",{className:"imgLoaderText",children:"Loading"})]}):null,i==="error"?e.jsx("div",{className:"imgError","aria-label":"Image failed to load",children:"Image unavailable"}):e.jsx("img",{className:"img",src:t,alt:l,loading:"lazy",onLoad:()=>n("loaded"),onError:()=>n("error")})]})}const z=t=>({goals:["Strengthen execution capability under real constraints.","Improve measurement loops without increasing admin burden.","Build durable systems that survive personnel changes."],approach:["Partner with operators and institutions with clear ownership.","Ship simple playbooks, then iterate through field feedback.","Measure signal consistently, report honestly, scale selectively."],focusAreas:["Program design and delivery cadence","Training, coaching, and handoffs","Measurement and reporting hygiene","Partnerships and local capacity"],whereWeWork:["Tier 1-3 cities","District-level systems","Community programs"],engagement:["Pilot support (8-12 weeks)","Program iteration and measurement setup","Partner onboarding and playbook rollout"],resources:[{title:"Overview note",icon:e.jsx(v,{}),href:"#"},{title:"Field checklist",icon:e.jsx(f,{}),href:"#"},{title:"Measurement template",icon:e.jsx(g,{}),href:"#"}],timeline:[{label:"Discovery",text:"2-3 weeks of baseline and constraints mapping."},{label:"Pilot",text:"8-12 weeks of field execution with tight feedback."},{label:"Scale",text:"Expand only after repeatable signal is clear."}]});function F(){const{slug:t}=b(),l=j(),a=o.useMemo(()=>x.find(r=>r.slug===t),[t]),i=o.useMemo(()=>a?z():null,[a]),n=o.useMemo(()=>a?x.filter(r=>r.slug!==a.slug).slice(0,3):[],[a]);return o.useEffect(()=>{if(!a){N.info("Initiative not found. Redirecting to Initiatives.");const r=setTimeout(()=>l("/initiatives",{replace:!0}),900);return()=>clearTimeout(r)}},[a,l]),!a||!i?e.jsx(m.Wrapper,{children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"notFound",children:[e.jsx("div",{className:"nfTitle",children:"Initiative not found"}),e.jsx("div",{className:"nfText",children:"Taking you back to Initiatives."}),e.jsxs(c,{className:"nfBtn",to:"/initiatives",children:[e.jsx(d,{}),"Back to Initiatives"]})]})})}):e.jsx(m.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"topBar",children:[e.jsxs(c,{className:"back",to:"/initiatives","aria-label":"Back to Initiatives",children:[e.jsx(d,{}),e.jsx("span",{children:"Initiatives"})]}),e.jsx("div",{className:"metaPills","aria-label":"Initiative meta",children:(a.tags||[]).slice(0,3).map(r=>e.jsx("span",{className:"pill",children:r},r))})]}),e.jsxs("section",{className:"hero","aria-label":"Initiative hero",children:[e.jsxs("div",{className:"heroLeft",children:[e.jsx("div",{className:"kicker",children:"Initiative"}),e.jsx("h1",{className:"title",children:a.title}),e.jsx("p",{className:"subtitle",children:a.subtitle}),e.jsx("p",{className:"summary",children:a.summary}),e.jsx("div",{className:"hl",children:(a.highlights||[]).slice(0,3).map(r=>e.jsxs("div",{className:"hlItem",children:[e.jsx(y,{}),e.jsx("span",{children:r})]},r))}),e.jsxs("div",{className:"ctaRow",children:[e.jsxs("a",{className:"btn primary",href:"/contact",children:["Partner ",e.jsx(s,{})]}),e.jsxs("a",{className:"btn ghost",href:"/work",children:["Browse work ",e.jsx(s,{})]})]})]}),e.jsxs("div",{className:"heroRight",children:[e.jsx("div",{className:"heroMediaWrap",children:e.jsx(h,{src:a.heroImg,alt:a.title,frameClassName:"heroFrame"})}),e.jsxs("div",{className:"heroNote",children:[e.jsx("div",{className:"noteTitle",children:"How we engage"}),e.jsx("div",{className:"noteText",children:"Small pilots, clear measurement, and execution support that can survive handoffs."}),e.jsxs("div",{className:"pillRow",children:[e.jsxs("span",{className:"miniPill",children:[e.jsx(k,{}),e.jsx("span",{children:"Partners"})]}),e.jsxs("span",{className:"miniPill",children:[e.jsx(w,{}),e.jsx("span",{children:"Field"})]}),e.jsxs("span",{className:"miniPill",children:[e.jsx(p,{}),e.jsx("span",{children:"Cadence"})]})]})]})]})]}),e.jsxs("section",{className:"main","aria-label":"Initiative detail content",children:[e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"blockTitle",children:[e.jsx(g,{}),e.jsx("span",{children:"Goals"})]}),e.jsx("ul",{className:"ul",children:i.goals.map(r=>e.jsx("li",{children:r},r))})]}),e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"blockTitle",children:[e.jsx(f,{}),e.jsx("span",{children:"Approach"})]}),e.jsx("ul",{className:"ul",children:i.approach.map(r=>e.jsx("li",{children:r},r))})]}),e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"blockTitle",children:[e.jsx(v,{}),e.jsx("span",{children:"Focus areas"})]}),e.jsx("div",{className:"chips",children:i.focusAreas.map(r=>e.jsx("span",{className:"chip",children:r},r))})]}),e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"blockTitle",children:[e.jsx(p,{}),e.jsx("span",{children:"Timeline"})]}),e.jsx("div",{className:"timeline",children:i.timeline.map(r=>e.jsxs("div",{className:"tRow",children:[e.jsx("div",{className:"tLabel",children:r.label}),e.jsx("div",{className:"tText",children:r.text})]},r.label))})]})]}),e.jsxs("aside",{className:"side","aria-label":"Initiative sidebar",children:[e.jsx("div",{className:"sideTitle",children:"Engagement"}),e.jsx("div",{className:"sideList",children:i.engagement.map(r=>e.jsxs("div",{className:"sideItem",children:[e.jsx("span",{className:"dot","aria-hidden":"true"}),e.jsx("span",{className:"sideTxt",children:r})]},r))}),e.jsxs("div",{className:"sideBox",children:[e.jsx("div",{className:"sideBoxTitle",children:"Where we work"}),e.jsx("div",{className:"sideList",children:i.whereWeWork.map(r=>e.jsxs("div",{className:"sideItem",children:[e.jsx("span",{className:"dot","aria-hidden":"true"}),e.jsx("span",{className:"sideTxt",children:r})]},r))})]}),e.jsxs("div",{className:"sideBox",children:[e.jsx("div",{className:"sideBoxTitle",children:"Resources"}),e.jsx("div",{className:"res",children:i.resources.map(r=>e.jsxs("a",{className:"resLink",href:r.href,children:[e.jsx("span",{className:"resIcon",children:r.icon}),e.jsx("span",{className:"resTxt",children:r.title}),e.jsx(s,{})]},r.title))})]}),e.jsxs("div",{className:"sideBox",children:[e.jsx("div",{className:"sideBoxTitle",children:"Next"}),e.jsxs("a",{className:"resLink",href:"/initiatives",children:["View all initiatives ",e.jsx(s,{})]}),e.jsxs("a",{className:"resLink",href:"/contact",children:["Contact ",e.jsx(s,{})]})]})]})]}),e.jsxs("section",{className:"section","aria-label":"Related initiatives",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("div",{className:"sectionTitle",children:"More initiatives"}),e.jsx("div",{className:"sectionSub",children:"Explore other areas of focus."})]}),e.jsx("div",{className:"relGrid",children:n.map(r=>e.jsxs(c,{to:`/initiatives/${r.slug}`,className:"relCard",children:[e.jsx("div",{className:"relMedia",children:e.jsx(h,{src:r.heroImg,alt:r.title,frameClassName:"relFrame"})}),e.jsxs("div",{className:"relBody",children:[e.jsx("div",{className:"relTitle",children:r.title}),e.jsx("div",{className:"relText",children:r.subtitle}),e.jsxs("div",{className:"relGo",children:["View ",e.jsx(s,{})]})]})]},r.slug))})]})]})})}export{F as default};
