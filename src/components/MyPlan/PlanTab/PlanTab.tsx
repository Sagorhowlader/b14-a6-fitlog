import PlanCard from "@/components/MyPlan/PlanTab/PlanCard";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

const PlanTab = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("MyPlan must be used inside WorkoutProvider");
  }
  const { planWorkoutData } = context;

  return (
    <div className="flex flex-col gap-3.5 bg-base-200">
      {planWorkoutData.map((workoutData) => (
        <PlanCard key={workoutData.id} workout={workoutData} />
      ))}
    </div>
  );
};

export default PlanTab;
