import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-base-200 flex justify-between shadow py-10 px-5">
      <div className="flex items-center gap-2.5">
        <Image src={logo} width={28} height={28} alt="footer-logo" />
        <p>FITLOG</p>
      </div>
      <div>© 2026 FitLog — Workout Library. Train hard, log honest.</div>
    </footer>
  );
}
