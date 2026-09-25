import React from "react";
import Image from "next/image";
import banner from "@/assets/banner.png";
const HeroSection = () => {
  return (
    <section className="flex items-center justify-between bg-base-200 p-14">
      <div className="flex flex-1 flex-col items-start gap-5">
        <p className="text-sm font-semibold uppercase text-primary">
          WORKOUT LIBRARY
        </p>
        <h1 className="font-oswald text-4xl md:text-6xl font-bold uppercase leading-tight">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-base-content/70">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <a href="#library">
          <button className="btn btn-primary px-3 py-1.5 rounded-[6px]">
            BROWSE WORKOUTS
          </button>
        </a>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image src={banner} alt="Hero Banner" />
      </div>
    </section>
  );
};
export default HeroSection;
