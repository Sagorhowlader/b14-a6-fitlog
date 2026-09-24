import { IWorkout } from "@/types/worksout.type";
import React from "react";
import WorkoutCard from "./WorkoutCard";
const getWorkoutData = async () => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
  } catch {
    return { message: "Error Fetch Workouts Data" };
  }
};
const LibrarySection = async () => {
  const workoutsData = await getWorkoutData();
  console.log(workoutsData);
  return (
    <section className="grid grid-cols-3 gap-6 p-6">
      {workoutsData.map((workoutData: IWorkout) => (
        <WorkoutCard key={workoutData.id} workout={workoutData} />
      ))}
    </section>
  );
};

export default LibrarySection;
