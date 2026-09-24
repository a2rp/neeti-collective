import { createElement, useEffect, useRef, useState } from "react";
import { FiFileText, FiGrid, FiInfo, FiLayers, FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";

const navItems = [
    { to: "/work", label: "Work", icon: FiGrid },
    { to: "/about", label: "About", icon: FiInfo },
    { to: "/journal", label: "Journal", icon: FiFileText },
    { to: "/initiatives", label: "Initiatives", icon: FiLayers },
];

const AppHeader = ({ brand = "NeetiCollective" }) => {
    const location = useLocation();
    const headerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => setIsOpen(false), [location.pathname]);
    useEffect(() => {
        const onKey = (event) => { if (event.key === "Escape") setIsOpen(false); };
        const onOutsideClick = (event) => { if (isOpen && headerRef.current && !headerRef.current.contains(event.target)) setIsOpen(false); };
        window.addEventListener("keydown", onKey);
        document.addEventListener("pointerdown", onOutsideClick);
        return () => { window.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onOutsideClick); };
    }, [isOpen]);
    return <Styled.Wrapper ref={headerRef}>
        <div className="inner">
            <NavLink to="/" className="brandLink" aria-label={`${brand} home`}>
                <img className="logo" src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                <span className="brandWrap"><span className="brand">{brand}</span><span className="tag">Impact Collective</span></span>
            </NavLink>
            <nav className="navDesktop" aria-label="Primary">{navItems.map(({ to, label }) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? "navItem active" : "navItem"}>{label}</NavLink>)}</nav>
            <button type="button" className="menuBtn" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>{isOpen ? <FiX size={18} /> : <FiMenu size={18} />}</button>
        </div>
        <div className={isOpen ? "mobilePanel open" : "mobilePanel"}><nav className="mobileNav" aria-label="Mobile primary navigation">{navItems.map(({ to, label, icon }) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? "mItem active" : "mItem"}>{createElement(icon)}<span>{label}</span></NavLink>)}</nav></div>
    </Styled.Wrapper>;
};

export default AppHeader;