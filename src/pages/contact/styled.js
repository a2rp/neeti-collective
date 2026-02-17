// src/pages/contact/styled.js
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

        /* Layout */
        .layout {
            padding-top: 18px;
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 14px;
            align-items: start;
        }

        .left {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .panel {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
        }

        .panelTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
            margin-bottom: 12px;
        }

        .panelTitle svg {
            color: var(--color-text);
        }

        .tips {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .tip {
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

        .note {
            margin-top: 12px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        .cards {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 14px;
            display: flex;
            gap: 12px;
            align-items: flex-start;
        }

        .cIcon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;
        }

        .cIcon svg {
            font-size: 1.15rem;
        }

        .cLabel {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 0.95rem;
            color: var(--color-text);
        }

        .cValue {
            margin-top: 4px;
            color: var(--color-text);
            font-size: 0.98rem;
            font-weight: 700;
        }

        .cHint {
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 0.92rem;
            line-height: 1.55;
        }

        /* Form */
        .form {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
        }

        .formHead {
            padding-bottom: 12px;
            border-bottom: 1px dashed var(--color-border);
            margin-bottom: 12px;
        }

        .formTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.2rem;
        }

        .formSub {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .field {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .field.full {
            grid-column: 1 / -1;
        }

        .lbl {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text);
            font-size: 0.92rem;
            font-weight: 700;
        }

        .lbl svg {
            color: var(--color-text-muted);
        }

        input,
        select,
        textarea {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-bg);
            color: var(--color-text);
            padding: 12px 12px;
            font-size: 0.95rem;
            outline: none;
        }

        textarea {
            resize: vertical;
            min-height: 160px;
        }

        /* Actions */
        .actions {
            margin-top: 12px;
            border-top: 1px dashed var(--color-border);
            padding-top: 12px;
            display: grid;
            gap: 10px;
        }

        .btn {
            width: 100%;
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

        .btn:hover {
            opacity: 0.92;
            transform: translateY(-1px);
        }

        .btn:active {
            transform: translateY(0);
        }

        .btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
        }

        .btnIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1.05rem;
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

        .hint {
            color: var(--color-text-muted);
            font-size: 0.92rem;
            line-height: 1.55;
        }

        /* Footer note */
        .footerNote {
            padding-top: 14px;
        }

        .fnCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
            text-align: center;
        }

        .fnTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.2rem;
        }

        .fnText {
            margin-top: 8px;
            color: var(--color-text-muted);
            font-size: 0.98rem;
            line-height: 1.65;
        }

        .strong {
            color: var(--color-text);
            font-weight: 800;
        }

        /* Responsive */
        @media (max-width: 980px) {
            .layout {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 720px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 560px) {
            .container {
                padding: 34px 16px 70px;
            }
        }
    `,
};
