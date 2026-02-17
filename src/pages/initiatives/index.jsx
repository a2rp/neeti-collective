// src/pages/initiatives/index.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Styled } from "./styled";
import { initiativesData } from "./insts/initiativesData";

import { FiArrowUpRight, FiSearch, FiTag, FiLoader, FiX } from "react-icons/fi";

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

export default function Initiatives() {
    const allTags = useMemo(() => {
        const set = new Set();
        initiativesData.forEach((x) =>
            (x.tags || []).forEach((t) => set.add(t)),
        );
        return ["All", ...Array.from(set)];
    }, []);

    const [q, setQ] = useState("");
    const [tag, setTag] = useState("All");

    const rows = useMemo(() => {
        const query = q.trim().toLowerCase();
        return initiativesData
            .filter((x) => {
                const matchTag =
                    tag === "All" ? true : (x.tags || []).includes(tag);
                const hay =
                    `${x.title} ${x.subtitle} ${x.summary} ${(x.tags || []).join(" ")}`.toLowerCase();
                const matchQ = query ? hay.includes(query) : true;
                return matchTag && matchQ;
            })
            .slice(0, 24);
    }, [q, tag]);

    const activeCount = rows.length;

    return (
        <Styled.Wrapper>
            <div className="container">
                <section className="hero">
                    <div className="kicker">Initiatives</div>
                    <h1 className="title">
                        Focused programs built for real constraints.
                    </h1>
                    <p className="sub">
                        A set of areas where we partner with builders and
                        institutions. Each initiative is designed for clear
                        ownership, measurable progress, and durable execution.
                    </p>

                    <div className="controls" aria-label="Initiatives filters">
                        <div className="search">
                            <FiSearch />
                            <input
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Search initiatives"
                                aria-label="Search initiatives"
                            />
                            {q ? (
                                <button
                                    type="button"
                                    className="clearBtn"
                                    onClick={() => setQ("")}
                                    aria-label="Clear search"
                                >
                                    <FiX />
                                </button>
                            ) : null}
                        </div>

                        <div className="tags" aria-label="Tags">
                            {allTags.map((t) => (
                                <button
                                    key={t}
                                    type="button"
                                    className={
                                        t === tag ? "tagBtn active" : "tagBtn"
                                    }
                                    onClick={() => setTag(t)}
                                >
                                    <FiTag />
                                    <span>{t}</span>
                                </button>
                            ))}
                        </div>

                        <div className="count" aria-label="Result count">
                            Showing{" "}
                            <span className="countNum">{activeCount}</span>
                        </div>
                    </div>
                </section>

                <section className="grid" aria-label="Initiatives list">
                    {rows.map((it) => (
                        <article key={it.slug} className="card">
                            <div className="mediaWrap">
                                <ImageWithLoader
                                    src={it.heroImg}
                                    alt={it.title}
                                    frameClassName="media"
                                />
                            </div>

                            <div className="body">
                                <div className="meta">
                                    {(it.tags || []).slice(0, 2).map((t) => (
                                        <span key={t} className="pill">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="cardTitle">{it.title}</h2>
                                <p className="cardSub">{it.subtitle}</p>
                                <p className="cardSum">{it.summary}</p>

                                <div className="hl" aria-label="Highlights">
                                    {(it.highlights || [])
                                        .slice(0, 3)
                                        .map((h) => (
                                            <div key={h} className="hlItem">
                                                <span
                                                    className="dot"
                                                    aria-hidden="true"
                                                />
                                                <span className="hlTxt">
                                                    {h}
                                                </span>
                                            </div>
                                        ))}
                                </div>

                                <div className="actions">
                                    <Link
                                        className="btn primary"
                                        to={`/initiatives/${it.slug}`}
                                    >
                                        View <FiArrowUpRight />
                                    </Link>
                                    <a className="btn ghost" href="/contact">
                                        Partner <FiArrowUpRight />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="cta" aria-label="Bottom call to action">
                    <div className="ctaCard">
                        <div className="ctaTitle">
                            Working on something that fits?
                        </div>
                        <div className="ctaText">
                            Share a short overview and what you need. We will
                            respond if there is a fit.
                        </div>
                        <div className="ctaActions">
                            <a className="btn primary" href="/contact">
                                Contact <FiArrowUpRight />
                            </a>
                            <a className="btn ghost" href="/work">
                                Browse work <FiArrowUpRight />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
}
