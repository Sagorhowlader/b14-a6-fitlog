import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-5 text-center">
      <div className="flex flex-col items-center gap-3">
        <span className="loading loading-spinner loading-xl text-fitlog-primary"></span>

        <h1 className="font-oswald text-xl font-bold uppercase">
          Preparing Your My Plan
        </h1>

        <p className="text-sm text-base-content/60">Loading your workouts...</p>
      </div>

      <div className="skeleton h-4 w-48"></div>
      <div className="skeleton h-4 w-64"></div>
    </div>
  );
};

export default Loading;
