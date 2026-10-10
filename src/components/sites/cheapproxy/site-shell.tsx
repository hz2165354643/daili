import type { ReactNode } from "react";
import { NoticeModal } from "./notice-modal";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import "./site.css";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="cp-site">
      <SiteHeader />
      <main className="cp-main">{children}</main>
      <SiteFooter />
      <NoticeModal />
    </div>
  );
}
