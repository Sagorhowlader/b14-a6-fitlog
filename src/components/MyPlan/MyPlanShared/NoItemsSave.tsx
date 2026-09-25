import Link from "next/link";
import React from "react";

const NoItemsSave = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-base-300 bg-base-200 px-8 py-12 text-center">
      <h1 className="text-2xl font-bold uppercase tracking-wide text-base-content">
        NOTHING HERE YET
      </h1>

      <p className="max-w-md text-base text-base-content/70">
        Browse the library and add a lift to get today&apos;s plan moving.
      </p>

      <Link href={"/"}>
        <button className="btn btn-primary gap-2">Go to Workouts</button>
      </Link>
    </div>
  );
};

export default NoItemsSave;
