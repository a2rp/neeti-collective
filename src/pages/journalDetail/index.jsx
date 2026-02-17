// src/pages/journalDetail/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Styled } from "./styled";
import { journalData } from "./insts/journalData";

import {
    FiArrowLeft,
    FiArrowUpRight,
    FiCalendar,
    FiClock,
    FiTag,
    FiLoader,
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

export default function JournalDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const item = useMemo(
        () => journalData.find((x) => x.slug === slug),
        [slug],
    );

    useEffect(() => {
        if (!item) {
            toast.info("Journal post not found. Redirecting to Journal.");
            const t = setTimeout(
                () => navigate("/journal", { replace: true }),
                900,
            );
            return () => clearTimeout(t);
        }
    }, [item, navigate]);

    const related = useMemo(() => {
        if (!item) return [];
        const set = new Set(item.related || []);
        return journalData.filter((x) => set.has(x.slug)).slice(0, 3);
    }, [item]);

    if (!item) {
        return (
            <Styled.Wrapper>
                <div className="container">
                    <div className="notFound">
                        <div className="nfTitle">Post not found</div>
                        <div className="nfText">
                            Taking you back to Journal.
                        </div>
                        <Link className="nfBtn" to="/journal">
                            <FiArrowLeft />
                            Back to Journal
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
                        to="/journal"
                        aria-label="Back to Journal"
                    >
                        <FiArrowLeft />
                        <span>Journal</span>
                    </Link>

                    <div className="metaPills" aria-label="Post meta">
                        <span className="pill">
                            <FiTag />
                            <span>{item.category}</span>
                        </span>
                        <span className="pill">
                            <FiCalendar />
                            <span>{item.date}</span>
                        </span>
                        <span className="pill">
                            <FiClock />
                            <span>{item.readTime}</span>
                        </span>
                    </div>
                </div>

                <section className="hero">
                    <div className="heroLeft">
                        <h1 className="title">{item.title}</h1>
                        <p className="subtitle">{item.subtitle}</p>

                        <div className="author">
                            <div className="avatar" aria-hidden="true">
                                NC
                            </div>
                            <div className="authorInfo">
                                <div className="authorName">
                                    {item.author?.name}
                                </div>
                                <div className="authorRole">
                                    {item.author?.role}
                                </div>
                            </div>
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
                            <div className="noteTitle">Editorial note</div>
                            <div className="noteText">
                                These notes are written for builders working
                                inside real constraints. The goal is clarity and
                                practical thinking.
                            </div>
                        </div>
                    </div>
                </section>

                <section className="article" aria-label="Article content">
                    <div className="articleInner">
                        {item.blocks.map((b, idx) => {
                            if (b.type === "h2") {
                                return (
                                    <h2 key={`${b.text}-${idx}`} className="h2">
                                        {b.text}
                                    </h2>
                                );
                            }

                            if (b.type === "quote") {
                                return (
                                    <blockquote
                                        key={`${b.text}-${idx}`}
                                        className="quote"
                                    >
                                        {b.text}
                                    </blockquote>
                                );
                            }

                            if (b.type === "ul") {
                                return (
                                    <ul key={`ul-${idx}`} className="ul">
                                        {b.items.map((it) => (
                                            <li key={it}>{it}</li>
                                        ))}
                                    </ul>
                                );
                            }

                            return (
                                <p key={`${b.text}-${idx}`} className="p">
                                    {b.text}
                                </p>
                            );
                        })}
                    </div>

                    <aside className="side" aria-label="Sidebar">
                        <div className="sideTitle">Quick links</div>

                        <a className="sideLink" href="/work">
                            Browse work <FiArrowUpRight />
                        </a>
                        <a className="sideLink" href="/about">
                            About <FiArrowUpRight />
                        </a>
                        <a className="sideLink" href="/contact">
                            Contact <FiArrowUpRight />
                        </a>

                        <div className="sideBox">
                            <div className="sideBoxTitle">Newsletter</div>
                            <div className="sideBoxText">
                                Hook up the footer form to a backend later.
                                Toastify is ready.
                            </div>
                            <a className="sideLink" href="/#newsletter">
                                Stay up to date <FiArrowUpRight />
                            </a>
                        </div>
                    </aside>
                </section>

                <section className="section" aria-label="Related posts">
                    <div className="sectionHead">
                        <div className="sectionTitle">Related</div>
                        <div className="sectionSub">
                            More notes you can read next.
                        </div>
                    </div>

                    <div className="relGrid">
                        {related.map((r) => (
                            <Link
                                key={r.slug}
                                to={`/journal/${r.slug}`}
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
                                    <div className="relMeta">
                                        <span className="relTag">
                                            {r.category}
                                        </span>
                                        <span className="relDate">
                                            {r.date}
                                        </span>
                                    </div>

                                    <div className="relTitle">{r.title}</div>
                                    <div className="relText">{r.subtitle}</div>

                                    <div className="relGo">
                                        Read <FiArrowUpRight />
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
