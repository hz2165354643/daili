const NAV_ITEMS = ["Home", "FAQ", "Apps", "API", "Protocol"];

export function SiteHeader() {
  return (
    <header className="cp-header">
      <div className="cp-topbar">
        <div className="cp-logo">
          <img src="/sites/cheapproxy/logo.svg" alt="CheapProxy" />
        </div>
        <nav className="cp-nav" aria-label="主导航">
          {NAV_ITEMS.map((item) => (
            <div className="cp-nav-item" key={item}>
              <span className="cp-nav-label">{item}</span>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
