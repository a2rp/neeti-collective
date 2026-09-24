import styled from "styled-components";

export const Styled = {
    Button: styled.button`
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 1200;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        color: var(--color-text);
        background: var(--color-bg);
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: opacity 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
        &.show { opacity: 1; pointer-events: auto; }
        &:hover { border-color: var(--color-primary); box-shadow: 0 0 16px rgba(15,61,46,.18); }
        @media (max-width: 720px) { right: 16px; bottom: 16px; }
    `,
};