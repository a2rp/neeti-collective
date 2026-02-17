// src/pages/about/styled.js
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
            background: var(--color-surface);
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
            gap: 12px;
        }

        .kicker {
            display: inline-flex;
            padding: 7px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-muted);
            font-size: 0.9rem;
            width: fit-content;
        }

        .title {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: clamp(1.7rem, 3.2vw, 2.8rem);
            line-height: 1.08;
            color: var(--color-text);
        }

        .sub {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.55;
            max-width: 78ch;
        }

        .ctaRow {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 4px;
        }

        .miniMeta {
            margin-top: 6px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
        }

        .miniItem {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        .miniItem svg {
            color: var(--color-text);
            font-size: 1.05rem;
        }

        .heroRight {
            display: grid;
            grid-template-rows: 1fr auto;
            gap: 10px;
        }

        .heroMedia {
            width: 100%;
            height: 430px;
        }

        .heroFrame {
            height: 100%;
        }

        .note {
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

        /* Sections */
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
            line-height: 1.45;
            max-width: 80ch;
        }

        /* Principles */
        .grid4 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
            min-height: 160px;
        }

        .icon {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text);
        }

        .icon svg {
            font-size: 1.15rem;
        }

        .cardTitle {
            margin-top: 10px;
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
        }

        .cardText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        /* FAQ */
        .faq {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .faqItem {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 12px 14px;
        }

        .faqQ {
            cursor: pointer;
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 1rem;
            color: var(--color-text);
            list-style: none;
        }

        .faqQ::-webkit-details-marker {
            display: none;
        }

        .faqA {
            margin-top: 10px;
            color: var(--color-text-muted);
            font-size: 0.96rem;
            line-height: 1.6;
        }

        /* Contact */
        .contactWrap {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 12px;
            align-items: start;
        }

        .form {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .row2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .field {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .label {
            font-size: 0.92rem;
            color: var(--color-text);
        }

        .form input,
        .form textarea {
            width: 100%;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            border-radius: 12px;
            padding: 12px 12px;
            font-size: 0.95rem;
            outline: none;
        }

        .form input:focus,
        .form textarea:focus {
            border-color: var(--color-primary);
        }

        .formActions {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            flex-wrap: wrap;
        }

        .hint {
            color: var(--color-text-muted);
            font-size: 0.92rem;
        }

        .side {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
        }

        .sideTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
        }

        .sideList {
            margin-top: 10px;
            padding-left: 18px;
            color: var(--color-text-muted);
            line-height: 1.7;
            font-size: 0.95rem;
        }

        .sideBox {
            margin-top: 14px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .sideBoxTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
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
        }

        .sideLink:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
            text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 1100px) {
            .hero {
                grid-template-columns: 1fr;
            }

            .heroMedia {
                height: 360px;
            }
        }

        @media (max-width: 980px) {
            .grid4 {
                grid-template-columns: repeat(2, 1fr);
            }

            .contactWrap {
                grid-template-columns: 1fr;
            }

            .row2 {
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
