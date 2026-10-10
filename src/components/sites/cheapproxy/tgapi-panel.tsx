"use client";

import { useState } from "react";

const PHONE_PATTERN = /^\+\d+$/;

type Toast = {
  id: number;
  text: string;
};

export function TgapiPanel() {
  const [phone, setPhone] = useState("");
  const [buyOpen, setBuyOpen] = useState(false);
  const [payOpen, setPayOpen] = useState(false);
  const [payAmount, setPayAmount] = useState(39);
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (text: string) => {
    const next = { id: Date.now(), text };
    setToast(next);
    window.setTimeout(() => {
      setToast((current) => (current?.id === next.id ? null : current));
    }, 3000);
  };

  const openPay = (amount: number) => {
    setPayAmount(amount);
    setBuyOpen(false);
    setPayOpen(true);
  };

  const onNext = () => {
    if (!PHONE_PATTERN.test(phone)) {
      showToast("请复制完整的手机号码，如: +111223344");
      return;
    }
    openPay(39);
  };

  const openBuy = () => {
    setBuyOpen(true);
  };

  return (
    <>
      <div className="cp-alert" role="alert">
        <div>
          针对 Telegram API 申请经常报错 Error 问题。本站封装云端代理，帮助需要申请的开发者自助申请，成功率100%，请使用谷歌浏览器。完成后可自行
          <a href="https://my.telegram.org" target="_blank" rel="noreferrer">
            官网
          </a>
          查询，有问题请联系客服。
        </div>
      </div>
      <div className="cp-form">
        <div className="cp-form-art">
          <img
            src="/sites/cheapproxy/tl-card.gif"
            alt=""
            width={160}
            height={160}
          />
        </div>
        <div className="cp-form-body">
          <h1>Manage Apps</h1>
          <p>
            Log in here to <b>manage your apps</b> using Telegram API. Enter your
            number and we will send you a confirmation code via Telegram (not SMS).
          </p>
          <div className="cp-label">Your Phone Number</div>
          <input
            className="cp-input"
            placeholder="+122334455"
            value={phone}
            onChange={(event) => setPhone(event.target.value.replace(/\s/g, ""))}
          />
          <div className="cp-hint">
            Please enter your number in{"\u00a0"}
            <a
              href="https://telegram.org/faq#login-and-sms"
              target="_blank"
              rel="noreferrer"
            >
              international format
            </a>
          </div>
          <div className="cp-actions">
            <button type="button" className="cp-btn cp-btn-primary" onClick={onNext}>
              下一步
            </button>
            <em className="cp-buy" onClick={openBuy}>
              购买专用IP自己申请
            </em>
          </div>
        </div>
      </div>
      {buyOpen ? (
        <>
          <button
            type="button"
            className="cp-mask"
            aria-label="关闭"
            onClick={() => setBuyOpen(false)}
          />
          <div className="cp-modal" role="dialog" aria-labelledby="cp-buy-title">
            <div className="cp-modal-head">
              <span id="cp-buy-title">购买专用代理IP自行申请 Telegram API</span>
            </div>
            <div className="cp-modal-body">
              <div>1. 我已具备低延迟的梯子或海外 Windows，并且会使用指纹浏览器或链式代理；</div>
              <div>
                2. 购买成功后，将会在下方显示IP信息，可以使用<b>指纹浏览器</b>或<b>链式代理</b>自行申请；
              </div>
              <div>
                3. IP购买成功后请及时复制信息，IP将在<b> 凌晨06:00 </b>点自动失效。
              </div>
            </div>
            <div className="cp-modal-foot">
              <button type="button" className="cp-btn" onClick={() => setBuyOpen(false)}>
                取 消
              </button>
              <button
                type="button"
                className="cp-btn cp-btn-primary"
                onClick={() => openPay(69)}
              >
                立即购买
              </button>
            </div>
          </div>
        </>
      ) : null}
      {payOpen ? (
        <>
          <button
            type="button"
            className="cp-mask"
            aria-label="关闭支付"
            onClick={() => setPayOpen(false)}
          />
          <div className="cp-modal cp-pay" role="dialog" aria-labelledby="cp-pay-title">
            <div className="cp-pay-head">
              <img
                id="cp-pay-title"
                src="/sites/cheapproxy/alipay-logo.jpg"
                alt="支付宝"
              />
              <button
                type="button"
                className="cp-pay-close"
                aria-label="关闭"
                onClick={() => setPayOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="cp-pay-body">
              <b>¥ {payAmount}</b>
              <img src="/sites/cheapproxy/pay-qr.jpg" alt="支付二维码" />
              <p>如使用手机端访问，请使用另外一个手机扫码支付。</p>
            </div>
          </div>
        </>
      ) : null}
      {toast ? (
        <div className="cp-toast" role="status">
          <span className="cp-toast-icon" aria-hidden="true">
            !
          </span>
          {toast.text}
        </div>
      ) : null}
    </>
  );
}
