import styled from "styled-components";

const HEADER_HEIGHT = "72px";
export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 1000;
        width: 100%;
        height: ${HEADER_HEIGHT};
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-bg) 94%, transparent);
        .inner { max-width: var(--max-width); height: 100%; margin: 0 auto; padding: 0 20px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .brandLink { display: inline-flex; align-items: center; gap: 10px; color: var(--color-text); text-decoration: none; }
        .logo { width: 38px; height: 38px; padding: 4px; border: 1px solid var(--color-border); border-radius: 10px; background: var(--color-surface); object-fit: contain; }
        .brandWrap { display: inline-flex; align-items: center; gap: 14px; }
        .brand { font-family: var(--font-heading); font-size: 1.45rem; letter-spacing: .8px; white-space: nowrap; }
        .tag { padding: 5px 9px; border: 1px solid var(--color-border); border-radius: 999px; color: var(--color-text-muted); font-size: .75rem; white-space: nowrap; }
        .navDesktop { display: flex; align-items: center; gap: 22px; }
        .navItem { padding: 8px 4px; color: var(--color-text); font-family: var(--font-heading); font-size: .95rem; letter-spacing: .7px; text-decoration: none; opacity: .72; transition: opacity 160ms ease, text-shadow 160ms ease; }
        .navItem:hover, .navItem.active { opacity: 1; text-shadow: 0 0 12px rgba(15,61,46,.24); }
        .menuBtn { display: none; width: 42px; height: 42px; place-items: center; border: 1px solid var(--color-border); border-radius: 10px; color: var(--color-text); background: var(--color-bg); cursor: pointer; transition: border-color 160ms ease, box-shadow 160ms ease; }
        .menuBtn:hover { border-color: var(--color-primary); box-shadow: 0 0 14px rgba(15,61,46,.18); }
        .mobilePanel { position: absolute; top: ${HEADER_HEIGHT}; left: 0; right: 0; display: none; border-bottom: 1px solid var(--color-border); background: var(--color-bg); }
        .mobilePanel.open { display: block; }
        .mobileNav { max-width: var(--max-width); margin: 0 auto; padding: 12px 20px 16px; display: grid; gap: 10px; }
        .mItem { display: flex; align-items: center; gap: 10px; padding: 13px 12px; border: 1px solid var(--color-border); border-radius: 10px; color: var(--color-text); text-decoration: none; }
        .mItem:hover, .mItem.active { border-color: var(--color-primary); box-shadow: 0 0 14px rgba(15,61,46,.12); }
        @media (max-width: 900px) { .navDesktop { display: none; } .menuBtn { display: grid; } .tag { display: none; } }
        @media (max-width: 420px) { .brand { font-size: 1.18rem; } .logo { width: 34px; height: 34px; } }
    `,
};