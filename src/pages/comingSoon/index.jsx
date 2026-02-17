// src/pages/comingSoon/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import { toast } from "react-toastify";

import {
    FiClock,
    FiArrowUpRight,
    FiHome,
    FiMail,
    FiBell,
    FiLoader,
} from "react-icons/fi";

function ImageWithLoader({ src, alt }) {
    const [status, setStatus] = useState("loading"); // loading | loaded | error

    return (
        <div className="imgFrame">
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

export default function ComingSoon() {
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const requestedPath = useMemo(() => {
        const raw = (location?.pathname || "").trim();
        if (!raw || raw === "/") return "";
        return raw;
    }, [location?.pathname]);

    const title = useMemo(() => {
        if (requestedPath) return "This page is coming soon.";
        return "Coming soon.";
    }, [requestedPath]);

    const subtitle = useMemo(() => {
        if (requestedPath) {
            return `We are building ${requestedPath} with the same structure and clarity used across the site.`;
        }
        return "We are building this section with care and shipping it in small, reliable steps.";
    }, [requestedPath]);

    useEffect(() => {
        // tiny helper toast (non-intrusive)
        if (requestedPath) {
            toast.info("This section is under construction.");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        const v = String(email || "").trim();
        if (!v) {
            toast.error("Please enter an email.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
            toast.error("Please enter a valid email.");
            return;
        }

        setIsSubmitting(true);

        // Backend hook placeholder
        // Later: await api.post("/notify", { email: v, path: requestedPath })
        setTimeout(() => {
            setIsSubmitting(false);
            setEmail("");
            toast.success("Noted. We will notify you when this is live.");
        }, 700);
    };

    return (
        <Styled.Wrapper>
            <div className="container">
                <section className="hero">
                    <div className="kicker">
                        <FiClock />
                        <span>Coming soon</span>
                    </div>

                    <h1 className="title">{title}</h1>
                    <p className="sub">{subtitle}</p>

                    <div className="ctaRow">
                        <Link className="btn primary" to="/">
                            <FiHome />
                            <span>Home</span>
                            <FiArrowUpRight />
                        </Link>

                        <Link className="btn ghost" to="/contact">
                            <FiMail />
                            <span>Contact</span>
                            <FiArrowUpRight />
                        </Link>
                    </div>
                </section>

                <section className="grid" aria-label="Coming soon content">
                    <div className="left">
                        <div className="card">
                            <div className="cardTitle">
                                <FiBell />
                                <span>Get updates</span>
                            </div>

                            <div className="cardText">
                                Drop your email. This is frontend-only for now.
                                When backend comes, we will connect it to a real
                                notify list and show toast feedback on submit.
                            </div>

                            <form className="form" onSubmit={onSubmit}>
                                <label className="field">
                                    <span className="lbl">Email</span>
                                    <input
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="you@domain.com"
                                        autoComplete="email"
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="submit"
                                    disabled={isSubmitting}
                                    aria-disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spin">
                                                <FiLoader />
                                            </span>
                                            <span>Saving</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Notify me</span>
                                            <FiArrowUpRight />
                                        </>
                                    )}
                                </button>

                                {requestedPath ? (
                                    <div className="miniNote">
                                        Tracking interest for{" "}
                                        <span className="strong">
                                            {requestedPath}
                                        </span>
                                    </div>
                                ) : null}
                            </form>
                        </div>

                        <div className="card">
                            <div className="cardTitle">
                                <span>What we are building</span>
                            </div>

                            <div className="list">
                                <div className="li">
                                    <span className="dot" />
                                    <span>
                                        A clean page structure with real content
                                    </span>
                                </div>
                                <div className="li">
                                    <span className="dot" />
                                    <span>
                                        Consistent navigation and institutional
                                        layout
                                    </span>
                                </div>
                                <div className="li">
                                    <span className="dot" />
                                    <span>
                                        Accessible design and mobile polish
                                    </span>
                                </div>
                                <div className="li">
                                    <span className="dot" />
                                    <span>
                                        Backend-ready forms and controlled
                                        feedback via toast
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="mediaCard">
                            <div className="mediaTop">
                                <div className="mediaTitle">
                                    Preview moodboard
                                </div>
                                <div className="mediaSub">
                                    Visual placeholder using Picsum.
                                </div>
                            </div>

                            <div className="media">
                                <ImageWithLoader
                                    src="https://picsum.photos/1200/900?random=87"
                                    alt="Preview"
                                />
                            </div>

                            <div className="mediaBottom">
                                <div className="mbTitle">Shipping in steps</div>
                                <div className="mbText">
                                    We publish small improvements frequently so
                                    the site remains consistent and reliable.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
}
