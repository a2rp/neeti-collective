import{l as m,r as s,j as e,F as x,a as g,b as u,e as p,d as h,c as b,i as f,k as v,L as y,g as j,h as w}from"./index-CymWrW4D.js";const k={Wrapper:m.section`
        width: 100%;
        background: var(--color-bg);

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 34px 20px 70px;
        }

        /* Top section */
        .top {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 16px;
        }

        .head {
            text-align: left;
        }

        .kicker {
            display: inline-flex;
            padding: 7px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-muted);
            font-size: 0.9rem;
        }

        .title {
            margin-top: 12px;
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: clamp(1.7rem, 3.1vw, 2.7rem);
            line-height: 1.08;
            color: var(--color-text);
        }

        .sub {
            margin-top: 10px;
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.55;
            max-width: 80ch;
        }

        /* Controls */
        .controls {
            margin-top: 14px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .searchBox {
            position: relative;
            width: 100%;
        }

        .searchIcon {
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--color-text-muted);
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .searchIcon svg {
            font-size: 1.05rem;
        }

        .searchBox input {
            width: 100%;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            border-radius: 12px;
            padding: 12px 12px 12px 38px;
            font-size: 0.95rem;
            outline: none;
        }

        .searchBox input:focus {
            border-color: var(--color-primary);
        }

        .tagsRow {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            flex-wrap: wrap;
        }

        .tagLabel {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-muted);
            font-size: 0.9rem;
            user-select: none;
        }

        .tagLabel svg {
            font-size: 1rem;
            color: var(--color-text);
        }

        .tags {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .tagBtn {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            padding: 9px 12px;
            border-radius: 999px;
            font-size: 0.92rem;
            cursor: pointer;
            transition:
                transform 160ms ease,
                background 160ms ease,
                opacity 160ms ease;
        }

        .tagBtn:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
        }

        .tagBtn:active {
            transform: translateY(0);
        }

        .tagBtn.active {
            background: #0b0b0b;
            border-color: #0b0b0b;
            color: #ffffff;
        }

        /* Grid */
        .grid {
            margin-top: 14px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            overflow: hidden;
            text-decoration: none;
            color: var(--color-text);
            transition: transform 160ms ease;
            display: flex;
            flex-direction: column;
            min-height: 420px;
        }

        .card:hover {
            transform: translateY(-2px);
            text-decoration: none;
        }

        .media {
            padding: 12px;
            height: 190px;
        }

        /* Image frame + loader (no blank space) */
        .imgFrame {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
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

        .body {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .meta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .icon svg {
            font-size: 1.1rem;
        }

        .pill {
            font-size: 0.88rem;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 6px 10px;
            border-radius: 999px;
            white-space: nowrap;
        }

        .cardTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.7px;
            text-transform: uppercase;
            font-size: 1.1rem;
            line-height: 1.1;
            color: var(--color-text);
        }

        .cardText {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        .cardBottom {
            margin-top: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding-top: 4px;
        }

        .loc {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-muted);
            font-size: 0.92rem;
        }

        .loc svg {
            font-size: 1rem;
            color: var(--color-text);
        }

        .go {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        /* Empty state */
        .empty {
            margin-top: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 18px;
            text-align: center;
        }

        .emptyTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.2rem;
        }

        .emptyText {
            margin-top: 8px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
        }

        .emptyActions {
            margin-top: 12px;
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .btnGhost {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            padding: 10px 12px;
            border-radius: 999px;
            font-size: 0.92rem;
            cursor: pointer;
            transition:
                transform 160ms ease,
                background 160ms ease;
        }

        .btnGhost:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
        }

        .btnGhost:active {
            transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 980px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .media {
                height: 210px;
            }
        }

        @media (max-width: 560px) {
            .container {
                padding: 24px 16px 60px;
            }
        }
    `};function N({src:i,alt:l}){const[a,n]=s.useState(!1),[o,c]=s.useState(!1);return e.jsxs("div",{className:"imgFrame",children:[!a&&!o?e.jsxs("div",{className:"imgLoader","aria-label":"Loading image",children:[e.jsx(w,{}),e.jsx("span",{className:"imgLoaderText",children:"Loading"})]}):null,o?e.jsx("div",{className:"imgError","aria-label":"Image failed to load",children:"Image unavailable"}):e.jsx("img",{className:"img",src:i,alt:l,loading:"lazy",onLoad:()=>n(!0),onError:()=>c(!0),style:{display:a?"block":"none"}})]})}function F(){const[i,l]=s.useState(""),[a,n]=s.useState("All"),o=s.useMemo(()=>[{slug:"education-systems",title:"Education Systems",tag:"Education",location:"Multi-state",icon:e.jsx(x,{}),desc:"Foundational learning, teacher enablement, and practical school operations support.",img:"https://picsum.photos/seed/neeti-work-edu/1200/800"},{slug:"climate-resilience",title:"Climate Resilience",tag:"Climate",location:"Heat and water",icon:e.jsx(g,{}),desc:"Locally grounded resilience across heat, water stress, and livelihoods.",img:"https://picsum.photos/seed/neeti-work-climate/1200/800"},{slug:"economic-mobility",title:"Economic Mobility",tag:"Mobility",location:"Jobs and skills",icon:e.jsx(u,{}),desc:"Skills-to-jobs pathways with measurable outcomes and repeatable playbooks.",img:"https://picsum.photos/seed/neeti-work-mobility/1200/800"},{slug:"district-partnerships",title:"District Partnerships",tag:"Public Systems",location:"District level",icon:e.jsx(p,{}),desc:"Long-term partnerships focused on execution capacity, not short-term pilots.",img:"https://picsum.photos/seed/neeti-work-district/1200/800"},{slug:"governance-trust",title:"Governance and Trust",tag:"Institutions",location:"Civic trust",icon:e.jsx(h,{}),desc:"Process design, transparency, and trust-building where systems meet citizens.",img:"https://picsum.photos/seed/neeti-work-trust/1200/800"},{slug:"community-labs",title:"Community Labs",tag:"Labs",location:"Pilot to scale",icon:e.jsx(b,{}),desc:"Pilot-first programs with tight feedback loops, fast iteration, and field rigor.",img:"https://picsum.photos/seed/neeti-work-labs/1200/800"}],[]),c=s.useMemo(()=>["All",...Array.from(new Set(o.map(t=>t.tag)))],[o]),d=s.useMemo(()=>{const r=i.trim().toLowerCase();return o.filter(t=>a==="All"?!0:t.tag===a).filter(t=>r?`${t.title} ${t.tag} ${t.location} ${t.desc}`.toLowerCase().includes(r):!0)},[o,i,a]);return e.jsx(k.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"top",children:[e.jsxs("div",{className:"head",children:[e.jsx("div",{className:"kicker",children:"Work"}),e.jsx("h1",{className:"title",children:"Focused work, built for the real world"}),e.jsx("p",{className:"sub",children:"Explore thematic areas and initiatives. Each page is a deep dive with goals, approach, partners, and outcomes."})]}),e.jsxs("div",{className:"controls","aria-label":"Work filters",children:[e.jsxs("div",{className:"searchBox",children:[e.jsx("span",{className:"searchIcon","aria-hidden":"true",children:e.jsx(f,{})}),e.jsx("input",{value:i,onChange:r=>l(r.target.value),placeholder:"Search work...","aria-label":"Search work"})]}),e.jsxs("div",{className:"tagsRow","aria-label":"Tags",children:[e.jsxs("span",{className:"tagLabel",children:[e.jsx(v,{}),e.jsx("span",{children:"Filter"})]}),e.jsx("div",{className:"tags",children:c.map(r=>e.jsx("button",{type:"button",className:r===a?"tagBtn active":"tagBtn",onClick:()=>n(r),children:r},r))})]})]})]}),e.jsx("div",{className:"grid","aria-label":"Work list",children:d.map(r=>e.jsxs(y,{to:`/work/${r.slug}`,className:"card","aria-label":r.title,children:[e.jsx("div",{className:"media",children:e.jsx(N,{src:r.img,alt:r.title})}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"icon",children:r.icon}),e.jsx("div",{className:"pill",children:r.tag})]}),e.jsx("div",{className:"cardTitle",children:r.title}),e.jsx("div",{className:"cardText",children:r.desc}),e.jsxs("div",{className:"cardBottom",children:[e.jsxs("div",{className:"loc",children:[e.jsx(p,{}),e.jsx("span",{children:r.location})]}),e.jsxs("div",{className:"go",children:["View ",e.jsx(j,{})]})]})]})]},r.slug))}),d.length===0?e.jsxs("div",{className:"empty",role:"status",children:[e.jsx("div",{className:"emptyTitle",children:"No results"}),e.jsx("div",{className:"emptyText",children:"Try a different keyword or reset the filter."}),e.jsxs("div",{className:"emptyActions",children:[e.jsx("button",{type:"button",className:"btnGhost",onClick:()=>l(""),children:"Clear search"}),e.jsx("button",{type:"button",className:"btnGhost",onClick:()=>n("All"),children:"Reset filter"})]})]}):null]})})}export{F as default};
