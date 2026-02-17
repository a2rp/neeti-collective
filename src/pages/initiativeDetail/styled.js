// src/pages/initiativeDetail/styled.js
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

        /* Buttons */
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

        .kicker {
            display: inline-flex;
            width: fit-content;
            padding: 7px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-muted);
            font-size: 0.9rem;
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
        }

        .summary {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.65;
        }

        .hl {
            margin-top: 6px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
        }

        .hlItem {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        .hlItem svg {
            color: var(--color-text);
        }

        .ctaRow {
            margin-top: 10px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
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

        .pillRow {
            margin-top: 10px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .miniPill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 8px 10px;
            color: var(--color-text-muted);
            font-size: 0.9rem;
        }

        .miniPill svg {
            color: var(--color-text);
        }

        /* Main content */
        .main {
            padding-top: 18px;
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 12px;
            align-items: start;
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .block {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
        }

        .blockTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
            margin-bottom: 10px;
        }

        .blockTitle svg {
            color: var(--color-text);
        }

        .ul {
            padding-left: 18px;
            color: var(--color-text-muted);
            line-height: 1.85;
            font-size: 0.98rem;
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .chip {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            font-size: 0.92rem;
            padding: 9px 12px;
            border-radius: 999px;
        }

        .timeline {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .tRow {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 12px;
            align-items: start;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 12px;
        }

        .tLabel {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        .tText {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.65;
        }

        /* Sidebar */
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

        .sideList {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .sideItem {
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

        .sideBox {
            margin-top: 12px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
        }

        .sideBoxTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
            margin-bottom: 10px;
        }

        .res {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .resLink {
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
        }

        .resLink:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
            text-decoration: none;
        }

        .resIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text);
        }

        .resTxt {
            flex: 1;
            color: var(--color-text);
            font-size: 0.95rem;
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
            min-height: 300px;
        }

        .relCard:hover {
            transform: translateY(-2px);
            text-decoration: none;
        }

        .relMedia {
            padding: 12px;
            height: 160px;
        }

        .relFrame {
            height: 100%;
            border-radius: 14px;
        }

        .relBody {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
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

            .main {
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

            .tRow {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 560px) {
            .container {
                padding: 24px 16px 60px;
            }

            .btn {
                width: 100%;
                max-width: 420px;
            }
        }
    `,
};
