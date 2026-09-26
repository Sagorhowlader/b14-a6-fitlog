import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NoItemsSave = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-3xl border border-base-300 bg-base-100 px-4 py-24 text-center">
      <div>
        <h1 className="text-xl font-oswald font-bold uppercase text-base-content">
          NOTHING HERE YET
        </h1>
        <p className="max-w-md text-base text-base-content/70">
          Browse the library and add a lift to get today&apos;s plan moving.
        </p>
      </div>

      <Link
        href={"/"}
        className="btn bg-fitlog-primary text-black font-bold rounded-full px-4 py-3 gap-2"
      >
        Go to workouts
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default NoItemsSave;
