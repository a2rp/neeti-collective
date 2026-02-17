import styled from "styled-components";

export const Styled = {
    Button: styled.button`
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 1200;

        width: 44px;
        height: 44px;
        border-radius: 14px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        border: 1px solid var(--color-border);
        background: var(--color-bg);
        color: var(--color-text);

        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transform: translateY(8px) scale(0.95);

        transition:
            opacity 160ms ease,
            transform 160ms ease,
            background 160ms ease,
            box-shadow 160ms ease;

        svg {
            font-size: 1.2rem;
        }

        &:hover {
            background: var(--color-primary-soft);
            transform: translateY(0) scale(1);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        &:active {
            transform: scale(0.96);
        }

        &.show {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0) scale(1);
        }

        @media (max-width: 720px) {
            right: 16px;
            bottom: 16px;
        }
    `,
};
