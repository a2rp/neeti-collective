// src/pages/submissionPolicy/index.jsx
import React, { useMemo } from "react";
import { Styled } from "./styled";
import {
    SUBMISSION_POLICY_LAST_UPDATED,
    submissionPolicySections,
} from "./insts/submissionPolicyContent";

import {
    FiSend,
    FiClock,
    FiLink,
    FiArrowUpRight,
    FiChevronUp,
} from "react-icons/fi";

export default function SubmissionPolicy() {
    const toc = useMemo(() => {
        return submissionPolicySections.map((s) => ({
            id: s.id,
            title: s.title,
        }));
    }, []);

    const scrollTo = (id) => (e) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (!el) return;

        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    return (
        <Styled.Wrapper>
            <div className="container">
                <section className="hero">
                    <div className="kicker">
                        <FiSend />
                        <span>Submission Policy</span>
                    </div>

                    <h1 className="title">Submission Policy</h1>

                    <div className="metaRow">
                        <span className="meta">
                            <FiClock />
                            <span>
                                Last updated: {SUBMISSION_POLICY_LAST_UPDATED}
                            </span>
                        </span>

                        <a className="metaLink" href="/contact">
                            Contact <FiArrowUpRight />
                        </a>
                    </div>

                    <p className="sub">
                        This policy explains how we handle unsolicited
                        submissions and partnership proposals shared through the
                        website.
                    </p>
                </section>

                <section className="layout">
                    <aside className="side">
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

                    <div className="content">
                        <div id="top" />

                        {submissionPolicySections.map((s) => (
                            <article key={s.id} id={s.id} className="section">
                                <h2 className="h2">{s.title}</h2>

                                {s.body.map((p) => (
                                    <p key={p} className="p">
                                        {p}
                                    </p>
                                ))}
                            </article>
                        ))}

                        <div className="footerCard">
                            <div className="fcTitle">
                                Submitting a proposal?
                            </div>
                            <div className="fcText">
                                Keep it short, avoid confidential details, and
                                share the outcome you want. If there is a fit,
                                we will respond.
                            </div>

                            <div className="fcActions">
                                <a className="btn primary" href="/contact">
                                    Contact <FiArrowUpRight />
                                </a>
                                <a className="btn ghost" href="/terms">
                                    Terms <FiArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
}
