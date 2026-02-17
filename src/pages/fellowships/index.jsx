import React, { useMemo } from "react";
import { Styled } from "./styled";
import {
    FELLOWSHIPS_LAST_UPDATED,
    fellowshipPrograms,
} from "./insts/fellowshipsData";

import {
    FiUsers,
    FiClock,
    FiMapPin,
    FiCalendar,
    FiArrowUpRight,
    FiCheckCircle,
} from "react-icons/fi";

export default function Fellowships() {
    const programs = useMemo(() => fellowshipPrograms, []);

    return (
        <Styled.Wrapper>
            <div className="container">
                <section className="hero">
                    <div className="kicker">
                        <FiUsers />
                        <span>Fellowships</span>
                    </div>

                    <h1 className="title">
                        Structured programs for long-term builders.
                    </h1>

                    <div className="metaRow">
                        <span className="meta">
                            <FiCalendar />
                            <span>
                                Last updated: {FELLOWSHIPS_LAST_UPDATED}
                            </span>
                        </span>
                    </div>

                    <p className="sub">
                        Our fellowships support practitioners committed to
                        disciplined execution, institutional thinking, and
                        long-term impact.
                    </p>
                </section>

                <section className="grid">
                    {programs.map((p) => (
                        <article key={p.id} className="card">
                            <div className="cardHead">
                                <div className="badge">{p.cohort}</div>
                                <h2 className="cardTitle">{p.title}</h2>
                            </div>

                            <p className="summary">{p.summary}</p>

                            <div className="details">
                                <div className="detail">
                                    <FiClock />
                                    <span>{p.duration}</span>
                                </div>

                                <div className="detail">
                                    <FiMapPin />
                                    <span>{p.mode}</span>
                                </div>
                            </div>

                            <div className="actions">
                                <a
                                    href={`/fellowships/${p.id}`}
                                    className="btn primary"
                                >
                                    View details <FiArrowUpRight />
                                </a>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="info">
                    <div className="infoCard">
                        <div className="infoTitle">
                            <FiCheckCircle />
                            <span>Selection Principles</span>
                        </div>

                        <ul className="infoList">
                            <li>Evidence of execution, not only ideas</li>
                            <li>Clear understanding of constraints</li>
                            <li>Commitment to long-term institutional work</li>
                            <li>Ability to work across systems</li>
                        </ul>

                        <a href="/contact" className="btn ghost">
                            Inquire <FiArrowUpRight />
                        </a>
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
}
