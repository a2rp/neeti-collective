// src/pages/terms/index.jsx
import React, { useMemo } from "react";
import { Styled } from "./styled";
import { TERMS_LAST_UPDATED, termsSections } from "./insts/termsContent";

import {
    FiFileText,
    FiClock,
    FiLink,
    FiArrowUpRight,
    FiChevronUp,
} from "react-icons/fi";

export default function Terms() {
    const toc = useMemo(() => {
        return termsSections.map((s) => ({ id: s.id, title: s.title }));
    }, []);

    const scrollTo = (id) => (e) => {
        e.preventDefault();

        const el = document.getElementById(id);
        if (!el) return;

        const yOffset = -90; // adjust if needed
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    return (
        <Styled.Wrapper>
            <div className="container">
                <section className="hero" aria-label="Terms hero">
                    <div className="kicker">
                        <FiFileText />
                        <span>Terms</span>
                    </div>

                    <h1 className="title">Terms of Use</h1>

                    <div className="metaRow" aria-label="Terms metadata">
                        <span className="meta">
                            <FiClock />
                            <span>Last updated: {TERMS_LAST_UPDATED}</span>
                        </span>
                        <a className="metaLink" href="/privacy">
                            Privacy <FiArrowUpRight />
                        </a>
                    </div>

                    <p className="sub">
                        This page provides the terms that govern your use of the
                        site. It is designed to be clear and readable, not legal
                        theatre.
                    </p>
                </section>

                <section className="layout" aria-label="Terms layout">
                    <aside className="side" aria-label="Table of contents">
                        <div className="sideTitle">
                            <FiLink />
                            <span>On this page</span>
                        </div>

                        <div className="toc">
                            {toc.map((t) => (
                                <a
                                    key={t.id}
                                    href={`#${t.id}`}
                                    className="tocLink"
                                    onClick={scrollTo(t.id)}
                                >
                                    <span className="tocDot" />
                                    <span className="tocTxt">{t.title}</span>
                                </a>
                            ))}
                        </div>

                        <a
                            className="topBtn"
                            href="#top"
                            onClick={scrollTo("top")}
                        >
                            <FiChevronUp />
                            <span>Back to top</span>
                        </a>
                    </aside>

                    <div className="content" aria-label="Terms content">
                        <div id="top" />

                        {termsSections.map((s) => (
                            <article
                                key={s.id}
                                id={s.id}
                                className="section"
                                aria-label={s.title}
                            >
                                <h2 className="h2">{s.title}</h2>

                                {s.body.map((p) => (
                                    <p key={p} className="p">
                                        {p}
                                    </p>
                                ))}
                            </article>
                        ))}

                        <div
                            className="footerCard"
                            aria-label="Terms footer card"
                        >
                            <div className="fcTitle">Need clarification?</div>
                            <div className="fcText">
                                Use the Contact page to reach us. If a backend
                                is added later, this page can be expanded to
                                include jurisdiction and dispute resolution
                                details.
                            </div>

                            <div className="fcActions">
                                <a className="btn primary" href="/contact">
                                    Contact <FiArrowUpRight />
                                </a>
                                <a className="btn ghost" href="/privacy">
                                    Privacy <FiArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
}
