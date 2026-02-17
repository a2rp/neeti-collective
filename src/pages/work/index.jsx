import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Styled } from "./styled";

import {
    FiSearch,
    FiArrowUpRight,
    FiGrid,
    FiFeather,
    FiLayers,
    FiTrendingUp,
    FiMapPin,
    FiShield,
    FiLoader,
    FiFilter,
} from "react-icons/fi";

function ImageWithLoader({ src, alt }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className="imgFrame">
            {!isLoaded && !hasError ? (
                <div className="imgLoader" aria-label="Loading image">
                    <FiLoader />
                    <span className="imgLoaderText">Loading</span>
                </div>
            ) : null}

            {hasError ? (
                <div className="imgError" aria-label="Image failed to load">
                    Image unavailable
                </div>
            ) : (
                <img
                    className="img"
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                    style={{ display: isLoaded ? "block" : "none" }}
                />
            )}
        </div>
    );
}

export default function Work() {
    const [q, setQ] = useState("");
    const [activeTag, setActiveTag] = useState("All");

    const workItems = useMemo(
        () => [
            {
                slug: "education-systems",
                title: "Education Systems",
                tag: "Education",
                location: "Multi-state",
                icon: <FiFeather />,
                desc: "Foundational learning, teacher enablement, and practical school operations support.",
                img: "https://picsum.photos/seed/neeti-work-edu/1200/800",
            },
            {
                slug: "climate-resilience",
                title: "Climate Resilience",
                tag: "Climate",
                location: "Heat and water",
                icon: <FiLayers />,
                desc: "Locally grounded resilience across heat, water stress, and livelihoods.",
                img: "https://picsum.photos/seed/neeti-work-climate/1200/800",
            },
            {
                slug: "economic-mobility",
                title: "Economic Mobility",
                tag: "Mobility",
                location: "Jobs and skills",
                icon: <FiTrendingUp />,
                desc: "Skills-to-jobs pathways with measurable outcomes and repeatable playbooks.",
                img: "https://picsum.photos/seed/neeti-work-mobility/1200/800",
            },
            {
                slug: "district-partnerships",
                title: "District Partnerships",
                tag: "Public Systems",
                location: "District level",
                icon: <FiMapPin />,
                desc: "Long-term partnerships focused on execution capacity, not short-term pilots.",
                img: "https://picsum.photos/seed/neeti-work-district/1200/800",
            },
            {
                slug: "governance-trust",
                title: "Governance and Trust",
                tag: "Institutions",
                location: "Civic trust",
                icon: <FiShield />,
                desc: "Process design, transparency, and trust-building where systems meet citizens.",
                img: "https://picsum.photos/seed/neeti-work-trust/1200/800",
            },
            {
                slug: "community-labs",
                title: "Community Labs",
                tag: "Labs",
                location: "Pilot to scale",
                icon: <FiGrid />,
                desc: "Pilot-first programs with tight feedback loops, fast iteration, and field rigor.",
                img: "https://picsum.photos/seed/neeti-work-labs/1200/800",
            },
        ],
        [],
    );

    const tags = useMemo(() => {
        const uniq = Array.from(new Set(workItems.map((x) => x.tag)));
        return ["All", ...uniq];
    }, [workItems]);

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase();

        return workItems
            .filter((x) => (activeTag === "All" ? true : x.tag === activeTag))
            .filter((x) => {
                if (!query) return true;
                const hay =
                    `${x.title} ${x.tag} ${x.location} ${x.desc}`.toLowerCase();
                return hay.includes(query);
            });
    }, [workItems, q, activeTag]);

    return (
        <Styled.Wrapper>
            <div className="container">
                <div className="top">
                    <div className="head">
                        <div className="kicker">Work</div>
                        <h1 className="title">
                            Focused work, built for the real world
                        </h1>
                        <p className="sub">
                            Explore thematic areas and initiatives. Each page is
                            a deep dive with goals, approach, partners, and
                            outcomes.
                        </p>
                    </div>

                    <div className="controls" aria-label="Work filters">
                        <div className="searchBox">
                            <span className="searchIcon" aria-hidden="true">
                                <FiSearch />
                            </span>
                            <input
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Search work..."
                                aria-label="Search work"
                            />
                        </div>

                        <div className="tagsRow" aria-label="Tags">
                            <span className="tagLabel">
                                <FiFilter />
                                <span>Filter</span>
                            </span>

                            <div className="tags">
                                {tags.map((t) => (
                                    <button
                                        key={t}
                                        type="button"
                                        className={
                                            t === activeTag
                                                ? "tagBtn active"
                                                : "tagBtn"
                                        }
                                        onClick={() => setActiveTag(t)}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid" aria-label="Work list">
                    {filtered.map((x) => (
                        <Link
                            key={x.slug}
                            to={`/work/${x.slug}`}
                            className="card"
                            aria-label={x.title}
                        >
                            <div className="media">
                                <ImageWithLoader src={x.img} alt={x.title} />
                            </div>

                            <div className="body">
                                <div className="meta">
                                    <div className="icon">{x.icon}</div>
                                    <div className="pill">{x.tag}</div>
                                </div>

                                <div className="cardTitle">{x.title}</div>
                                <div className="cardText">{x.desc}</div>

                                <div className="cardBottom">
                                    <div className="loc">
                                        <FiMapPin />
                                        <span>{x.location}</span>
                                    </div>

                                    <div className="go">
                                        View <FiArrowUpRight />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filtered.length === 0 ? (
                    <div className="empty" role="status">
                        <div className="emptyTitle">No results</div>
                        <div className="emptyText">
                            Try a different keyword or reset the filter.
                        </div>

                        <div className="emptyActions">
                            <button
                                type="button"
                                className="btnGhost"
                                onClick={() => setQ("")}
                            >
                                Clear search
                            </button>
                            <button
                                type="button"
                                className="btnGhost"
                                onClick={() => setActiveTag("All")}
                            >
                                Reset filter
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        </Styled.Wrapper>
    );
}
