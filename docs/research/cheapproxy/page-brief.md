# 

Source: 
Local: `/tgapi` (homepage redirects here)

## Sections

1. Fixed header, 62px, white, bottom border `#ccc`. Left-aligned bar is 87.5% wide from 768px and 95.833% below that. Logo 34px tall, 14px from the top. Desktop nav: 首页, 海外代理IP (dropdown: 动态代理 IP, 静态住宅 IP), TG API 申请 (current, 2px `#1890ff` underline), AKShare插件, 帮助. Text `#333`, 16.8px, hover `#1890ff`. Desktop shows 登 录 and 注 册. Below 768px the nav becomes a right drawer titled 导航菜单, and 注册 is hidden.
2. Info alert, full width, `#e6f7ff` / border `#91d5ff`, no top border, centered 14px copy. Link 官网 → 
3. Form, max-width 570px, centered, 50px top padding, 8/16 columns. Illustration max 160px. Title “Manage Apps” 20px/500. Phone field, international-format link, then 下一步. Valid `+` digits reveals Confirmation code and 立即申请. 购买专用IP自己申请 opens the 600px purchase modal.
4. First-visit notice after 1s: 高级住宅动态代理主机地址更换通知. 不再提示 stores `modalNotify0128`.
5. Footer on `#0f054c` with `footer-bg.svg`. Logo, three QR codes, link columns.

## Assets

| Source | Local |
| --- | --- |
| /logo.svg | /sites/cheapproxy/logo.svg |
| /logo-white.svg | /sites/cheapproxy/logo-white.svg |
| /favicon.png | /sites/cheapproxy/favicon.png |
| /tl_card_decentralized.gif | /sites/cheapproxy/tl-card.gif |
| /wx-qrcode.png | /sites/cheapproxy/wx-qrcode.png |
| /qq-qrcode.png (JPEG bytes) | /sites/cheapproxy/qq-qrcode.jpg |
| /tg-qrcode.png | /sites/cheapproxy/tg-qrcode.png |
| /_next/static/media/footer-bg.2bed4af6.svg | /sites/cheapproxy/footer-bg.svg |

## Out of scope

`/`, `/proxy`, `/proxy_static`, `/help`, `/about`, `/login`, `/register` stay on . AKShare and Telegram links stay external.

`/api/tgapi/captcha`, `/api/tgapi/new`, and `/api/tgapi/pool` are not called. Those requests create a real WeChat payment and send a Telegram login code. The local buttons only validate the phone format and show the same screens.
