"use client";
import React, { useContext, useMemo } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import SaveCard from "@/components/MyPlan/SaveTab/SaveCard";
import NoItemsSave from "../MyPlanShared/NoItemsSave";

const SaveTab = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("MyPlanCard must be used inside WorkoutProvider");
  }
  const { saveWorkoutData, sortBy } = context;

  const sortedSaveWorkouts = useMemo(() => {
    const workouts = [...saveWorkoutData];

    if (sortBy === "calories") {
      return workouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      return workouts.sort((a, b) => b.rating - a.rating);
    } else {
      return workouts.sort((a, b) => a.duration - b.duration);
    }
  }, [saveWorkoutData, sortBy]);
  return (
    <>
      {saveWorkoutData?.length > 0 ? (
        <div className="flex flex-col gap-3.5 bg-base-200">
          {sortedSaveWorkouts.map((saveWorkoutData) => (
            <SaveCard
              key={saveWorkoutData.id}
              saveWorkoutData={saveWorkoutData}
            />
          ))}
        </div>
      ) : (
        <NoItemsSave />
      )}
    </>
  );
};

export default SaveTab;
