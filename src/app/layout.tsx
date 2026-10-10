import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TG API Error问题完美解决",
  description:
    "5元/GB | cheapproxy.net 便宜纯净的海外代理IP。动态代理IP低至5元/GB，静态住宅IP仅26元/月。",
  keywords: ["cheapproxy", "海外代理IP", "住宅代理"],
  icons: { icon: "/sites/cheapproxy/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
