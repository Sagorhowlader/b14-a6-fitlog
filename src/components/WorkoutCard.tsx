import React from "react";
import { IWorkout } from "../types/workout.type";
import Image from "next/image";

type workoutCardProps = {
  workout: IWorkout;
};

const WorkoutCard = ({ workout }: workoutCardProps) => {
  return (
    <div className="card bg-base-[#9CA3AF] shadow-2xl border border-base-200">
      <figure className="overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          width={392}
          height={140}
          className="w-full h-[240px] object-cover object-center"
        />
      </figure>

      <div className="card-body">
        {/* Badges */}
        <div className="flex gap-2">
          <div className="flex gap-1.5 p-1">
            {workout.muscleGroups.map((muscle: string, index: number) => (
              <div key={index} className="badge badge-primary font-medium">
                {muscle}
              </div>
            ))}
          </div>
        </div>

        {/* Workout name + equipment */}
        <div className="mt-1">
          <h2 className="card-title text-xl font-bold">{workout.name}</h2>

          <p className="text-sm text-base-content/60 mt-1">
            {workout.equipment}
          </p>
        </div>

        {/* Workout information */}
        <div className="card-actions justify-start mt-2">
          <div className="badge badge-outline gap-1 px-3 py-3">
            ⏱️ {workout.duration}
          </div>

          <div className="badge badge-outline gap-1 px-3 py-3">
            🔥 {workout.caloriesBurned}
          </div>

          <div className="badge badge-outline gap-1 px-3 py-3">
            ⭐ {workout.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
