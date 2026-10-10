import Link from "next/link";
import type { ReactNode } from "react";
import { isLocalPath, sourceHref } from "./source";

type SiteLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  target?: string;
  onClick?: () => void;
};

export function SiteLink({
  href,
  className,
  children,
  target,
  onClick,
}: SiteLinkProps) {
  if (isLocalPath(href)) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={sourceHref(href)}
      className={className}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
