"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "modalNotify0128";

const HOSTS = [
  "43.159.29.18 新加坡1",
  "43.159.28.226 新加坡2",
  "45.78.212.125 新加坡3",
  "43.131.46.120 德国",
  "43.166.234.40 美国",
];

export function NoticeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY)) {
      return;
    }
    const timer = window.setTimeout(() => setOpen(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!open) {
    return null;
  }

  const dismissForever = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  return (
    <>
      <button type="button" className="cp-mask" aria-label="关闭通知" onClick={() => setOpen(false)} />
      <div className="cp-modal cp-notice" role="dialog" aria-labelledby="cp-notice-title">
        <button type="button" className="cp-notice-close" aria-label="关闭" onClick={() => setOpen(false)}>
          ×
        </button>
        <div className="cp-modal-body">
          <h2 id="cp-notice-title" className="cp-notice-title">
            高级住宅动态代理主机地址更换通知
          </h2>
          <div className="cp-notice-body">
            之前的主机地址不能用了，请根据您的海外网络环境地址就近选择主机地址，socks5协议暂时需要维护，维护期间可使用 http 协议：
            <ul>
              {HOSTS.map((host) => (
                <li key={host}>{host}</li>
              ))}
            </ul>
          </div>
          <div className="cp-notice-foot">
            <button type="button" className="cp-notice-dismiss" onClick={dismissForever}>
              不再提示
            </button>
            <button type="button" className="cp-btn cp-btn-primary" onClick={() => setOpen(false)}>
              知道了
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
