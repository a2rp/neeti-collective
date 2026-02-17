// src/pages/journalDetail/insts/journalData.js
export const journalData = [
    {
        slug: "execution-over-optics",
        title: "Execution Over Optics",
        subtitle:
            "Institutional credibility is built through delivery, not noise.",
        date: "Mar 2026",
        readTime: "6 min read",
        category: "Strategy",
        heroImg: "https://picsum.photos/seed/neeti-jd-hero-1/1600/1000",
        author: {
            name: "NeetiCollective",
            role: "Field Notes",
        },
        blocks: [
            {
                type: "p",
                text: "Most systems do not fail because people lack ideas. They fail because execution gets underestimated and operations get romanticized. The gap between intent and delivery is where trust is won or lost.",
            },
            {
                type: "p",
                text: "Optics can manufacture momentum for a while. Execution compounds. It creates repeatable capability that survives leadership changes, funding cycles, and public scrutiny.",
            },
            {
                type: "h2",
                text: "What execution looks like",
            },
            {
                type: "ul",
                items: [
                    "Clear ownership: someone is responsible, not everyone.",
                    "Cadence: weekly rhythm, visible tracking, fast feedback loops.",
                    "Simple measurement: signal over noise, outcomes over activity.",
                    "Rigor under constraints: designs that work in real conditions.",
                ],
            },
            {
                type: "quote",
                text: "If your program cannot survive a personnel change, it is not a system yet.",
            },
            {
                type: "h2",
                text: "What we optimize for",
            },
            {
                type: "p",
                text: "We prefer practical work with honest reporting. We value teams who ship, learn, and iterate without turning everything into theatre. Sustainable impact is often boring on social media and deeply valuable in the field.",
            },
        ],
        related: ["designing-for-long-timelines", "funding-with-discipline"],
    },
    {
        slug: "designing-for-long-timelines",
        title: "Designing for Long Timelines",
        subtitle: "Short cycles create headlines. Long cycles create impact.",
        date: "Feb 2026",
        readTime: "7 min read",
        category: "Systems",
        heroImg: "https://picsum.photos/seed/neeti-jd-hero-2/1600/1000",
        author: {
            name: "NeetiCollective",
            role: "Systems Notes",
        },
        blocks: [
            {
                type: "p",
                text: "Most meaningful change has a long half-life. It requires stability, iteration, and deep familiarity with constraints. Short cycles can be useful for learning, but long timelines are necessary for durable results.",
            },
            {
                type: "h2",
                text: "A long timeline is a design constraint",
            },
            {
                type: "p",
                text: "When you build for years, you build differently. You avoid brittle dependencies, you keep systems legible, and you prioritize training and handoffs as core mechanics.",
            },
            {
                type: "ul",
                items: [
                    "Make the system readable to the next person.",
                    "Build incentives that keep working after attention fades.",
                    "Treat training as product, not an afterthought.",
                    "Use pilots to learn, not to impress.",
                ],
            },
            {
                type: "quote",
                text: "Durability is not a feature. It is a strategy.",
            },
        ],
        related: ["execution-over-optics", "funding-with-discipline"],
    },
    {
        slug: "funding-with-discipline",
        title: "Funding with Discipline",
        subtitle: "Capital should reduce friction, not create distortion.",
        date: "Jan 2026",
        readTime: "5 min read",
        category: "Capital",
        heroImg: "https://picsum.photos/seed/neeti-jd-hero-3/1600/1000",
        author: {
            name: "NeetiCollective",
            role: "Capital Notes",
        },
        blocks: [
            {
                type: "p",
                text: "Funding can accelerate outcomes or it can deform incentives. The difference is discipline: clarity on what matters, and refusal to confuse activity with progress.",
            },
            {
                type: "h2",
                text: "What disciplined funding supports",
            },
            {
                type: "ul",
                items: [
                    "Core operations: the boring part that makes the work real.",
                    "Measurement: simple, consistent signal collection.",
                    "Retention: helping programs survive rough cycles.",
                    "Partners: local capacity, not just central teams.",
                ],
            },
            {
                type: "quote",
                text: "Capital is a tool. Outcomes are the goal.",
            },
        ],
        related: ["execution-over-optics", "designing-for-long-timelines"],
    },
];
