import styled from "styled-components";

const HEADER_HEIGHT = "64px";

export const Styled = {
    Wrapper: styled.div`
        min-height: 100%;
        display: flex;
        flex-direction: column;
        background: var(--color-bg);
        color: var(--color-text);
    `,

    Header: styled.header`
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
            gap: 12px;
        }

        .brand {
            font-family: var(--font-heading);
            font-size: 1.4rem;
            letter-spacing: 0.6px;
        }

        .nav {
            color: var(--color-text-muted);
            font-size: 0.95rem;
        }
    `,

    Main: styled.main`
        width: 100%;
        min-height: calc(100vh - ${HEADER_HEIGHT});
        background: var(--color-bg);

        .inner {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 24px 20px;
            color: var(--color-text-muted);
        }
    `,

    Footer: styled.footer`
        width: 100%;
        border-top: 1px solid var(--color-border);
        background: var(--color-bg);

        .inner {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 12px 20px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            color: var(--color-text-muted);
            font-size: 0.9rem;
        }
    `,
};
