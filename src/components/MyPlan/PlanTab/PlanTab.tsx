import PlanCard from "@/components/MyPlan/PlanTab/PlanCard";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext, useMemo } from "react";
import NoItemsSave from "../MyPlanShared/NoItemsSave";

const PlanTab = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("MyPlan must be used inside WorkoutProvider");
  }

  const { planWorkoutData, sortBy } = context;

  const sortedWorkouts = useMemo(() => {
    const workouts = [...planWorkoutData];

    if (sortBy === "calories") {
      return workouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      return workouts.sort((a, b) => b.rating - a.rating);
    } else {
      return workouts.sort((a, b) => a.duration - b.duration);
    }
  }, [planWorkoutData, sortBy]);

  return (
    <>
      {planWorkoutData.length > 0 ? (
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
