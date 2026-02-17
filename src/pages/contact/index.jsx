// src/pages/contact/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import { toast } from "react-toastify";

import {
    FiArrowUpRight,
    FiMail,
    FiPhone,
    FiMapPin,
    FiClock,
    FiLoader,
    FiCheckCircle,
    FiBriefcase,
    FiUser,
    FiMessageSquare,
} from "react-icons/fi";

const isValidEmail = (v) => {
    const s = String(v || "").trim();
    if (!s) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
};

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        org: "",
        topic: "Partnership",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const metaCards = useMemo(
        () => [
            {
                icon: <FiMail />,
                label: "Email",
                value: "hello@neeticollective.org",
                hint: "Best for partnership and proposals",
            },
            {
                icon: <FiPhone />,
                label: "Phone",
                value: "+91 90000 00000",
                hint: "Mon-Fri, 10:00-18:00 IST",
            },
            {
                icon: <FiMapPin />,
                label: "Location",
                value: "India",
                hint: "Remote-first, field-aligned partnerships",
            },
            {
                icon: <FiClock />,
                label: "Response time",
                value: "2-5 business days",
                hint: "If there is a fit, we respond",
            },
        ],
        [],
    );

    const onChange = (key) => (e) => {
        setForm((p) => ({ ...p, [key]: e.target.value }));
    };

    const validate = () => {
        const name = form.name.trim();
        const email = form.email.trim();
        const message = form.message.trim();

        if (!name) return "Please enter your name.";
        if (!isValidEmail(email)) return "Please enter a valid email.";
        if (!message || message.length < 20)
            return "Message should be at least 20 characters.";
        return "";
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const err = validate();
        if (err) {
            toast.error(err);
            return;
        }

        setIsSubmitting(true);

        // Backend hook placeholder
        // When API is ready:
        // await api.post("/contact", form)
        // For now, simulate success
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success(
                "Message received. We will review and respond if there is a fit.",
            );

            setForm({
                name: "",
                email: "",
                org: "",
                topic: "Partnership",
                message: "",
            });
        }, 700);
    };

    return (
        <Styled.Wrapper>
            <div className="container">
                <section className="hero">
                    <div className="kicker">Contact</div>
                    <h1 className="title">Start a conversation.</h1>
                    <p className="sub">
                        Share a short overview of what you are building, the
                        constraints, and what you need. If there is a fit, we
                        will respond.
                    </p>
                </section>

                <section className="layout" aria-label="Contact layout">
                    <div className="left">
                        <div className="panel">
                            <div className="panelTitle">
                                <FiCheckCircle />
                                <span>What to include</span>
                            </div>

                            <div className="tips">
                                <div className="tip">
                                    <span className="dot" />
                                    <span>Context in 2-3 lines</span>
                                </div>
                                <div className="tip">
                                    <span className="dot" />
                                    <span>What outcome you want</span>
                                </div>
                                <div className="tip">
                                    <span className="dot" />
                                    <span>Timeline and constraints</span>
                                </div>
                                <div className="tip">
                                    <span className="dot" />
                                    <span>Who is executing and where</span>
                                </div>
                            </div>

                            <div className="note">
                                We prefer clear, small, testable proposals over
                                long decks.
                            </div>
                        </div>

                        <div className="cards" aria-label="Contact info">
                            {metaCards.map((c) => (
                                <div key={c.label} className="card">
                                    <div className="cIcon">{c.icon}</div>
                                    <div className="cBody">
                                        <div className="cLabel">{c.label}</div>
                                        <div className="cValue">{c.value}</div>
                                        <div className="cHint">{c.hint}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="right">
                        <form
                            className="form"
                            onSubmit={onSubmit}
                            aria-label="Contact form"
                        >
                            <div className="formHead">
                                <div className="formTitle">Send a message</div>
                                <div className="formSub">
                                    This is frontend-only for now. Toastify
                                    handles feedback. Backend can be wired
                                    later.
                                </div>
                            </div>

                            <div className="grid">
                                <label className="field">
                                    <span className="lbl">
                                        <FiUser />
                                        <span>Name</span>
                                    </span>
                                    <input
                                        value={form.name}
                                        onChange={onChange("name")}
                                        placeholder="Your name"
                                        autoComplete="name"
                                    />
                                </label>

                                <label className="field">
                                    <span className="lbl">
                                        <FiMail />
                                        <span>Email</span>
                                    </span>
                                    <input
                                        value={form.email}
                                        onChange={onChange("email")}
                                        placeholder="you@domain.com"
                                        autoComplete="email"
                                    />
                                </label>

                                <label className="field">
                                    <span className="lbl">
                                        <FiBriefcase />
                                        <span>Organization</span>
                                    </span>
                                    <input
                                        value={form.org}
                                        onChange={onChange("org")}
                                        placeholder="Optional"
                                        autoComplete="organization"
                                    />
                                </label>

                                <label className="field">
                                    <span className="lbl">
                                        <FiMessageSquare />
                                        <span>Topic</span>
                                    </span>
                                    <select
                                        value={form.topic}
                                        onChange={onChange("topic")}
                                    >
                                        <option value="Partnership">
                                            Partnership
                                        </option>
                                        <option value="Funding">Funding</option>
                                        <option value="Program support">
                                            Program support
                                        </option>
                                        <option value="Media / speaking">
                                            Media / speaking
                                        </option>
                                        <option value="Other">Other</option>
                                    </select>
                                </label>

                                <label className="field full">
                                    <span className="lbl">
                                        <FiMessageSquare />
                                        <span>Message</span>
                                    </span>
                                    <textarea
                                        value={form.message}
                                        onChange={onChange("message")}
                                        placeholder="Write a short overview (minimum 20 characters)."
                                        rows={8}
                                    />
                                </label>
                            </div>

                            <div className="actions">
                                <button
                                    type="submit"
                                    className="btn"
                                    disabled={isSubmitting}
                                    aria-disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="btnIcon spin">
                                                <FiLoader />
                                            </span>
                                            <span>Sending</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send</span>
                                            <FiArrowUpRight />
                                        </>
                                    )}
                                </button>

                                <div className="hint">
                                    By submitting, you agree to share this
                                    information for contact purposes.
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="footerNote" aria-label="Footer note">
                    <div className="fnCard">
                        <div className="fnTitle">Prefer email?</div>
                        <div className="fnText">
                            Write to{" "}
                            <span className="strong">
                                hello@neeticollective.org
                            </span>{" "}
                            with a short summary and a link to any relevant
                            document.
                        </div>
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
}
