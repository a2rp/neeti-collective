// src/pages/journalDetail/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        background: var(--color-bg);

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 34px 20px 70px;
        }

        /* Image frame + loader */
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

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        /* Top bar */
        .topBar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
            flex-wrap: wrap;
        }

        .back {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            color: var(--color-text);
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 10px 12px;
            transition:
                transform 160ms ease,
                background 160ms ease;
        }

        .back:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
            text-decoration: none;
        }

        .metaPills {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 10px 12px;
            color: var(--color-text-muted);
            font-size: 0.92rem;
            white-space: nowrap;
        }

        .pill svg {
            color: var(--color-text);
        }

        /* Hero */
        .hero {
            display: grid;
            grid-template-columns: 1.05fr 0.95fr;
            gap: 14px;
            align-items: stretch;
            padding: 14px 0 22px;
            border-bottom: 1px solid var(--color-border);
        }

        .heroLeft {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .title {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: clamp(1.7rem, 3.2vw, 2.8rem);
            line-height: 1.08;
            color: var(--color-text);
        }

        .subtitle {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.6;
            max-width: 78ch;
        }

        .author {
            margin-top: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
        }

        .avatar {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-family: var(--font-heading);
            letter-spacing: 0.6px;
        }

        .authorName {
            color: var(--color-text);
            font-size: 0.95rem;
            font-weight: 700;
        }

        .authorRole {
            color: var(--color-text-muted);
            font-size: 0.92rem;
        }

        .heroRight {
            display: grid;
            grid-template-rows: 1fr auto;
            gap: 10px;
        }

        .heroMediaWrap {
            width: 100%;
            height: 420px;
        }

        .heroFrame {
            height: 100%;
        }

        .heroNote {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
        }

        .noteTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 1rem;
            color: var(--color-text);
        }

        .noteText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.96rem;
            line-height: 1.55;
        }

        /* Article + sidebar */
        .article {
            padding-top: 18px;
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 12px;
            align-items: start;
        }

        .articleInner {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
        }

        .p {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.75;
            margin-bottom: 12px;
        }

        .h2 {
            margin: 18px 0 10px;
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: 1.2rem;
            color: var(--color-text);
        }

        .ul {
            margin: 10px 0 14px;
            padding-left: 18px;
            color: var(--color-text-muted);
            line-height: 1.8;
        }

        .quote {
            margin: 16px 0;
            padding: 14px;
            border-left: 3px solid var(--color-text);
            background: var(--color-bg);
            border-radius: 12px;
            color: var(--color-text);
            font-size: 1rem;
            line-height: 1.7;
        }

        .side {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
            position: sticky;
            top: 86px;
        }

        .sideTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
            margin-bottom: 10px;
        }

        .sideLink {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            text-decoration: none;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            padding: 10px 12px;
            border-radius: 12px;
            transition:
                transform 160ms ease,
                background 160ms ease;
            margin-bottom: 10px;
        }

        .sideLink:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
            text-decoration: none;
        }

        .sideBox {
            margin-top: 10px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
        }

        .sideBoxTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
        }

        .sideBoxText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
            margin-bottom: 10px;
        }

        /* Related */
        .section {
            padding: 22px 0 0;
        }

        .sectionHead {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 12px;
        }

        .sectionTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: 1.2rem;
            color: var(--color-text);
        }

        .sectionSub {
            color: var(--color-text-muted);
            font-size: 0.98rem;
        }

        .relGrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .relCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            overflow: hidden;
            text-decoration: none;
            color: var(--color-text);
            transition: transform 160ms ease;
            display: flex;
            flex-direction: column;
            min-height: 330px;
        }

        .relCard:hover {
            transform: translateY(-2px);
            text-decoration: none;
        }

        .relMedia {
            padding: 12px;
            height: 170px;
        }

        .relFrame {
            height: 100%;
        }

        .relBody {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .relMeta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 0.9rem;
        }

        .relTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 1.05rem;
            line-height: 1.15;
            color: var(--color-text);
        }

        .relText {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        .relGo {
            margin-top: auto;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        /* Not found */
        .notFound {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 18px;
            text-align: center;
        }

        .nfTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: 1.3rem;
            color: var(--color-text);
        }

        .nfText {
            margin-top: 8px;
            color: var(--color-text-muted);
        }

        .nfBtn {
            margin-top: 12px;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            padding: 10px 12px;
            border-radius: 999px;
            text-decoration: none;
            transition:
                transform 160ms ease,
                background 160ms ease;
        }

        .nfBtn:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 1100px) {
            .hero {
                grid-template-columns: 1fr;
            }

            .heroMediaWrap {
                height: 360px;
            }

            .article {
                grid-template-columns: 1fr;
            }

            .side {
                position: static;
                top: auto;
            }
        }

        @media (max-width: 980px) {
            .relGrid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 560px) {
            .container {
                padding: 24px 16px 60px;
            }
        }
    `,
};
