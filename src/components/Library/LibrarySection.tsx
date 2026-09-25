import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import WorkoutCard from "./WorkoutCard";
import Link from "next/link";
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
    <section id="library" className="grid grid-cols-3 gap-6 p-6">
      {workoutsData.map((workoutData: IWorkout) => (
        <Link href={`workout/${workoutData.id}`} key={workoutData.id}>
          <WorkoutCard workout={workoutData} />
        </Link>
      ))}
    </section>
  );
};

export default LibrarySection;
