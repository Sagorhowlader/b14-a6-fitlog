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
      <div className="badge badge-sm badge-primary">
        {planWorkoutData.length}
      </div>
    );
  }

  if (mode === "save") {
    return (
      <div className="badge badge-sm badge-secondary">
        {saveWorkoutData.length}
      </div>
    );
  }

  return null;
};

export default Counter;
