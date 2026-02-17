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

        /* Top section */
        .top {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 16px;
        }

        .head {
            text-align: left;
        }

        .kicker {
            display: inline-flex;
            padding: 7px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-muted);
            font-size: 0.9rem;
        }

        .title {
            margin-top: 12px;
            font-family: var(--font-heading);
            letter-spacing: 0.9px;
            text-transform: uppercase;
            font-size: clamp(1.7rem, 3.1vw, 2.7rem);
            line-height: 1.08;
            color: var(--color-text);
        }

        .sub {
            margin-top: 10px;
            color: var(--color-text-muted);
            font-size: 1rem;
            line-height: 1.55;
            max-width: 80ch;
        }

        /* Controls */
        .controls {
            margin-top: 14px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .searchBox {
            position: relative;
            width: 100%;
        }

        .searchIcon {
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--color-text-muted);
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .searchIcon svg {
            font-size: 1.05rem;
        }

        .searchBox input {
            width: 100%;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            border-radius: 12px;
            padding: 12px 12px 12px 38px;
            font-size: 0.95rem;
            outline: none;
        }

        .searchBox input:focus {
            border-color: var(--color-primary);
        }

        .tagsRow {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            flex-wrap: wrap;
        }

        .tagLabel {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-muted);
            font-size: 0.9rem;
            user-select: none;
        }

        .tagLabel svg {
            font-size: 1rem;
            color: var(--color-text);
        }

        .tags {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }

        .tagBtn {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            padding: 9px 12px;
            border-radius: 999px;
            font-size: 0.92rem;
            cursor: pointer;
            transition:
                transform 160ms ease,
                background 160ms ease,
                opacity 160ms ease;
        }

        .tagBtn:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
        }

        .tagBtn:active {
            transform: translateY(0);
        }

        .tagBtn.active {
            background: #0b0b0b;
            border-color: #0b0b0b;
            color: #ffffff;
        }

        /* Grid */
        .grid {
            margin-top: 14px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            overflow: hidden;
            text-decoration: none;
            color: var(--color-text);
            transition: transform 160ms ease;
            display: flex;
            flex-direction: column;
            min-height: 420px;
        }

        .card:hover {
            transform: translateY(-2px);
            text-decoration: none;
        }

        .media {
            padding: 12px;
            height: 190px;
        }

        /* Image frame + loader (no blank space) */
        .imgFrame {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 14px;
            border: 1px solid var(--color-border);
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

        .body {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .meta {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .icon svg {
            font-size: 1.1rem;
        }

        .pill {
            font-size: 0.88rem;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 6px 10px;
            border-radius: 999px;
            white-space: nowrap;
        }

        .cardTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.7px;
            text-transform: uppercase;
            font-size: 1.1rem;
            line-height: 1.1;
            color: var(--color-text);
        }

        .cardText {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.55;
        }

        .cardBottom {
            margin-top: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding-top: 4px;
        }

        .loc {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-muted);
            font-size: 0.92rem;
        }

        .loc svg {
            font-size: 1rem;
            color: var(--color-text);
        }

        .go {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text);
            font-size: 0.95rem;
        }

        /* Empty state */
        .empty {
            margin-top: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 18px;
            text-align: center;
        }

        .emptyTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: var(--color-text);
            font-size: 1.2rem;
        }

        .emptyText {
            margin-top: 8px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
        }

        .emptyActions {
            margin-top: 12px;
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .btnGhost {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);
            padding: 10px 12px;
            border-radius: 999px;
            font-size: 0.92rem;
            cursor: pointer;
            transition:
                transform 160ms ease,
                background 160ms ease;
        }

        .btnGhost:hover {
            background: var(--color-primary-soft);
            transform: translateY(-1px);
        }

        .btnGhost:active {
            transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 980px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .media {
                height: 210px;
            }
        }

        @media (max-width: 560px) {
            .container {
                padding: 24px 16px 60px;
            }
        }
    `,
};
