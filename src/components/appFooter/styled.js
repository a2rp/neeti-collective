// styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: 100%;
        border-top: 1px solid var(--color-border);
        background: var(--color-bg);

        .inner {
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 70px 20px 28px;
        }

        .stay {
            text-align: center;
            padding: 10px 0 46px;
        }

        .stayTitle {
            font-family: var(--font-heading);
            text-transform: uppercase;
            letter-spacing: 1.2px;
            font-size: 2.6rem;
            color: var(--color-text);
            line-height: 1;
        }

        .staySub {
            margin-top: 10px;
            color: var(--color-text-muted);
            font-size: 1rem;
        }

        .form {
            margin-top: 26px;
            display: flex;
            justify-content: center;
        }

        .pillForm {
            width: min(720px, 100%);
            display: grid;
            grid-template-columns: 1fr 170px;
            border-radius: 999px;
            border: 1px solid var(--color-text);
            background: transparent;
            overflow: hidden;
        }

        .email {
            border: none;
            outline: none;
            background: transparent;
            padding: 16px 18px;
            font-size: 0.98rem;
            color: var(--color-text);
        }

        .email::placeholder {
            color: var(--color-text-muted);
        }

        .btn {
            border: none;
            border-left: 1px solid var(--color-text);
            background: #0b0b0b;
            color: #ffffff;
            font-family: var(--font-heading);
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 1rem;
            padding: 14px 14px;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            border-radius: 0;
            cursor: pointer;
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

        .btnIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1.05rem;
        }

        .srOnly {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .mid {
            display: grid;
            grid-template-columns: 220px 1fr 220px;
            gap: 18px;
            align-items: center;
            padding-top: 18px;
        }

        .copy {
            color: var(--color-text);
            font-size: 0.95rem;
            white-space: nowrap;
        }

        .legal {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 18px;
            flex-wrap: wrap;
        }

        .legalLink {
            color: var(--color-text);
            text-decoration: none;
            font-size: 0.95rem;
            opacity: 0.8;
            transition: opacity 160ms ease;
        }

        .legalLink:hover {
            opacity: 1;
            text-decoration: underline;
            text-underline-offset: 4px;
        }

        .social {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 12px;
            flex-wrap: wrap;
        }

        .socialIcon {
            width: 36px;
            height: 36px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text);

            display: inline-flex;
            align-items: center;
            justify-content: center;

            transition:
                transform 160ms ease,
                background 160ms ease;
            text-decoration: none;
        }

        .socialIcon:hover {
            background: var(--color-surface);
            transform: translateY(-1px);
        }

        .socialIcon svg {
            font-size: 1.05rem;
        }

        .bigWord {
            margin-top: 34px;
            font-family: var(--font-heading);
            font-size: clamp(54px, 10vw, 150px);
            letter-spacing: 1px;
            color: var(--color-text);
            line-height: 0.95;
            opacity: 0.12;
            text-align: center;
            user-select: none;
            /* overflow: hidden; */
            /* border: 1px solid #f00; */
        }

        .btn:disabled {
            cursor: not-allowed;
            opacity: 0.75;
            transform: none;
        }

        .socialIcon.disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        @media (max-width: 900px) {
            .mid {
                grid-template-columns: 1fr;
                justify-items: center;
                gap: 14px;
            }

            .social {
                justify-content: center;
            }

            .copy {
                text-align: center;
                white-space: normal;
            }

            .bigWord {
                text-align: center;
            }
        }

        @media (max-width: 560px) {
            .pillForm {
                grid-template-columns: 1fr 130px;
            }

            .stayTitle {
                font-size: 2.1rem;
            }

            .btnText {
                display: none;
            }
        }
    `,
};
