import { IWorkout } from "@/types/workout.type";
import React from "react";
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

  return (
    <section id="library" className="mx-6 flex flex-col gap-8">
      <div className="flex flex-col gap-1.5">
        <h1 className="font-oswald text-3xl font-bold">THE LIBRARY</h1>

        <p className="text-lg text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workoutsData.map((workoutData: IWorkout) => (
          <Link href={`/workout/${workoutData.id}`} key={workoutData.id}>
            <WorkoutCard workout={workoutData} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LibrarySection;
