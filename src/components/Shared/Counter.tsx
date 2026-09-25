"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

type CounterProps = {
  mode: "plan" | "save";
};

const Counter = ({ mode }: CounterProps) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("Counter must be used inside WorkoutProvider");
  }

  const { planWorkoutData, saveWorkoutData } = context;

  if (mode === "plan") {
    return (
      <div className="badge badge-sm min-w-6 rounded-full border-0 bg-fitlog-primary px-2 font-semibold text-black">
        {planWorkoutData.length}
      </div>
    );
  }

  if (mode === "save") {
    return (
      <div className="badge badge-sm min-w-6 rounded-3xl border border-base-content bg-transparent px-2 font-semibold">
        {saveWorkoutData.length}
      </div>
    );
  }

  return null;
};

export default Counter;
