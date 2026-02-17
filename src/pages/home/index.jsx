// pages/home/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";

import {
    FiArrowRight,
    FiArrowUpRight,
    FiGrid,
    FiFeather,
    FiLayers,
    FiShield,
    FiTrendingUp,
    FiMapPin,
    FiLoader,
} from "react-icons/fi";

function ImageWithLoader({ src, alt, frameClassName = "", imgClassName = "" }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className={`imgFrame ${frameClassName}`}>
            {!isLoaded && !hasError ? (
                <div className="imgLoader" aria-label="Loading image">
                    <FiLoader />
                    <span className="imgLoaderText">Loading</span>
                </div>
            ) : null}

            {hasError ? (
                <div className="imgError" aria-label="Image failed to load">
                    Image unavailable
                </div>
            ) : (
                <img
                    className={`img ${imgClassName}`}
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                    style={{ display: isLoaded ? "block" : "none" }}
                />
            )}
        </div>
    );
}

export default function Home() {
    const brand = "NeetiCollective";

    const highlights = useMemo(
        () => [
            {
                title: "Education Systems",
                tag: "Learning outcomes",
                desc: "Practical interventions that improve fundamentals, teacher support, and school operations.",
                icon: <FiFeather />,
                img: "https://picsum.photos/seed/neeti-edu/1200/800",
                to: "/work/education-systems",
            },
            {
                title: "Climate Resilience",
                tag: "Risk to resilience",
                desc: "Heat, water, and livelihoods. We back scalable, locally grounded resilience work.",
                icon: <FiLayers />,
                img: "https://picsum.photos/seed/neeti-climate/1200/800",
                to: "/work/climate-resilience",
            },
            {
                title: "Economic Mobility",
                tag: "Jobs and dignity",
                desc: "Skills, placement pathways, and small-business enablement with measurable outcomes.",
                icon: <FiTrendingUp />,
                img: "https://picsum.photos/seed/neeti-mobility/1200/800",
                to: "/work/economic-mobility",
            },
        ],
        [],
    );

    const journal = useMemo(
        () => [
            {
                title: "Field Notes: What scaled, what broke, and what we learned",
                meta: "Journal",
                img: "https://picsum.photos/seed/neeti-journal-1/1200/800",
                to: "/journal/field-notes-scale",
            },
            {
                title: "A simple model for measuring real-world impact",
                meta: "Methods",
                img: "https://picsum.photos/seed/neeti-journal-2/1200/800",
                to: "/journal/impact-measurement-model",
            },
            {
                title: "Partner spotlight: building trust where it matters",
                meta: "Partners",
                img: "https://picsum.photos/seed/neeti-journal-3/1200/800",
                to: "/journal/partner-spotlight-trust",
            },
        ],
        [],
    );

    const initiatives = useMemo(
        () => [
            {
                title: "Community Labs",
                desc: "Pilot-first programs with tight feedback loops and fast iteration.",
                icon: <FiGrid />,
                to: "/initiatives/community-labs",
            },
            {
                title: "Fellowships",
                desc: "Support for builders who ship in public systems and hard environments.",
                icon: <FiShield />,
                to: "/initiatives/fellowships",
            },
            {
                title: "District Partners",
                desc: "Long-term partnerships focused on execution, not slogans.",
                icon: <FiMapPin />,
                to: "/initiatives/district-partners",
            },
        ],
        [],
    );

    return (
        <Styled.Wrapper>
            <div className="container">
                {/* HERO */}
                <section className="hero">
                    <div className="heroLeft">
                        <div className="kicker">Impact Collective</div>

                        <h1 className="heroTitle">
                            We back rigorous work that expands opportunity and
                            strengthens everyday systems.
                        </h1>

                        <p className="heroText">
                            {brand} partners with builders, researchers, and
                            operators working on education, economic mobility,
                            and climate resilience. We invest in practical
                            execution, measurable outcomes, and long timelines.
                        </p>

                        <div className="heroCtas">
                            <a
                                className="btn primary"
                                href="/work"
                                aria-label="Explore work"
                            >
                                Explore work <FiArrowRight />
                            </a>
                            <a
                                className="btn ghost"
                                href="/about"
                                aria-label={`About ${brand}`}
                            >
                                About {brand} <FiArrowUpRight />
                            </a>
                        </div>

                        <div className="heroStats" aria-label="Key numbers">
                            <div className="stat">
                                <div className="statNum">12+</div>
                                <div className="statLabel">Active programs</div>
                            </div>
                            <div className="stat">
                                <div className="statNum">28</div>
                                <div className="statLabel">Partner orgs</div>
                            </div>
                            <div className="stat">
                                <div className="statNum">4</div>
                                <div className="statLabel">Priority themes</div>
                            </div>
                        </div>
                    </div>

                    <div className="heroRight">
                        <ImageWithLoader
                            src="https://picsum.photos/seed/neeti-hero/1400/1000"
                            alt="NeetiCollective hero"
                            frameClassName="heroFrame"
                        />

                        <div className="heroCard" aria-label="Short note">
                            <div className="heroCardTitle">Focus</div>
                            <div className="heroCardText">
                                We fund and support work that survives real
                                constraints: budget, people, time, and messy
                                ground truth.
                            </div>
                        </div>
                    </div>
                </section>

                {/* VALUES */}
                <section className="values" aria-label="What we optimize for">
                    <div className="sectionHead">
                        <div className="sectionTitle">What we optimize for</div>
                        <div className="sectionSub">
                            Calm design, sharp thinking, and outcomes that
                            matter outside slides.
                        </div>
                    </div>

                    <div className="valueGrid">
                        <div className="valueCard">
                            <div className="valueIcon">
                                <FiShield />
                            </div>
                            <div className="valueTitle">Trust</div>
                            <div className="valueText">
                                Transparent processes, clear governance, and
                                humility about uncertainty.
                            </div>
                        </div>

                        <div className="valueCard">
                            <div className="valueIcon">
                                <FiTrendingUp />
                            </div>
                            <div className="valueTitle">Outcomes</div>
                            <div className="valueText">
                                Metrics that map to real life, not vanity
                                numbers and dashboards.
                            </div>
                        </div>

                        <div className="valueCard">
                            <div className="valueIcon">
                                <FiLayers />
                            </div>
                            <div className="valueTitle">Durability</div>
                            <div className="valueText">
                                Work designed for long timelines, with systems
                                that keep working.
                            </div>
                        </div>

                        <div className="valueCard">
                            <div className="valueIcon">
                                <FiGrid />
                            </div>
                            <div className="valueTitle">Execution</div>
                            <div className="valueText">
                                Strong operators, simple tools, and repeatable
                                playbooks.
                            </div>
                        </div>
                    </div>
                </section>

                {/* WORK HIGHLIGHTS */}
                <section className="work" aria-label="Work highlights">
                    <div className="sectionHead">
                        <div className="sectionTitle">Work highlights</div>
                        <div className="sectionSub">
                            A few areas where we invest deeply and learn
                            publicly.
                        </div>
                    </div>

                    <div className="workGrid">
                        {highlights.map((h) => (
                            <a
                                key={h.title}
                                className="workCard"
                                href={h.to}
                                aria-label={h.title}
                            >
                                <div className="workMedia">
                                    <ImageWithLoader
                                        src={h.img}
                                        alt={h.title}
                                        frameClassName="workFrame"
                                    />
                                </div>

                                <div className="workBody">
                                    <div className="workTop">
                                        <div className="workIcon">{h.icon}</div>
                                        <div className="workTag">{h.tag}</div>
                                    </div>

                                    <div className="workTitle">{h.title}</div>
                                    <div className="workText">{h.desc}</div>

                                    <div className="workLink">
                                        View work <FiArrowUpRight />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="sectionCtaRow">
                        <a className="btn primary" href="/work">
                            All work <FiArrowRight />
                        </a>
                    </div>
                </section>

                {/* JOURNAL */}
                <section className="journal" aria-label="Journal">
                    <div className="sectionHead">
                        <div className="sectionTitle">Journal</div>
                        <div className="sectionSub">
                            Notes from the field, methods, and partner stories.
                        </div>
                    </div>

                    <div className="journalGrid">
                        {journal.map((j) => (
                            <a
                                key={j.title}
                                className="jCard"
                                href={j.to}
                                aria-label={j.title}
                            >
                                <ImageWithLoader
                                    src={j.img}
                                    alt={j.title}
                                    frameClassName="jFrame"
                                />
                                <div className="jBody">
                                    <div className="jMeta">{j.meta}</div>
                                    <div className="jTitle">{j.title}</div>
                                    <div className="jLink">
                                        Read <FiArrowUpRight />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="sectionCtaRow">
                        <a className="btn ghost" href="/journal">
                            All posts <FiArrowRight />
                        </a>
                    </div>
                </section>

                {/* INITIATIVES */}
                <section className="initiatives" aria-label="Initiatives">
                    <div className="sectionHead">
                        <div className="sectionTitle">Initiatives</div>
                        <div className="sectionSub">
                            Programs that build capacity, not just coverage.
                        </div>
                    </div>

                    <div className="initGrid">
                        {initiatives.map((it) => (
                            <a
                                key={it.title}
                                className="initCard"
                                href={it.to}
                                aria-label={it.title}
                            >
                                <div className="initIcon">{it.icon}</div>
                                <div className="initTitle">{it.title}</div>
                                <div className="initText">{it.desc}</div>
                                <div className="initLink">
                                    View <FiArrowUpRight />
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* FINAL STRIP */}
                <section className="final">
                    <div className="finalInner">
                        <div className="finalTitle">Build with us</div>
                        <div className="finalText">
                            We partner with teams that ship in the real world.
                            Clear goals, honest metrics, and durable execution.
                        </div>

                        <div className="finalCtas">
                            <a className="btn primary" href="/contact">
                                Contact <FiArrowRight />
                            </a>
                            <a className="btn ghost" href="/initiatives">
                                Explore initiatives <FiArrowUpRight />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
}
