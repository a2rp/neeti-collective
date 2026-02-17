import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        background: var(--color-bg);

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 60px 20px 80px;
        }

        .hero {
            max-width: 900px;
            margin-bottom: 40px;
        }

        .kicker {
            font-size: 0.9rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: var(--color-text-muted);
            margin-bottom: 12px;
        }

        .title {
            font-family: var(--font-heading);
            font-size: clamp(2rem, 4vw, 3rem);
            text-transform: uppercase;
            line-height: 1.1;
            margin-bottom: 16px;
        }

        .sub {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.6;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: var(--color-surface);
            transition: transform 200ms ease;
        }

        .card:hover {
            transform: translateY(-4px);
        }

        .imgFrame {
            position: relative;
            height: 240px;
            background: var(--color-surface);
            overflow: hidden;
        }

        .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .imgLoader {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .content {
            padding: 20px;
        }

        .meta {
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
            color: var(--color-text-muted);
            margin-bottom: 12px;
        }

        .tag {
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .cardTitle {
            font-family: var(--font-heading);
            font-size: 1.3rem;
            margin-bottom: 10px;
        }

        .excerpt {
            font-size: 0.95rem;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-bottom: 16px;
        }

        .readMore {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            color: var(--color-text);
        }

        .readMore:hover {
            text-decoration: underline;
        }
    `,
};
