"use client";
import React, { useContext } from "react";
import MyPlanCard from "./MyPlanCard";
import { WorkoutContext } from "@/context/WorkoutContext";

const MyPlan = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("MyPlanCard must be used inside WorkoutProvider");
  }
  const { planWorkoutData } = context;
  return (
    <div className="flex flex-col gap-3.5 bg-base-200">
      {planWorkoutData.map((workoutData) => (
        <MyPlanCard key={workoutData.id} workout={workoutData} />
      ))}
    </div>
  );
};

export default MyPlan;
