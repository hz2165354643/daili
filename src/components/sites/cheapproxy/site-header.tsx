import { SiteLink } from "./site-link";

export function SiteHeader() {
  return (
    <header className="cp-header">
      <div className="cp-topbar">
        <div className="cp-logo">
          <img src="/sites/cheapproxy/logo.svg" alt="CheapProxy" />
        </div>
        <nav className="cp-nav" aria-label="主导航">
          <div className="cp-nav-item is-current">
            <SiteLink href="/tgapi">TG API 申请</SiteLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
