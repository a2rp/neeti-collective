import{l as o,r as i,j as e,g as n,h as c}from"./index-CrgLGKuv.js";const l={Wrapper:o.section`
        width: 100%;
        background: var(--color-bg);

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 60px 20px 80px;
        }

        .hero {
            max-width: 900px;
            margin-bottom: 40px;
        }

        .kicker {
            font-size: 0.9rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: var(--color-text-muted);
            margin-bottom: 12px;
        }

        .title {
            font-family: var(--font-heading);
            font-size: clamp(2rem, 4vw, 3rem);
            text-transform: uppercase;
            line-height: 1.1;
            margin-bottom: 16px;
        }

        .sub {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.6;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: var(--color-surface);
            transition: transform 200ms ease;
        }

        .card:hover {
            transform: translateY(-4px);
        }

        .imgFrame {
            position: relative;
            height: 240px;
            background: var(--color-surface);
            overflow: hidden;
        }

        .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .imgLoader {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .content {
            padding: 20px;
        }

        .meta {
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
            color: var(--color-text-muted);
            margin-bottom: 12px;
        }

        .tag {
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .cardTitle {
            font-family: var(--font-heading);
            font-size: 1.3rem;
            margin-bottom: 10px;
        }

        .excerpt {
            font-size: 0.95rem;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-bottom: 16px;
        }

        .readMore {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            color: var(--color-text);
        }

        .readMore:hover {
            text-decoration: underline;
        }
    `};function d({src:a,alt:t}){const[s,r]=i.useState("loading");return e.jsxs("div",{className:"imgFrame",children:[s==="loading"&&e.jsx("div",{className:"imgLoader",children:e.jsx(c,{})}),e.jsx("img",{src:a,alt:t,className:"img",loading:"lazy",onLoad:()=>r("loaded"),onError:()=>r("error")})]})}function p(){const a=i.useMemo(()=>[{id:1,title:"Execution Over Optics",excerpt:"Why institutional credibility is built through delivery, not noise.",image:"https://picsum.photos/seed/j1/1200/800",tag:"Strategy",date:"Mar 2026"},{id:2,title:"Designing for Long Timelines",excerpt:"Short cycles create headlines. Long cycles create impact.",image:"https://picsum.photos/seed/j2/1200/800",tag:"Systems",date:"Feb 2026"},{id:3,title:"Funding with Discipline",excerpt:"Capital should reduce friction, not create distortion.",image:"https://picsum.photos/seed/j3/1200/800",tag:"Capital",date:"Jan 2026"}],[]);return e.jsx(l.Wrapper,{children:e.jsxs("div",{className:"container",children:[e.jsxs("section",{className:"hero",children:[e.jsx("div",{className:"kicker",children:"Journal"}),e.jsx("h1",{className:"title",children:"Ideas, field notes, and internal thinking."}),e.jsx("p",{className:"sub",children:"We write about systems, execution, capital discipline, and what actually moves outcomes in real environments."})]}),e.jsx("section",{className:"grid",children:a.map(t=>e.jsxs("article",{className:"card",children:[e.jsx(d,{src:t.image,alt:t.title}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"tag",children:t.tag}),e.jsx("span",{className:"date",children:t.date})]}),e.jsx("h2",{className:"cardTitle",children:t.title}),e.jsx("p",{className:"excerpt",children:t.excerpt}),e.jsxs("a",{href:"#",className:"readMore",children:["Read ",e.jsx(n,{})]})]})]},t.id))})]})})}export{p as default};
