import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: 100%;
        border-top: 1px solid var(--color-border);
        background: var(--color-bg);
        .inner { max-width: var(--max-width); margin: 0 auto; padding: 64px 20px 24px; }
        .stay { padding: 8px 0 44px; text-align: center; }
        .stayTitle { color: var(--color-text); font-family: var(--font-heading); font-size: 2.5rem; letter-spacing: 1px; line-height: 1; text-transform: uppercase; }
        .staySub { margin-top: 10px; color: var(--color-text-muted); }
        .form { display: flex; justify-content: center; margin-top: 24px; }
        .pillForm { display: grid; grid-template-columns: 1fr 150px; width: min(680px, 100%); overflow: hidden; border: 1px solid var(--color-text); border-radius: 999px; }
        .email { min-width: 0; padding: 14px 18px; border: 0; outline: 0; color: var(--color-text); background: transparent; }
        .email::placeholder { color: var(--color-text-muted); }
        .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 0; border-left: 1px solid var(--color-text); border-radius: 0; color: #fff; background: #0b0b0b; cursor: pointer; transition: box-shadow 160ms ease, text-shadow 160ms ease; }
        .btn:hover { box-shadow: inset 0 0 18px rgba(255,255,255,.12); text-shadow: 0 0 12px rgba(255,255,255,.35); }
        .btn:disabled { cursor: not-allowed; opacity: .7; }
        .srOnly { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
        .mid { display: grid; grid-template-columns: 1fr 1fr 2fr; align-items: start; gap: 24px; padding-top: 18px; border-top: 1px solid var(--color-border); }
        .copy { color: var(--color-text); font-size: .9rem; }
        .copy a { color: var(--color-primary); font-weight: 700; }
        .legal { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 16px; }
        .legalLink { color: var(--color-text); font-size: .85rem; text-decoration: none; opacity: .78; }
        .legalLink:hover { opacity: 1; text-decoration: underline; text-underline-offset: 4px; }
        .socialGroups { display: flex; justify-content: flex-end; gap: 24px; }
        .groupTitle { display: block; margin-bottom: 8px; color: var(--color-text-muted); font-size: .7rem; font-weight: 700; letter-spacing: .12em; text-align: right; text-transform: uppercase; }
        .social { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; }
        .socialIcon { display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border: 1px solid var(--color-border); border-radius: 999px; color: var(--color-text); text-decoration: none; transition: border-color 160ms ease, box-shadow 160ms ease, text-shadow 160ms ease; }
        .socialIcon:hover { border-color: var(--color-primary); box-shadow: 0 0 14px rgba(15,61,46,.18); text-shadow: 0 0 10px rgba(15,61,46,.25); }
        .bigWord { margin-top: 34px; color: var(--color-text); font-family: var(--font-heading); font-size: clamp(54px, 10vw, 150px); line-height: .95; opacity: .12; text-align: center; user-select: none; }
        @media (max-width: 1000px) { .mid { grid-template-columns: 1fr 1fr; } .socialGroups { grid-column: 1 / -1; justify-content: center; } .groupTitle { text-align: center; } .social { justify-content: center; } }
        @media (max-width: 640px) { .pillForm { grid-template-columns: 1fr 120px; } .stayTitle { font-size: 2.1rem; } .mid { grid-template-columns: 1fr; text-align: center; } .socialGroups { display: grid; justify-content: center; gap: 18px; } }
    `,
};