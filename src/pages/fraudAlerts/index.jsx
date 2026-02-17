import React, { useMemo } from "react";
import { Styled } from "./styled";
import {
    FRAUD_ALERTS_LAST_UPDATED,
    fraudSections,
} from "./insts/fraudAlertsContent";

import {
    FiAlertTriangle,
    FiClock,
    FiLink,
    FiArrowUpRight,
    FiChevronUp,
} from "react-icons/fi";

export default function FraudAlerts() {
    const toc = useMemo(() => {
        return fraudSections.map((s) => ({
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
                        <FiAlertTriangle />
                        <span>Fraud Alerts</span>
                    </div>

                    <h1 className="title">
                        Protecting against misuse of our name.
                    </h1>

                    <div className="metaRow">
                        <span className="meta">
                            <FiClock />
                            <span>
                                Last updated: {FRAUD_ALERTS_LAST_UPDATED}
                            </span>
                        </span>

                        <a className="metaLink" href="/contact">
                            Report <FiArrowUpRight />
                        </a>
                    </div>

                    <p className="sub">
                        We do not charge fees for proposals, partnerships, or
                        hiring. Verify communication before sharing funds or
                        sensitive information.
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

                        {fraudSections.map((s) => (
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
                            <div className="fcTitle">Suspicious activity?</div>
                            <div className="fcText">
                                Use the Contact page to report fraudulent
                                communication claiming to represent us.
                            </div>

                            <div className="fcActions">
                                <a className="btn primary" href="/contact">
                                    Contact <FiArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
}
