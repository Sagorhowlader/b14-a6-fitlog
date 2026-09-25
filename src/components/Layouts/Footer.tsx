import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 flex min-h-16 flex-col justify-between gap-4 border-t border-base-200 p-8 shadow md:flex-row md:items-center">
      <div className="flex items-center gap-2.5">
        <Image src={logo} width={28} height={28} alt="footer-logo" />

        <p className="font-oswald text-xs font-bold uppercase">FITLOG</p>
      </div>

      <div className="text-xs text-base-content/60">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </div>
    </footer>
  );
}
