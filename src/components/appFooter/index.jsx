// AppFooter.jsx
import React, { useMemo, useState } from "react";
import {
    FiGithub,
    FiGlobe,
    FiLinkedin,
    FiFacebook,
    FiInstagram,
    FiYoutube,
    FiArrowRight,
} from "react-icons/fi";
import { toast } from "react-toastify";
import { Styled } from "./styled";

const AppFooter = ({ brand = "NeetiCollective" }) => {
    const year = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const legalLinks = useMemo(
        () => [
            { label: "Terms", href: "/terms" },
            { label: "Privacy", href: "/privacy" },
            { label: "Submission Policy", href: "/submission-policy" },
            { label: "Fraud Alerts", href: "/fraud-alerts" },
            { label: "Fellowships", href: "/fellowships" },
            { label: "Contact", href: "/contact" },
        ],
        [],
    );

    // Keep only real links active. Others can be added later.
    const socials = useMemo(
        () => [
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/aashishranjan",
                icon: <FiLinkedin />,
            },
            {
                label: "GitHub",
                href: "https://github.com/a2rp",
                icon: <FiGithub />,
            },
            {
                label: "Portfolio",
                href: "https://www.ashishranjan.net",
                icon: <FiGlobe />,
            },
            {
                label: "Facebook",
                href: "https://www.facebook.com/theash.ashish/",
                icon: <FiFacebook />,
            },

            // placeholders (disabled but still “functional” UX)
            {
                label: "Instagram",
                href: "",
                icon: <FiInstagram />,
                disabled: true,
            },
            { label: "YouTube", href: "", icon: <FiYoutube />, disabled: true },
        ],
        [],
    );

    const isValidEmail = (value) => {
        const v = String(value || "").trim();
        // simple & reliable for UI-level validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    };

    // For now, this is a mock.
    // Later replace with API call:
    // return api.post("/newsletter/subscribe", { email })
    const subscribeNewsletter = async (value) => {
        await new Promise((r) => setTimeout(r, 650));
        return { ok: true };
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const cleaned = email.trim();

        if (!cleaned) {
            toast.error("Please enter your email.");
            return;
        }

        if (!isValidEmail(cleaned)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        try {
            setIsSubmitting(true);

            const res = await subscribeNewsletter(cleaned);

            if (!res?.ok) {
                toast.error("Something went wrong. Please try again.");
                return;
            }

            toast.success(
                "You are subscribed. Updates will arrive in your inbox.",
            );
            setEmail("");
        } catch (err) {
            toast.error("Server error. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const onSocialClick = (e, s) => {
        if (s.disabled) {
            e.preventDefault();
            toast.info(`${s.label} will be added soon.`);
        }
    };

    return (
        <Styled.Wrapper>
            <div className="inner">
                <div className="stay">
                    <div className="stayTitle">Stay up to date</div>
                    <div className="staySub">
                        Stay informed with the latest from us.
                    </div>

                    <form className="form" onSubmit={onSubmit}>
                        <label className="srOnly" htmlFor="newsletterEmail">
                            Email
                        </label>

                        <div className="pillForm">
                            <input
                                id="newsletterEmail"
                                className="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                autoComplete="email"
                                disabled={isSubmitting}
                            />

                            <button
                                className="btn"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                <span className="btnText">
                                    {isSubmitting ? "Signing..." : "Sign up"}
                                </span>
                                <span className="btnIcon" aria-hidden="true">
                                    <FiArrowRight />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mid">
                    <div className="copy">
                        © {year} {brand}
                    </div>

                    <div className="legal" aria-label="Footer links">
                        {legalLinks.map((l) => (
                            <a
                                key={l.label}
                                className="legalLink"
                                href={l.href}
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>

                    <div className="social" aria-label="Social links">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                className={
                                    s.disabled
                                        ? "socialIcon disabled"
                                        : "socialIcon"
                                }
                                href={s.href || "#"}
                                target={s.disabled ? undefined : "_blank"}
                                rel={s.disabled ? undefined : "noreferrer"}
                                aria-label={s.label}
                                title={s.label}
                                onClick={(e) => onSocialClick(e, s)}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="bigWord" aria-hidden="true">
                    {brand}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AppFooter;
