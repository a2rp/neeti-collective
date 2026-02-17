// AppHeader.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";

import {
    FiMenu,
    FiX,
    FiGrid,
    FiInfo,
    FiFileText,
    FiLayers,
} from "react-icons/fi";

const AppHeader = ({ brand = "NeetiCollective" }) => {
    const location = useLocation();
    const headerRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    // NeetiCollective nav (clean, editorial)
    const navItems = useMemo(
        () => [
            { to: "/work", label: "Work", icon: <FiGrid /> },
            { to: "/about", label: "About", icon: <FiInfo /> },
            { to: "/journal", label: "Journal", icon: <FiFileText /> },
            { to: "/initiatives", label: "Initiatives", icon: <FiLayers /> },
        ],
        [],
    );

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        const onOutsideClick = (e) => {
            if (!isOpen) return;
            const root = headerRef.current;
            if (!root) return;

            if (!root.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("pointerdown", onOutsideClick);
        return () =>
            document.removeEventListener("pointerdown", onOutsideClick);
    }, [isOpen]);

    return (
        <Styled.Wrapper ref={headerRef}>
            <div className="inner">
                <div className="left">
                    <div className="brandWrap">
                        <NavLink
                            to="/"
                            className="brandLink"
                            aria-label={`${brand} home`}
                        >
                            <span className="mark" aria-hidden="true">
                                <span className="bar b1" />
                                <span className="bar b2" />
                            </span>

                            <span className="brand">{brand}</span>
                        </NavLink>

                        <span className="tag">Impact Collective</span>
                    </div>
                </div>

                <nav className="navDesktop" aria-label="Primary">
                    {navItems.map((it) => (
                        <NavLink
                            key={it.to}
                            to={it.to}
                            className={({ isActive }) =>
                                isActive ? "navItem active" : "navItem"
                            }
                        >
                            <span className="label">{it.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="right">
                    <div
                        type="button"
                        className="menuBtn"
                        onClick={() => setIsOpen((s) => !s)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                    </div>
                </div>
            </div>

            <div className={isOpen ? "mobilePanel open" : "mobilePanel"}>
                <div
                    className="mobileNav"
                    aria-label="Mobile primary navigation"
                >
                    {navItems.map((it) => (
                        <NavLink
                            key={it.to}
                            to={it.to}
                            className={({ isActive }) =>
                                isActive ? "mItem active" : "mItem"
                            }
                        >
                            <span className="mIcon">{it.icon}</span>
                            <span className="mLabel">{it.label}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AppHeader;
