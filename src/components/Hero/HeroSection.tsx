import React from "react";
import Image from "next/image";
import banner from "@/assets/banner.png";
const HeroSection = () => {
  return (
    <section className="flex items-center justify-between bg-base-200 p-14">
      <div className="flex flex-1 flex-col items-start gap-5">
        <p className="text-[11px] font-bold">WORKOUT LIBRARY</p>
        <h1 className="text-6xl font-extrabold">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="text-[16px] font-extralight">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <button className="btn btn-primary px-3 py-1.5 rounded-[6px]">
          BROWSE WORKOUTS
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image src={banner} alt="Hero Banner" />
      </div>
    </section>
  );
};
export default HeroSection;
