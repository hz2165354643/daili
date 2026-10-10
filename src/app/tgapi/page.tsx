import type { Metadata } from "next";
import { SiteShell } from "@/components/sites/cheapproxy/site-shell";
import { TgapiPanel } from "@/components/sites/cheapproxy/tgapi-panel";

export const metadata: Metadata = {
  title: "TG API Error问题完美解决  便宜纯净的海外代理 IP",
  description:
    "TG API Error问题完美解决 便宜纯净的海外代理IP。动态代理IP低至5元/GB，静态住宅IP仅26元/月。",
  keywords: ["cheapproxy", "海外代理IP", "住宅代理"],
};

export default function TgapiPage() {
  return (
    <SiteShell>
      <TgapiPanel />
    </SiteShell>
  );
}
