// pages/home/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        background: var(--color-bg);

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 34px 20px 70px;
        }

        /* Reusable image frame + loader (no blank space) */
        .imgFrame {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
            letter-spacing: 0.2px;
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

        .btn svg {
            font-size: 1.05rem;
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

        /* Section head */
        .sectionHead {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 14px;
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
            max-width: 70ch;
        }

        .sectionCtaRow {
            margin-top: 16px;
            display: flex;
            justify-content: center;
        }

        /* HERO */
        .hero {
            display: grid;
            grid-template-columns: 1.05fr 0.95fr;
            gap: 18px;
            align-items: stretch;
            padding: 16px 0 26px;
            border-bottom: 1px solid var(--color-border);
        }

        .heroLeft {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .kicker {
            display: inline-flex;
            align-self: flex-start;
            padding: 7px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-muted);
            font-size: 0.9rem;
        }

        .heroTitle {
            font-family: var(--font-heading);
            font-size: clamp(1.8rem, 3.2vw, 2.9rem);
            letter-spacing: 0.9px;
            line-height: 1.08;
            color: var(--color-text);
            text-transform: uppercase;
        }

        .heroText {
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.55;
            max-width: 72ch;
        }

        .heroCtas {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 4px;
        }

        .heroStats {
            margin-top: 6px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }

        .stat {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-bg);
            padding: 12px;
            text-align: left;
        }

        .statNum {
            font-family: var(--font-heading);
            font-size: 1.35rem;
            letter-spacing: 0.6px;
            color: var(--color-text);
        }

        .statLabel {
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 0.92rem;
        }

        .heroRight {
            display: grid;
            grid-template-rows: 1fr auto;
            gap: 10px;
        }

        .heroFrame {
            height: 420px;
        }

        .heroCard {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 14px;
        }

        .heroCardTitle {
            font-family: var(--font-heading);
            text-transform: uppercase;
            letter-spacing: 0.8px;
            font-size: 1rem;
            color: var(--color-text);
        }

        .heroCardText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.96rem;
            line-height: 1.5;
        }

        /* VALUES */
        .values {
            padding: 26px 0;
        }

        .valueGrid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
            margin-top: 14px;
        }

        .valueCard {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 14px;
            min-height: 150px;
        }

        .valueIcon {
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

        .valueIcon svg {
            font-size: 1.15rem;
        }

        .valueTitle {
            margin-top: 10px;
            font-family: var(--font-heading);
            letter-spacing: 0.7px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
        }

        .valueText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.5;
        }

        /* WORK */
        .work {
            padding: 10px 0 26px;
            border-top: 1px solid var(--color-border);
        }

        .workGrid {
            margin-top: 14px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .workCard {
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            overflow: hidden;
            text-decoration: none;
            transition: transform 160ms ease;
            min-height: 430px;
        }

        .workCard:hover {
            transform: translateY(-2px);
            text-decoration: none;
        }

        .workMedia {
            height: 190px;
            padding: 12px;
        }

        .workFrame {
            height: 100%;
            border-radius: 14px;
        }

        .workBody {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .workTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .workIcon {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text);
        }

        .workIcon svg {
            font-size: 1.1rem;
        }

        .workTag {
            font-size: 0.88rem;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 6px 10px;
            border-radius: 999px;
            white-space: nowrap;
        }

        .workTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.7px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.1rem;
            line-height: 1.1;
        }

        .workText {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        .workLink {
            margin-top: 2px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        /* JOURNAL */
        .journal {
            padding: 26px 0;
            border-top: 1px solid var(--color-border);
        }

        .journalGrid {
            margin-top: 14px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .jCard {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;
            text-decoration: none;
            transition: transform 160ms ease;
            min-height: 360px;
            display: flex;
            flex-direction: column;
        }

        .jCard:hover {
            transform: translateY(-2px);
            text-decoration: none;
        }

        .jFrame {
            height: 180px;
        }

        .jBody {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .jMeta {
            font-size: 0.88rem;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 6px 10px;
            border-radius: 999px;
            display: inline-flex;
            align-self: flex-start;
        }

        .jTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.7px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.05rem;
            line-height: 1.15;
        }

        .jLink {
            margin-top: 2px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        /* INITIATIVES */
        .initiatives {
            padding: 26px 0 10px;
            border-top: 1px solid var(--color-border);
        }

        .initGrid {
            margin-top: 14px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .initCard {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 14px;
            text-decoration: none;
            transition: transform 160ms ease;
            min-height: 170px;
        }

        .initCard:hover {
            transform: translateY(-2px);
            text-decoration: none;
        }

        .initIcon {
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

        .initIcon svg {
            font-size: 1.15rem;
        }

        .initTitle {
            margin-top: 10px;
            font-family: var(--font-heading);
            letter-spacing: 0.7px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1rem;
        }

        .initText {
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.5;
        }

        .initLink {
            margin-top: 10px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        /* FINAL */
        .final {
            margin-top: 26px;
            border-top: 1px solid var(--color-border);
            padding-top: 26px;
        }

        .finalInner {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            text-align: center;
        }

        .finalTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: 1.25rem;
            color: var(--color-text);
        }

        .finalText {
            margin: 10px auto 0;
            max-width: 70ch;
            color: var(--color-text-muted);
            font-size: 0.98rem;
            line-height: 1.55;
        }

        .finalCtas {
            margin-top: 14px;
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 1100px) {
            .hero {
                grid-template-columns: 1fr;
            }

            .heroFrame {
                height: 360px;
            }
        }

        @media (max-width: 980px) {
            .valueGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .workGrid,
            .journalGrid,
            .initGrid {
                grid-template-columns: 1fr;
            }

            .workMedia {
                height: 210px;
            }
        }

        @media (max-width: 560px) {
            .container {
                padding: 24px 16px 60px;
            }

            .heroStats {
                grid-template-columns: 1fr;
            }

            .btn {
                width: 100%;
                max-width: 420px;
            }
        }
    `,
};
