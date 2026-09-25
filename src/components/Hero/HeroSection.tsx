import React from "react";
import Image from "next/image";
import banner from "@/assets/banner.png";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="mx-4 my-8 flex flex-col items-center justify-between gap-8 rounded-2xl bg-base-200 p-6 sm:mx-6 sm:p-8 lg:my-12 lg:flex-row lg:p-14">
      {/* Text */}
      <div className="flex w-full flex-1 flex-col items-start gap-5">
        <p className="text-xs font-bold uppercase text-fitlog-primary">
          WORKOUT LIBRARY
        </p>

        <h1 className="font-oswald text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>

        <p className="max-w-120.25 text-base text-base-content/70 md:text-lg">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        <a href="#library">
          <button className="btn rounded-[6px] bg-fitlog-primary px-3 py-1.5 text-xs font-bold text-black">
            BROWSE WORKOUTS
            <FaArrowRight />
          </button>
        </a>
      </div>

      {/* Image */}
      <div className="flex w-full flex-1 items-center justify-center">
        <Image
          src={banner}
          alt="Hero Banner"
          className="h-auto w-full max-w-md object-contain lg:max-w-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
