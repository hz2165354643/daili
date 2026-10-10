export function SiteFooter() {
  return (
    <footer className="cp-footer">
      <div className="cp-footer-inner">
        <div className="cp-footer-logo">
          <img src="/sites/cheapproxy/logo-white.svg" alt="CheapProxy" />
          <div>CheapProxy - 便宜纯净的海外代理 IP</div>
        </div>
        <div className="cp-qrs">
          <div>
            <div>客服QQ</div>
            <img src="/sites/cheapproxy/wx-qrcode.png" alt="客服微信" width={100} height={100} />
          </div>
          <div>
            <div>客服QQ2</div>
            <img src="/sites/cheapproxy/qq-qrcode.jpg" alt="客服QQ" width={100} height={100} />
          </div>
          <div>
            <div>客服电报</div>
            <a href="https://t.me/@qingxin01" target="_blank" rel="noreferrer">
              <img src="/sites/cheapproxy/tg-qrcode.png" alt="客服电报" width={100} height={100} />
            </a>
          </div>
        </div>
        <div className="cp-footer-links">
          <div className="cp-link-item">动态代理 IP</div>
          <div className="cp-link-item">静态住宅 IP</div>
          <div className="cp-link-item">TG API申请</div>
        </div>
        <div className="cp-footer-links cp-help">
          <div className="cp-link-item">帮助中心</div>
          <div className="cp-link-item">关于我们</div>
          <div className="cp-link-item">通知频道</div>
        </div>
      </div>
    </footer>
  );
}
