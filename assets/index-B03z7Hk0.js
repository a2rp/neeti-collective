import{l as f,u as v,m as b,r as d,y,j as e,L as c,n as x,o as j,s as N,t as k,g as s,h as w}from"./index-CrgLGKuv.js";const g={Wrapper:f.section`
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

        .pill svg {
            color: var(--color-text);
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
            max-width: 78ch;
        }

        .author {
            margin-top: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
        }

        .avatar {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-family: var(--font-heading);
            letter-spacing: 0.6px;
        }

        .authorName {
            color: var(--color-text);
            font-size: 0.95rem;
            font-weight: 700;
        }

        .authorRole {
            color: var(--color-text-muted);
            font-size: 0.92rem;
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

        /* Article + sidebar */
        .article {
            padding-top: 18px;
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 12px;
            align-items: start;
        }

        .articleInner {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
        }

        .p {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.75;
            margin-bottom: 12px;
        }

        .h2 {
            margin: 18px 0 10px;
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: 1.2rem;
            color: var(--color-text);
        }

        .ul {
            margin: 10px 0 14px;
            padding-left: 18px;
            color: var(--color-text-muted);
            line-height: 1.8;
        }

        .quote {
            margin: 16px 0;
            padding: 14px;
            border-left: 3px solid var(--color-text);
            background: var(--color-bg);
            border-radius: 12px;
            color: var(--color-text);
            font-size: 1rem;
            line-height: 1.7;
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
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
            margin-bottom: 10px;
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
            margin-bottom: 10px;
        }

        .sideLink:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
            text-decoration: none;
        }

        .sideBox {
            margin-top: 10px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
        }

        .sideBoxTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
        }

        .sideBoxText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
            margin-bottom: 10px;
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
            min-height: 330px;
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

        .relMeta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 0.9rem;
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

            .article {
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
        }

        @media (max-width: 560px) {
            .container {
                padding: 24px 16px 60px;
            }
        }
    `},h=[{slug:"execution-over-optics",title:"Execution Over Optics",subtitle:"Institutional credibility is built through delivery, not noise.",date:"Mar 2026",readTime:"6 min read",category:"Strategy",heroImg:"https://picsum.photos/seed/neeti-jd-hero-1/1600/1000",author:{name:"NeetiCollective",role:"Field Notes"},blocks:[{type:"p",text:"Most systems do not fail because people lack ideas. They fail because execution gets underestimated and operations get romanticized. The gap between intent and delivery is where trust is won or lost."},{type:"p",text:"Optics can manufacture momentum for a while. Execution compounds. It creates repeatable capability that survives leadership changes, funding cycles, and public scrutiny."},{type:"h2",text:"What execution looks like"},{type:"ul",items:["Clear ownership: someone is responsible, not everyone.","Cadence: weekly rhythm, visible tracking, fast feedback loops.","Simple measurement: signal over noise, outcomes over activity.","Rigor under constraints: designs that work in real conditions."]},{type:"quote",text:"If your program cannot survive a personnel change, it is not a system yet."},{type:"h2",text:"What we optimize for"},{type:"p",text:"We prefer practical work with honest reporting. We value teams who ship, learn, and iterate without turning everything into theatre. Sustainable impact is often boring on social media and deeply valuable in the field."}],related:["designing-for-long-timelines","funding-with-discipline"]},{slug:"designing-for-long-timelines",title:"Designing for Long Timelines",subtitle:"Short cycles create headlines. Long cycles create impact.",date:"Feb 2026",readTime:"7 min read",category:"Systems",heroImg:"https://picsum.photos/seed/neeti-jd-hero-2/1600/1000",author:{name:"NeetiCollective",role:"Systems Notes"},blocks:[{type:"p",text:"Most meaningful change has a long half-life. It requires stability, iteration, and deep familiarity with constraints. Short cycles can be useful for learning, but long timelines are necessary for durable results."},{type:"h2",text:"A long timeline is a design constraint"},{type:"p",text:"When you build for years, you build differently. You avoid brittle dependencies, you keep systems legible, and you prioritize training and handoffs as core mechanics."},{type:"ul",items:["Make the system readable to the next person.","Build incentives that keep working after attention fades.","Treat training as product, not an afterthought.","Use pilots to learn, not to impress."]},{type:"quote",text:"Durability is not a feature. It is a strategy."}],related:["execution-over-optics","funding-with-discipline"]},{slug:"funding-with-discipline",title:"Funding with Discipline",subtitle:"Capital should reduce friction, not create distortion.",date:"Jan 2026",readTime:"5 min read",category:"Capital",heroImg:"https://picsum.photos/seed/neeti-jd-hero-3/1600/1000",author:{name:"NeetiCollective",role:"Capital Notes"},blocks:[{type:"p",text:"Funding can accelerate outcomes or it can deform incentives. The difference is discipline: clarity on what matters, and refusal to confuse activity with progress."},{type:"h2",text:"What disciplined funding supports"},{type:"ul",items:["Core operations: the boring part that makes the work real.","Measurement: simple, consistent signal collection.","Retention: helping programs survive rough cycles.","Partners: local capacity, not just central teams."]},{type:"quote",text:"Capital is a tool. Outcomes are the goal."}],related:["execution-over-optics","designing-for-long-timelines"]}];function u({src:n,alt:l,frameClassName:t=""}){const[o,i]=d.useState("loading");return e.jsxs("div",{className:`imgFrame ${t} ${o==="loaded"?"isLoaded":""}`,children:[o==="loading"?e.jsxs("div",{className:"imgLoader","aria-label":"Loading image",children:[e.jsx(w,{}),e.jsx("span",{className:"imgLoaderText",children:"Loading"})]}):null,o==="error"?e.jsx("div",{className:"imgError","aria-label":"Image failed to load",children:"Image unavailable"}):e.jsx("img",{className:"img",src:n,alt:l,loading:"lazy",onLoad:()=>i("loaded"),onError:()=>i("error")})]})}function z(){var i,p;const{slug:n}=v(),l=b(),t=d.useMemo(()=>h.find(r=>r.slug===n),[n]);d.useEffect(()=>{if(!t){y.info("Journal post not found. Redirecting to Journal.");const r=setTimeout(()=>l("/journal",{replace:!0}),900);return()=>clearTimeout(r)}},[t,l]);const o=d.useMemo(()=>{if(!t)return[];const r=new Set(t.related||[]);return h.filter(a=>r.has(a.slug)).slice(0,3)},[t]);return t?e.jsx(g.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"topBar",children:[e.jsxs(c,{className:"back",to:"/journal","aria-label":"Back to Journal",children:[e.jsx(x,{}),e.jsx("span",{children:"Journal"})]}),e.jsxs("div",{className:"metaPills","aria-label":"Post meta",children:[e.jsxs("span",{className:"pill",children:[e.jsx(j,{}),e.jsx("span",{children:t.category})]}),e.jsxs("span",{className:"pill",children:[e.jsx(N,{}),e.jsx("span",{children:t.date})]}),e.jsxs("span",{className:"pill",children:[e.jsx(k,{}),e.jsx("span",{children:t.readTime})]})]})]}),e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"heroLeft",children:[e.jsx("h1",{className:"title",children:t.title}),e.jsx("p",{className:"subtitle",children:t.subtitle}),e.jsxs("div",{className:"author",children:[e.jsx("div",{className:"avatar","aria-hidden":"true",children:"NC"}),e.jsxs("div",{className:"authorInfo",children:[e.jsx("div",{className:"authorName",children:(i=t.author)==null?void 0:i.name}),e.jsx("div",{className:"authorRole",children:(p=t.author)==null?void 0:p.role})]})]})]}),e.jsxs("div",{className:"heroRight",children:[e.jsx("div",{className:"heroMediaWrap",children:e.jsx(u,{src:t.heroImg,alt:t.title,frameClassName:"heroFrame"})}),e.jsxs("div",{className:"heroNote",children:[e.jsx("div",{className:"noteTitle",children:"Editorial note"}),e.jsx("div",{className:"noteText",children:"These notes are written for builders working inside real constraints. The goal is clarity and practical thinking."})]})]})]}),e.jsxs("section",{className:"article","aria-label":"Article content",children:[e.jsx("div",{className:"articleInner",children:t.blocks.map((r,a)=>r.type==="h2"?e.jsx("h2",{className:"h2",children:r.text},`${r.text}-${a}`):r.type==="quote"?e.jsx("blockquote",{className:"quote",children:r.text},`${r.text}-${a}`):r.type==="ul"?e.jsx("ul",{className:"ul",children:r.items.map(m=>e.jsx("li",{children:m},m))},`ul-${a}`):e.jsx("p",{className:"p",children:r.text},`${r.text}-${a}`))}),e.jsxs("aside",{className:"side","aria-label":"Sidebar",children:[e.jsx("div",{className:"sideTitle",children:"Quick links"}),e.jsxs("a",{className:"sideLink",href:"/work",children:["Browse work ",e.jsx(s,{})]}),e.jsxs("a",{className:"sideLink",href:"/about",children:["About ",e.jsx(s,{})]}),e.jsxs("a",{className:"sideLink",href:"/contact",children:["Contact ",e.jsx(s,{})]}),e.jsxs("div",{className:"sideBox",children:[e.jsx("div",{className:"sideBoxTitle",children:"Newsletter"}),e.jsx("div",{className:"sideBoxText",children:"Hook up the footer form to a backend later. Toastify is ready."}),e.jsxs("a",{className:"sideLink",href:"/#newsletter",children:["Stay up to date ",e.jsx(s,{})]})]})]})]}),e.jsxs("section",{className:"section","aria-label":"Related posts",children:[e.jsxs("div",{className:"sectionHead",children:[e.jsx("div",{className:"sectionTitle",children:"Related"}),e.jsx("div",{className:"sectionSub",children:"More notes you can read next."})]}),e.jsx("div",{className:"relGrid",children:o.map(r=>e.jsxs(c,{to:`/journal/${r.slug}`,className:"relCard",children:[e.jsx("div",{className:"relMedia",children:e.jsx(u,{src:r.heroImg,alt:r.title,frameClassName:"relFrame"})}),e.jsxs("div",{className:"relBody",children:[e.jsxs("div",{className:"relMeta",children:[e.jsx("span",{className:"relTag",children:r.category}),e.jsx("span",{className:"relDate",children:r.date})]}),e.jsx("div",{className:"relTitle",children:r.title}),e.jsx("div",{className:"relText",children:r.subtitle}),e.jsxs("div",{className:"relGo",children:["Read ",e.jsx(s,{})]})]})]},r.slug))})]})]})}):e.jsx(g.Wrapper,{children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"notFound",children:[e.jsx("div",{className:"nfTitle",children:"Post not found"}),e.jsx("div",{className:"nfText",children:"Taking you back to Journal."}),e.jsxs(c,{className:"nfBtn",to:"/journal",children:[e.jsx(x,{}),"Back to Journal"]})]})})})}export{z as default};
