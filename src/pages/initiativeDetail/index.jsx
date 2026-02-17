// src/pages/initiativeDetail/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Styled } from "./styled";
import { initiativesData } from "../initiatives/insts/initiativesData";

import {
    FiArrowLeft,
    FiArrowUpRight,
    FiLoader,
    FiCheckCircle,
    FiTarget,
    FiTool,
    FiUsers,
    FiMapPin,
    FiCalendar,
    FiFileText,
} from "react-icons/fi";

function ImageWithLoader({ src, alt, frameClassName = "" }) {
    const [status, setStatus] = useState("loading"); // loading | loaded | error

    return (
        <div className={`imgFrame ${frameClassName}`}>
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

const makeLocalDetail = (it) => {
    return {
        goals: [
            "Strengthen execution capability under real constraints.",
            "Improve measurement loops without increasing admin burden.",
            "Build durable systems that survive personnel changes.",
        ],
        approach: [
            "Partner with operators and institutions with clear ownership.",
            "Ship simple playbooks, then iterate through field feedback.",
            "Measure signal consistently, report honestly, scale selectively.",
        ],
        focusAreas: [
            "Program design and delivery cadence",
            "Training, coaching, and handoffs",
            "Measurement and reporting hygiene",
            "Partnerships and local capacity",
        ],
        whereWeWork: [
            "Tier 1-3 cities",
            "District-level systems",
            "Community programs",
        ],
        engagement: [
            "Pilot support (8-12 weeks)",
            "Program iteration and measurement setup",
            "Partner onboarding and playbook rollout",
        ],
        resources: [
            { title: "Overview note", icon: <FiFileText />, href: "#" },
            { title: "Field checklist", icon: <FiTool />, href: "#" },
            { title: "Measurement template", icon: <FiTarget />, href: "#" },
        ],
        timeline: [
            {
                label: "Discovery",
                text: "2-3 weeks of baseline and constraints mapping.",
            },
            {
                label: "Pilot",
                text: "8-12 weeks of field execution with tight feedback.",
            },
            {
                label: "Scale",
                text: "Expand only after repeatable signal is clear.",
            },
        ],
    };
};

export default function InitiativeDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const item = useMemo(
        () => initiativesData.find((x) => x.slug === slug),
        [slug],
    );

    const detail = useMemo(() => {
        if (!item) return null;
        return makeLocalDetail(item);
    }, [item]);

    const related = useMemo(() => {
        if (!item) return [];
        return initiativesData.filter((x) => x.slug !== item.slug).slice(0, 3);
    }, [item]);

    useEffect(() => {
        if (!item) {
            toast.info("Initiative not found. Redirecting to Initiatives.");
            const t = setTimeout(
                () => navigate("/initiatives", { replace: true }),
                900,
            );
            return () => clearTimeout(t);
        }
    }, [item, navigate]);

    if (!item || !detail) {
        return (
            <Styled.Wrapper>
                <div className="container">
                    <div className="notFound">
                        <div className="nfTitle">Initiative not found</div>
                        <div className="nfText">
                            Taking you back to Initiatives.
                        </div>
                        <Link className="nfBtn" to="/initiatives">
                            <FiArrowLeft />
                            Back to Initiatives
                        </Link>
                    </div>
                </div>
            </Styled.Wrapper>
        );
    }

    return (
        <Styled.Wrapper>
            <div className="container">
                <div className="topBar">
                    <Link
                        className="back"
                        to="/initiatives"
                        aria-label="Back to Initiatives"
                    >
                        <FiArrowLeft />
                        <span>Initiatives</span>
                    </Link>

                    <div className="metaPills" aria-label="Initiative meta">
                        {(item.tags || []).slice(0, 3).map((t) => (
                            <span key={t} className="pill">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <section className="hero" aria-label="Initiative hero">
                    <div className="heroLeft">
                        <div className="kicker">Initiative</div>
                        <h1 className="title">{item.title}</h1>
                        <p className="subtitle">{item.subtitle}</p>

                        <p className="summary">{item.summary}</p>

                        <div className="hl">
                            {(item.highlights || []).slice(0, 3).map((h) => (
                                <div key={h} className="hlItem">
                                    <FiCheckCircle />
                                    <span>{h}</span>
                                </div>
                            ))}
                        </div>

                        <div className="ctaRow">
                            <a className="btn primary" href="/contact">
                                Partner <FiArrowUpRight />
                            </a>
                            <a className="btn ghost" href="/work">
                                Browse work <FiArrowUpRight />
                            </a>
                        </div>
                    </div>

                    <div className="heroRight">
                        <div className="heroMediaWrap">
                            <ImageWithLoader
                                src={item.heroImg}
                                alt={item.title}
                                frameClassName="heroFrame"
                            />
                        </div>

                        <div className="heroNote">
                            <div className="noteTitle">How we engage</div>
                            <div className="noteText">
                                Small pilots, clear measurement, and execution
                                support that can survive handoffs.
                            </div>

                            <div className="pillRow">
                                <span className="miniPill">
                                    <FiUsers />
                                    <span>Partners</span>
                                </span>
                                <span className="miniPill">
                                    <FiMapPin />
                                    <span>Field</span>
                                </span>
                                <span className="miniPill">
                                    <FiCalendar />
                                    <span>Cadence</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="main"
                    aria-label="Initiative detail content"
                >
                    <div className="content">
                        <div className="block">
                            <div className="blockTitle">
                                <FiTarget />
                                <span>Goals</span>
                            </div>
                            <ul className="ul">
                                {detail.goals.map((g) => (
                                    <li key={g}>{g}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="block">
                            <div className="blockTitle">
                                <FiTool />
                                <span>Approach</span>
                            </div>
                            <ul className="ul">
                                {detail.approach.map((g) => (
                                    <li key={g}>{g}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="block">
                            <div className="blockTitle">
                                <FiFileText />
                                <span>Focus areas</span>
                            </div>
                            <div className="chips">
                                {detail.focusAreas.map((x) => (
                                    <span key={x} className="chip">
                                        {x}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="block">
                            <div className="blockTitle">
                                <FiCalendar />
                                <span>Timeline</span>
                            </div>
                            <div className="timeline">
                                {detail.timeline.map((t) => (
                                    <div key={t.label} className="tRow">
                                        <div className="tLabel">{t.label}</div>
                                        <div className="tText">{t.text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="side" aria-label="Initiative sidebar">
                        <div className="sideTitle">Engagement</div>
                        <div className="sideList">
                            {detail.engagement.map((x) => (
                                <div key={x} className="sideItem">
                                    <span className="dot" aria-hidden="true" />
                                    <span className="sideTxt">{x}</span>
                                </div>
                            ))}
                        </div>

                        <div className="sideBox">
                            <div className="sideBoxTitle">Where we work</div>
                            <div className="sideList">
                                {detail.whereWeWork.map((x) => (
                                    <div key={x} className="sideItem">
                                        <span
                                            className="dot"
                                            aria-hidden="true"
                                        />
                                        <span className="sideTxt">{x}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="sideBox">
                            <div className="sideBoxTitle">Resources</div>
                            <div className="res">
                                {detail.resources.map((r) => (
                                    <a
                                        key={r.title}
                                        className="resLink"
                                        href={r.href}
                                    >
                                        <span className="resIcon">
                                            {r.icon}
                                        </span>
                                        <span className="resTxt">
                                            {r.title}
                                        </span>
                                        <FiArrowUpRight />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="sideBox">
                            <div className="sideBoxTitle">Next</div>
                            <a className="resLink" href="/initiatives">
                                View all initiatives <FiArrowUpRight />
                            </a>
                            <a className="resLink" href="/contact">
                                Contact <FiArrowUpRight />
                            </a>
                        </div>
                    </aside>
                </section>

                <section className="section" aria-label="Related initiatives">
                    <div className="sectionHead">
                        <div className="sectionTitle">More initiatives</div>
                        <div className="sectionSub">
                            Explore other areas of focus.
                        </div>
                    </div>

                    <div className="relGrid">
                        {related.map((r) => (
                            <Link
                                key={r.slug}
                                to={`/initiatives/${r.slug}`}
                                className="relCard"
                            >
                                <div className="relMedia">
                                    <ImageWithLoader
                                        src={r.heroImg}
                                        alt={r.title}
                                        frameClassName="relFrame"
                                    />
                                </div>

                                <div className="relBody">
                                    <div className="relTitle">{r.title}</div>
                                    <div className="relText">{r.subtitle}</div>
                                    <div className="relGo">
                                        View <FiArrowUpRight />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
}
