// src/pages/about/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import { toast } from "react-toastify";

import {
    FiArrowUpRight,
    FiShield,
    FiTrendingUp,
    FiLayers,
    FiGrid,
    FiMail,
    FiLoader,
    FiCheckCircle,
} from "react-icons/fi";

function ImageWithLoader({ src, alt, frameClassName = "" }) {
    const [status, setStatus] = useState("loading"); // loading | loaded | error

    return (
        <div
            className={`imgFrame ${frameClassName} ${
                status === "loaded" ? "isLoaded" : ""
            }`}
        >
            {status === "loading" ? (
                <div className="imgLoader" aria-label="Loading image">
                    <FiLoader />
                    <span className="imgLoaderText">Loading</span>
                </div>
            ) : null}

            {status === "error" ? (
                <div className="imgError" aria-label="Image failed to load">
                    Image unavailable
                </div>
            ) : (
                <img
                    className="img"
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={() => setStatus("loaded")}
                    onError={() => setStatus("error")}
                />
            )}
        </div>
    );
}

export default function About() {
    const brand = "NeetiCollective";

    const principles = useMemo(
        () => [
            {
                title: "Trust",
                desc: "We invest in work that builds trust through reliability, clarity, and respect for constraints.",
                icon: <FiShield />,
            },
            {
                title: "Outcomes",
                desc: "We prefer measurable progress over performative motion. Signal matters more than noise.",
                icon: <FiTrendingUp />,
            },
            {
                title: "Durability",
                desc: "We support systems that survive leadership changes, funding cycles, and real-world friction.",
                icon: <FiLayers />,
            },
            {
                title: "Execution",
                desc: "Good ideas are common. Execution is rare. We partner with teams that ship and iterate.",
                icon: <FiGrid />,
            },
        ],
        [],
    );

    const faqs = useMemo(
        () => [
            {
                q: "What does NeetiCollective do?",
                a: "We partner with builders working on education systems, economic mobility, and climate resilience. We support programs that are practical, measurable, and designed for long timelines.",
            },
            {
                q: "Do you accept unsolicited proposals?",
                a: "Yes. If your work is execution-focused and outcomes-driven, share a short overview and what you need. We will respond if there is a fit.",
            },
            {
                q: "Do you fund early-stage pilots?",
                a: "We support pilots when the learning plan is clear and the scaling path is realistic. We prefer small pilots with strong measurement over big launches.",
            },
        ],
        [],
    );

    const [form, setForm] = useState({
        name: "",
        email: "",
        note: "",
    });

    const onChange = (key) => (e) => {
        setForm((s) => ({ ...s, [key]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const name = form.name.trim();
        const email = form.email.trim();
        const note = form.note.trim();

        if (!name || !email || !note) {
            toast.error("Please fill all fields.");
            return;
        }

        toast.success("Message saved. Backend can be connected later.");

        setForm({
            name: "",
            email: "",
            note: "",
        });
    };

    return (
        <Styled.Wrapper>
            <div className="container">
                <section className="hero" aria-label="About hero">
                    <div className="heroLeft">
                        <div className="kicker">About</div>

                        <h1 className="title">
                            We invest in rigorous work that expands opportunity
                            and strengthens everyday systems.
                        </h1>

                        <p className="sub">
                            {brand} partners with entrepreneurs, researchers,
                            and operators building in real environments. The
                            focus is on practical execution, measurable
                            outcomes, and long timelines.
                        </p>

                        <div className="ctaRow">
                            <a className="btn primary" href="/work">
                                Explore work <FiArrowUpRight />
                            </a>

                            <a className="btn ghost" href="/contact">
                                Contact <FiMail />
                            </a>
                        </div>

                        <div className="miniMeta" aria-label="Highlights">
                            <div className="miniItem">
                                <FiCheckCircle />
                                <span>Execution-first partnerships</span>
                            </div>
                            <div className="miniItem">
                                <FiCheckCircle />
                                <span>Simple measurement loops</span>
                            </div>
                            <div className="miniItem">
                                <FiCheckCircle />
                                <span>Durable systems, not demos</span>
                            </div>
                        </div>
                    </div>

                    <div className="heroRight">
                        <div className="heroMedia">
                            <ImageWithLoader
                                src="https://picsum.photos/seed/neeti-about-hero/1600/1100"
                                alt="NeetiCollective"
                                frameClassName="heroFrame"
                            />
                        </div>

                        <div className="note">
                            <div className="noteTitle">Working style</div>
                            <div className="noteText">
                                Less theatre. More field work. Clear ownership.
                                Honest reporting.
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" aria-label="Principles">
                    <div className="sectionHead">
                        <div className="sectionTitle">Principles</div>
                        <div className="sectionSub">
                            What we optimize for in every partnership.
                        </div>
                    </div>

                    <div className="grid4">
                        {principles.map((p) => (
                            <div key={p.title} className="card">
                                <div className="icon">{p.icon}</div>
                                <div className="cardTitle">{p.title}</div>
                                <div className="cardText">{p.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section" aria-label="FAQ">
                    <div className="sectionHead">
                        <div className="sectionTitle">FAQ</div>
                        <div className="sectionSub">
                            Quick answers to common questions.
                        </div>
                    </div>

                    <div className="faq">
                        {faqs.map((f) => (
                            <details key={f.q} className="faqItem">
                                <summary className="faqQ">{f.q}</summary>
                                <div className="faqA">{f.a}</div>
                            </details>
                        ))}
                    </div>
                </section>

                <section className="section" aria-label="Contact form">
                    <div className="sectionHead">
                        <div className="sectionTitle">Get in touch</div>
                        <div className="sectionSub">
                            This form is functional in the UI. Connect to a
                            backend later to send messages.
                        </div>
                    </div>

                    <div className="contactWrap">
                        <form className="form" onSubmit={onSubmit}>
                            <div className="row2">
                                <label className="field">
                                    <span className="label">Name</span>
                                    <input
                                        value={form.name}
                                        onChange={onChange("name")}
                                        placeholder="Your name"
                                    />
                                </label>

                                <label className="field">
                                    <span className="label">Email</span>
                                    <input
                                        value={form.email}
                                        onChange={onChange("email")}
                                        placeholder="you@example.com"
                                    />
                                </label>
                            </div>

                            <label className="field">
                                <span className="label">Message</span>
                                <textarea
                                    value={form.note}
                                    onChange={onChange("note")}
                                    placeholder="Share a short overview and what you need."
                                    rows={5}
                                />
                            </label>

                            <div className="formActions">
                                <button className="btn primary" type="submit">
                                    Send <FiArrowUpRight />
                                </button>
                                <div className="hint">
                                    Backend hookup later: Axios + Toastify
                                    ready.
                                </div>
                            </div>
                        </form>

                        <div className="side">
                            <div className="sideTitle">What helps</div>
                            <ul className="sideList">
                                <li>Problem statement and target audience</li>
                                <li>Current traction or pilot plan</li>
                                <li>
                                    What support you need (funding, ops,
                                    partners)
                                </li>
                                <li>How you measure outcomes</li>
                            </ul>

                            <div className="sideBox">
                                <div className="sideBoxTitle">Next</div>
                                <a className="sideLink" href="/work">
                                    Browse work <FiArrowUpRight />
                                </a>
                                <a className="sideLink" href="/initiatives">
                                    Explore initiatives <FiArrowUpRight />
                                </a>
                                <a className="sideLink" href="/journal">
                                    Read journal <FiArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
}
