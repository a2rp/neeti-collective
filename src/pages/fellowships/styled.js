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

        .grid {
            margin-top: 18px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 14px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            transition: transform 160ms ease;
        }

        .card:hover {
            transform: translateY(-2px);
        }

        .badge {
            display: inline-block;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 0.85rem;
            color: var(--color-text-muted);
        }

        .cardTitle {
            font-family: var(--font-heading);
            letter-spacing: 0.8px;
            text-transform: uppercase;
            font-size: 1.1rem;
            color: var(--color-text);
        }

        .summary {
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .details {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
        }

        .detail {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
            color: var(--color-text);
        }

        .actions {
            margin-top: auto;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 14px;
            border-radius: 999px;
            text-decoration: none;
            font-size: 0.9rem;
            border: 1px solid var(--color-text);
            transition:
                transform 160ms ease,
                opacity 160ms ease;
        }

        .btn:hover {
            transform: translateY(-1px);
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
        }

        .info {
            margin-top: 24px;
        }

        .infoCard {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 18px;
            padding: 16px;
        }

        .infoTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-family: var(--font-heading);
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin-bottom: 10px;
        }

        .infoList {
            margin: 0 0 12px 18px;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.7;
        }

        @media (max-width: 560px) {
            .container {
                padding: 34px 16px 70px;
            }
        }
    `,
};
