"use client";

import React, { useContext, useMemo } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import SaveCard from "@/components/MyPlan/SaveTab/SaveCard";
import NoItemsSave from "../MyPlanShared/NoItemsSave";

const SaveTab = ({ searchText }: { searchText: string }) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("MyPlanCard must be used inside WorkoutProvider");
  }

  const { saveWorkoutData, sortBy } = context;

  const sortedWorkouts = useMemo(() => {
    const workouts = saveWorkoutData.filter((workout) => {
      const search = searchText.toLowerCase();

      const name = workout.name.toLowerCase();

      const tags = workout.muscleGroups.join(" ").toLowerCase();

      return name.includes(search) || tags.includes(search);
    });

    if (sortBy === "calories") {
      return workouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    if (sortBy === "rating") {
      return workouts.sort((a, b) => b.rating - a.rating);
    }

    return workouts.sort((a, b) => a.duration - b.duration);
  }, [saveWorkoutData, sortBy, searchText]);

  return (
    <>
      {saveWorkoutData.length > 0 ? (
        <div className="flex flex-col gap-4">
          {sortedWorkouts?.map((workout) => (
            <SaveCard key={workout.id} saveWorkoutData={workout} />
          ))}
        </div>
      ) : (
        <NoItemsSave />
      )}
    </>
  );
};

export default SaveTab;
