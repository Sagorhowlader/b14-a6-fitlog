import PlanCard from "@/components/MyPlan/PlanTab/PlanCard";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext, useMemo } from "react";
import NoItemsSave from "../MyPlanShared/NoItemsSave";

const PlanTab = ({ searchText }: { searchText: string }) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("MyPlan must be used inside WorkoutProvider");
  }

  const { planWorkoutData, sortBy } = context;

  const sortedWorkouts = useMemo(() => {
    const workouts = [...planWorkoutData];

    let filterWorkoutData = workouts;

    if (searchText !== "") {
      filterWorkoutData = workouts.filter(
        (workout) =>
          workout.name.toLowerCase().includes(searchText.toLowerCase()) ||
          workout.muscleGroups.some((tag) =>
            tag.toLowerCase().includes(searchText.toLowerCase()),
          ),
      );
    }

    if (sortBy === "calories") {
      return filterWorkoutData.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned,
      );
    } else if (sortBy === "rating") {
      return filterWorkoutData.sort((a, b) => b.rating - a.rating);
    } else {
      return filterWorkoutData.sort((a, b) => a.duration - b.duration);
    }
  }, [planWorkoutData, sortBy, searchText]);

  return (
    <>
      {sortedWorkouts.length > 0 ? (
        <div className="flex flex-col gap-4">
          {sortedWorkouts.map((workoutData) => (
            <PlanCard key={workoutData.id} workout={workoutData} />
          ))}
        </div>
      ) : (
        <NoItemsSave />
      )}
    </>
  );
};

export default PlanTab;
