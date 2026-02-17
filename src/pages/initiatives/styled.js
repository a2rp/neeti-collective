// src/pages/initiatives/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        background: var(--color-bg);

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 46px 20px 80px;
        }

        /* Image + loader */
        .imgFrame {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .imgLoader,
        .imgError {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
        }

        .imgLoader svg {
            font-size: 1.1rem;
            animation: spin 900ms linear infinite;
        }

        .imgLoaderText {
            font-size: 0.92rem;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        /* Hero */
        .hero {
            max-width: 980px;
            padding-bottom: 18px;
            border-bottom: 1px solid var(--color-border);
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
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: clamp(2rem, 4vw, 3rem);
            line-height: 1.08;
            color: var(--color-text);
            margin-bottom: 12px;
        }

        .sub {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.65;
            max-width: 78ch;
        }

        .controls {
            margin-top: 18px;
            display: grid;
            gap: 12px;
        }

        .search {
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 10px 12px;
        }

        .search svg {
            color: var(--color-text-muted);
            font-size: 1.05rem;
        }

        .search input {
            border: none;
            outline: none;
            width: 100%;
            background: transparent;
            color: var(--color-text);
            padding: 6px 0;
            font-size: 0.95rem;
        }

        .clearBtn {
            border: none;
            background: transparent;
            color: var(--color-text-muted);
            width: 34px;
            height: 34px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background 160ms ease;
        }

        .clearBtn:hover {
            background: var(--color-bg);
        }

        .tags {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .tagBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text);
            padding: 10px 12px;
            font-size: 0.92rem;
            cursor: pointer;
            transition:
                transform 160ms ease,
                background 160ms ease;
        }

        .tagBtn:hover {
            transform: translateY(-1px);
            background: var(--color-primary-soft);
        }

        .tagBtn.active {
            border-color: var(--color-text);
            background: var(--color-bg);
        }

        .tagBtn svg {
            color: var(--color-text-muted);
        }

        .count {
            color: var(--color-text-muted);
            font-size: 0.95rem;
        }

        .countNum {
            color: var(--color-text);
            font-weight: 800;
        }

        /* Cards */
        .grid {
            padding-top: 18px;
            display: grid;
            grid-template-columns: 1fr;
            gap: 14px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            overflow: hidden;
            display: grid;
            grid-template-columns: 460px 1fr;
            gap: 0;
        }

        .mediaWrap {
            width: 100%;
            height: 100%;
            min-height: 300px;
        }

        .media {
            height: 100%;
            border-radius: 0;
            border: none;
            border-right: 1px solid var(--color-border);
        }

        .body {
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .meta {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .pill {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            font-size: 0.9rem;
            padding: 7px 10px;
            border-radius: 999px;
        }

        .cardTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 1.35rem;
            line-height: 1.12;
            color: var(--color-text);
        }

        .cardSub {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.6;
            max-width: 88ch;
        }

        .cardSum {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.65;
            max-width: 92ch;
        }

        .hl {
            margin-top: 2px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .hlItem {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 99px;
            background: var(--color-text);
            opacity: 0.55;
        }

        .actions {
            margin-top: auto;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            padding-top: 10px;
            border-top: 1px dashed var(--color-border);
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 12px 16px;
            border-radius: 999px;
            border: 1px solid var(--color-text);
            text-decoration: none;
            font-size: 0.95rem;
            transition:
                transform 160ms ease,
                opacity 160ms ease,
                background 160ms ease;
            white-space: nowrap;
        }

        .btn:hover {
            transform: translateY(-1px);
            text-decoration: none;
        }

        .btn:active {
            transform: translateY(0);
        }

        .primary {
            background: #0b0b0b;
            color: #ffffff;
            border-color: #0b0b0b;
        }

        .primary:hover {
            opacity: 0.92;
        }

        .ghost {
            background: transparent;
            color: var(--color-text);
            opacity: 0.9;
        }

        .ghost:hover {
            opacity: 1;
            background: var(--color-primary-soft);
        }

        /* CTA */
        .cta {
            padding-top: 18px;
        }

        .ctaCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
            text-align: center;
        }

        .ctaTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: 1.4rem;
            color: var(--color-text);
        }

        .ctaText {
            margin-top: 8px;
            color: var(--color-text-muted);
            font-size: 0.98rem;
            line-height: 1.6;
        }

        .ctaActions {
            margin-top: 12px;
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 980px) {
            .card {
                grid-template-columns: 1fr;
            }

            .mediaWrap {
                min-height: 260px;
            }

            .media {
                border-right: none;
                border-bottom: 1px solid var(--color-border);
            }
        }

        @media (max-width: 560px) {
            .container {
                padding: 34px 16px 70px;
            }

            .btn {
                width: 100%;
                max-width: 420px;
            }
        }
    `,
};
