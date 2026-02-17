// src/pages/workDetail/index.jsx
import React, { useMemo, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Styled } from "./styled";
import { workData } from "./insts/workData";

import {
    FiArrowLeft,
    FiArrowUpRight,
    FiMapPin,
    FiLoader,
    FiTag,
} from "react-icons/fi";

function ImageWithLoader({ src, alt, frameClassName = "" }) {
    const [status, setStatus] = useState("loading"); // loading | loaded | error

    return (
        <div
            className={`imgFrame ${frameClassName} ${status === "loaded" ? "isLoaded" : ""}`}
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

export default function WorkDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const item = useMemo(() => workData.find((x) => x.slug === slug), [slug]);

    useEffect(() => {
        if (!item) {
            toast.info("Work page not found. Redirecting to Work list.");
            const t = setTimeout(
                () => navigate("/work", { replace: true }),
                900,
            );
            return () => clearTimeout(t);
        }
    }, [item, navigate]);

    const related = useMemo(() => {
        if (!item) return [];
        return workData.filter((x) => x.slug !== item.slug).slice(0, 3);
    }, [item]);

    if (!item) {
        return (
            <Styled.Wrapper>
                <div className="container">
                    <div className="notFound">
                        <div className="nfTitle">Work not found</div>
                        <div className="nfText">
                            Taking you back to the Work list.
                        </div>
                        <Link className="nfBtn" to="/work">
                            <FiArrowLeft />
                            Back to Work
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
                    <Link className="back" to="/work" aria-label="Back to Work">
                        <FiArrowLeft />
                        <span>Work</span>
                    </Link>

                    <div className="loc" aria-label="Location">
                        <FiMapPin />
                        <span>{item.location}</span>
                    </div>
                </div>

                <section className="hero">
                    <div className="heroLeft">
                        <div className="kicker">
                            <FiTag />
                            <span>Work</span>
                        </div>

                        <h1 className="title">{item.title}</h1>
                        <p className="subtitle">{item.subtitle}</p>

                        <div className="tags" aria-label="Tags">
                            {item.tags.map((t) => (
                                <span key={t} className="tagPill">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="intro">
                            {item.intro.map((p) => (
                                <p key={p} className="para">
                                    {p}
                                </p>
                            ))}
                        </div>

                        <div className="ctaRow">
                            <a className="btn primary" href="/contact">
                                Partner with us <FiArrowUpRight />
                            </a>
                            <a className="btn ghost" href="/initiatives">
                                Explore initiatives <FiArrowUpRight />
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
                            <div className="noteTitle">How we work</div>
                            <div className="noteText">
                                Clear goals. Real constraints. Simple
                                measurement. Repeatable execution.
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="sectionHead">
                        <div className="sectionTitle">Approach</div>
                        <div className="sectionSub">
                            What we do and how we execute.
                        </div>
                    </div>

                    <div className="cards3">
                        {item.approach.map((a) => (
                            <div key={a.title} className="infoCard">
                                <div className="infoTitle">{a.title}</div>
                                <div className="infoText">{a.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section">
                    <div className="sectionHead">
                        <div className="sectionTitle">Outcomes</div>
                        <div className="sectionSub">
                            Signals we track and improve over time.
                        </div>
                    </div>

                    <div className="outGrid">
                        {item.outcomes.map((o) => (
                            <div key={o.k} className="outCard">
                                <div className="outKey">{o.k}</div>
                                <div className="outVal">{o.v}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section">
                    <div className="sectionHead">
                        <div className="sectionTitle">Gallery</div>
                        <div className="sectionSub">
                            Field snapshots and context.
                        </div>
                    </div>

                    <div className="galGrid">
                        {item.gallery.map((src) => (
                            <ImageWithLoader
                                key={src}
                                src={src}
                                alt={item.title}
                                frameClassName="galFrame"
                            />
                        ))}
                    </div>
                </section>

                <section className="section">
                    <div className="sectionHead">
                        <div className="sectionTitle">Related work</div>
                        <div className="sectionSub">
                            More areas you can explore.
                        </div>
                    </div>

                    <div className="relGrid">
                        {related.map((r) => (
                            <Link
                                key={r.slug}
                                to={`/work/${r.slug}`}
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
                                    <div className="relLink">
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
