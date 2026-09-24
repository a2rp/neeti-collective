import { createElement, useMemo, useState } from "react";
import { FaCodepen } from "react-icons/fa";
import { FiArrowRight, FiCoffee, FiFacebook, FiGithub, FiGlobe, FiHeart, FiLinkedin, FiMail, FiStar, FiYoutube } from "react-icons/fi";
import { toast } from "react-toastify";
import { Styled } from "./styled";

const links = [
    ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FiGithub],
    ["CodePen", "https://codepen.io/ash1198", FaCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FiLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FiFacebook],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FiYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
];
const support = [
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://patreon.com/a2rp", FiStar],
];
const legalLinks = [
    ["Terms", "/terms"], ["Privacy", "/privacy"], ["Submission Policy", "/submission-policy"], ["Fraud Alerts", "/fraud-alerts"], ["Fellowships", "/fellowships"], ["Contact", "/contact"],
];

function IconLinks({ items }) {
    return <div className="social">{items.map(([label, href, icon]) => <a key={label} className="socialIcon" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} title={label}>{createElement(icon)}</a>)}</div>;
}

const AppFooter = ({ brand = "NeetiCollective" }) => {
    const year = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const legal = useMemo(() => legalLinks, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        const value = email.trim();
        if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) { toast.error("Please enter a valid email address."); return; }
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 650));
        toast.success("You are subscribed. Updates will arrive in your inbox.");
        setEmail("");
        setIsSubmitting(false);
    };
    return <Styled.Wrapper><div className="inner">
        <div className="stay"><div className="stayTitle">Stay up to date</div><div className="staySub">Stay informed with the latest from us.</div><form className="form" onSubmit={onSubmit}><label className="srOnly" htmlFor="newsletterEmail">Email</label><div className="pillForm"><input id="newsletterEmail" className="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email" autoComplete="email" disabled={isSubmitting} /><button className="btn" type="submit" disabled={isSubmitting}><span className="btnText">{isSubmitting ? "Signing..." : "Sign up"}</span><FiArrowRight /></button></div></form></div>
        <div className="mid"><div className="copy">Copyright &copy; {year} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></div><div className="legal" aria-label="Legal links">{legal.map(([label, href]) => <a key={label} className="legalLink" href={href}>{label}</a>)}</div><div className="socialGroups"><div><span className="groupTitle">Links</span><IconLinks items={links} /></div><div><span className="groupTitle">Support</span><IconLinks items={support} /></div></div></div>
        <div className="bigWord" aria-hidden="true">{brand}</div>
    </div></Styled.Wrapper>;
};

export default AppFooter;