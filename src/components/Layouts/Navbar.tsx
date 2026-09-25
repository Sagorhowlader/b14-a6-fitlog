import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Counter from "../Shared/Counter";
import ActiveLink from "./ActiveLink";
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <ActiveLink href={"/"}>Workout</ActiveLink>
      </li>
      <li>
        <ActiveLink href={"/my-plan"}>My Plan</ActiveLink>
      </li>
    </>
  );
  return (
    <div className="navbar min-h-20 border-b-2 border-b-base-200 mb-11 flex items-center text-center justify-center">
      <div className="navbar-start">
        {/* Mobile Menu Design */}
        <div className="dropdown">
          {/* HAMBURGER DESIGN FOR MOBILE */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* HAMBURGER DESIGN FOR MOBILE END */}
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
        {/* Mobile Menu Design End*/}
        {/* Large Screen Design Start */}
        <div className="flex items-center justify-center">
          <Image src={logo} alt="Company-Logo" width={28} height={28} />
          <Link href={"/"} className="btn btn-ghost text-lg">
            FITLOG
          </Link>
        </div>
        {/* Large Screen Design Start */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4">{menuItems}</ul>
      </div>
      <div className="navbar-end gap-1">
        <Link href={"/my-plan"} className="btn btn-ghost">
          Plan <Counter mode="plan" />
        </Link>
        <Link href={"/my-plan"} className="btn btn-ghost">
          Saved <Counter mode="save" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
