"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function ActiveLink({ href, children }: ActiveLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname === href ? "text-primary font-bold" : ""}
    >
      {children}
    </Link>
  );
}
