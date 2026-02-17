// styled.js
import styled from "styled-components";

const HEADER_HEIGHT = "72px";

export const Styled = {
    Wrapper: styled.header`
        position: sticky;
        top: 0;
        z-index: 1000;

        width: 100%;
        height: ${HEADER_HEIGHT};

        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);

        .inner {
            max-width: var(--max-width);
            height: 100%;
            margin: 0 auto;
            padding: 0 20px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
        }

        .left {
            display: flex;
            align-items: center;
            min-width: 0;
        }

        .brandWrap {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .brandLink {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            color: var(--color-text);
            min-width: 0;
        }

        /* Minimal "collective mark" */
        .mark {
            width: 34px;
            height: 22px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .bar {
            width: 6px;
            border-radius: 999px;
            background: var(--color-primary);
        }

        .b1 {
            height: 22px;
        }

        .b2 {
            height: 14px;
            opacity: 0.85;
        }

        .brand {
            font-family: var(--font-heading);
            font-size: 1.55rem;
            letter-spacing: 0.9px;
            white-space: nowrap;
            line-height: 1;
        }

        .tag {
            font-size: 0.78rem;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-muted);
            white-space: nowrap;
        }

        /* Desktop nav (Emerson-like) */
        .navDesktop {
            display: flex;
            align-items: center;
            gap: 24px;
        }

        .navItem {
            display: inline-flex;
            align-items: center;

            padding: 6px 2px;
            border-radius: 0;

            color: var(--color-text);
            text-decoration: none;

            font-family: var(--font-heading);
            font-weight: 600;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 0.95rem;

            opacity: 0.78;

            transition: opacity 160ms ease;
        }

        .navItem:hover {
            opacity: 1;
        }

        .navItem.active {
            opacity: 1;
        }

        .label {
            line-height: 1;
        }

        /* Mobile */
        .right {
            display: none;
            align-items: center;
        }

        .menuBtn {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);

            display: inline-flex;
            align-items: center;
            justify-content: center;

            transition: background 160ms ease;

            appearance: none;
            cursor: pointer;
        }

        .menuBtn:hover {
            background: var(--color-surface);
        }

        .mobilePanel {
            position: absolute;
            top: ${HEADER_HEIGHT};
            left: 0;
            right: 0;

            border-bottom: 1px solid var(--color-border);
            background: var(--color-bg);

            transform: translateY(-8px);
            opacity: 0;
            pointer-events: none;

            transition:
                opacity 180ms ease,
                transform 180ms ease;
        }

        .mobilePanel.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
        }

        .mobileNav {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 12px 20px 16px;

            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }

        .mItem {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 12px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);

            text-decoration: none;
        }

        .mItem:hover {
            background: var(--color-surface);
        }

        .mItem.active {
            background: var(--color-primary-soft);
        }

        .mIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1.05rem;
            color: var(--color-text);
        }

        .mLabel {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 0.95rem;
            color: var(--color-text);
        }

        /* Breakpoints */
        @media (max-width: 900px) {
            .navDesktop {
                display: none;
            }

            .right {
                display: flex;
            }

            .tag {
                display: none;
            }
        }
    `,
};
