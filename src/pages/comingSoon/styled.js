// src/pages/comingSoon/styled.js
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

        .hero {
            max-width: 980px;
            padding-bottom: 18px;
            border-bottom: 1px solid var(--color-border);
        }

        .kicker {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
        }

        .title {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: clamp(2rem, 4vw, 3rem);
            line-height: 1.08;
            color: var(--color-text);
            margin-bottom: 10px;
        }

        .sub {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.65;
            max-width: 78ch;
        }

        .ctaRow {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
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

        .grid {
            padding-top: 18px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
            align-items: start;
        }

        .left {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
        }

        .cardTitle {
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

        .cardText {
            color: var(--color-text-muted);
            font-size: 0.98rem;
            line-height: 1.65;
            margin-bottom: 12px;
        }

        .form {
            display: grid;
            gap: 10px;
        }

        .field {
            display: grid;
            gap: 8px;
        }

        .lbl {
            font-size: 0.92rem;
            color: var(--color-text);
            font-weight: 700;
        }

        input {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-bg);
            color: var(--color-text);
            padding: 12px 12px;
            font-size: 0.95rem;
            outline: none;
        }

        .submit {
            border: none;
            border-radius: 999px;
            background: #0b0b0b;
            color: #ffffff;
            padding: 14px 16px;
            font-family: var(--font-heading);
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 1rem;
            cursor: pointer;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            transition:
                opacity 160ms ease,
                transform 160ms ease;
        }

        .submit:hover {
            opacity: 0.92;
            transform: translateY(-1px);
        }

        .submit:active {
            transform: translateY(0);
        }

        .submit:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
        }

        .spin svg {
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

        .miniNote {
            color: var(--color-text-muted);
            font-size: 0.92rem;
            line-height: 1.55;
        }

        .strong {
            color: var(--color-text);
            font-weight: 800;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .li {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text);
            font-size: 0.98rem;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 99px;
            background: var(--color-text);
            opacity: 0.55;
        }

        .right {
            position: sticky;
            top: 86px;
        }

        .mediaCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            overflow: hidden;
        }

        .mediaTop {
            padding: 14px 16px;
            border-bottom: 1px solid var(--color-border);
        }

        .mediaTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.05rem;
        }

        .mediaSub {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
        }

        /* Image wrapper + loader */
        .imgFrame {
            position: relative;
            width: 100%;
            height: 420px;
            background: var(--color-bg);
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

        .mediaBottom {
            padding: 14px 16px;
            border-top: 1px solid var(--color-border);
        }

        .mbTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.05rem;
        }

        .mbText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        @media (max-width: 980px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .right {
                position: static;
                top: auto;
            }

            .imgFrame {
                height: 320px;
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
