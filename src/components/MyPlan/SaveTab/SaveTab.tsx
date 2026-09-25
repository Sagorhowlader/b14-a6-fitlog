"use client";
import React, { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import SaveCard from "@/components/MyPlan/SaveTab/SaveCard";

const SaveTab = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("MyPlanCard must be used inside WorkoutProvider");
  }
  const { saveWorkoutData } = context;
  return (
    <div className="flex flex-col gap-3.5 bg-base-200">
      {saveWorkoutData.map((saveWorkoutData) => (
        <SaveCard key={saveWorkoutData.id} saveWorkoutData={saveWorkoutData} />
      ))}
    </div>
  );
};

export default SaveTab;
