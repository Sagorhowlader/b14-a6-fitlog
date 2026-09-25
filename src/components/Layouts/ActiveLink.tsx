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
      className={
        pathname === href
          ? "bg-[#1A2312]/100 text-fitlog-primary font-bold rounded-full"
          : ""
      }
    >
      {children}
    </Link>
  );
}
