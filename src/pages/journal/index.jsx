import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import { FiArrowUpRight, FiLoader } from "react-icons/fi";

function ImageWithLoader({ src, alt }) {
    const [status, setStatus] = useState("loading");

    return (
        <div className="imgFrame">
            {status === "loading" && (
                <div className="imgLoader">
                    <FiLoader />
                </div>
            )}

            <img
                src={src}
                alt={alt}
                className="img"
                loading="lazy"
                onLoad={() => setStatus("loaded")}
                onError={() => setStatus("error")}
            />
        </div>
    );
}

export default function Journal() {
    const posts = useMemo(
        () => [
            {
                id: 1,
                title: "Execution Over Optics",
                excerpt:
                    "Why institutional credibility is built through delivery, not noise.",
                image: "https://picsum.photos/seed/j1/1200/800",
                tag: "Strategy",
                date: "Mar 2026",
            },
            {
                id: 2,
                title: "Designing for Long Timelines",
                excerpt:
                    "Short cycles create headlines. Long cycles create impact.",
                image: "https://picsum.photos/seed/j2/1200/800",
                tag: "Systems",
                date: "Feb 2026",
            },
            {
                id: 3,
                title: "Funding with Discipline",
                excerpt:
                    "Capital should reduce friction, not create distortion.",
                image: "https://picsum.photos/seed/j3/1200/800",
                tag: "Capital",
                date: "Jan 2026",
            },
        ],
        [],
    );

    return (
        <Styled.Wrapper>
            <div className="container">
                <section className="hero">
                    <div className="kicker">Journal</div>
                    <h1 className="title">
                        Ideas, field notes, and internal thinking.
                    </h1>
                    <p className="sub">
                        We write about systems, execution, capital discipline,
                        and what actually moves outcomes in real environments.
                    </p>
                </section>

                <section className="grid">
                    {posts.map((post) => (
                        <article key={post.id} className="card">
                            <ImageWithLoader
                                src={post.image}
                                alt={post.title}
                            />

                            <div className="content">
                                <div className="meta">
                                    <span className="tag">{post.tag}</span>
                                    <span className="date">{post.date}</span>
                                </div>

                                <h2 className="cardTitle">{post.title}</h2>

                                <p className="excerpt">{post.excerpt}</p>

                                <a href="#" className="readMore">
                                    Read <FiArrowUpRight />
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </Styled.Wrapper>
    );
}
