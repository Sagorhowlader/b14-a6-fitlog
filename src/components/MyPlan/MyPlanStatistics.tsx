"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
type MyPlanStatisticsProps = {
  activeTab: "plan" | "saved";
};
const MyPlanStatistics = ({ activeTab }: MyPlanStatisticsProps) => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("MyPlanStatistics must be used inside WorkoutProvider");
  }
  const { planWorkoutData, saveWorkoutData } = context;
  const totalMinutes = () => {
    if (activeTab === "plan") {
      return planWorkoutData.reduce(
        (total, workout) => total + workout.duration,
        0,
      );
    }

    if (activeTab === "saved") {
      return saveWorkoutData.reduce(
        (total, workout) => total + workout.duration,
        0,
      );
    }
    return 0;
  };

  const totalCalories = () => {
    if (activeTab === "plan") {
      return planWorkoutData.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0,
      );
    }

    if (activeTab === "saved") {
      return saveWorkoutData.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0,
      );
    }
    return 0;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-base-200 rounded-2xl p-5">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-base-content/60">
            Exercises
          </span>
          <span className="text-3xl font-bold">
            {activeTab === "plan"
              ? planWorkoutData.length
              : saveWorkoutData.length}
          </span>
        </div>
      </div>

      <div className="bg-base-200 rounded-2xl p-5">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-base-content/60">
            Minutes
          </span>
          <span className="text-3xl font-bold">{totalMinutes()}</span>
        </div>
      </div>

      <div className="bg-base-200 rounded-2xl p-5">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-base-content/60">
            Calories
          </span>
          <span className="text-3xl font-bold">{totalCalories()}</span>
        </div>
      </div>
    </div>
  );
};

export default MyPlanStatistics;
