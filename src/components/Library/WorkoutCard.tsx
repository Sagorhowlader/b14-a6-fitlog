import React from "react";
import { IWorkout } from "../../types/workout.type";
import Image from "next/image";
import { CiStar, CiStopwatch } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

type WorkoutCardProps = {
  workout: IWorkout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <div className="card border border-base-200 bg-base-200 shadow-2xl">
      <figure className="overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          width={392}
          height={240}
          className="h-[240px] w-full object-cover object-center"
        />
      </figure>

      <div className="card-body">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle: string, index: number) => (
            <div
              key={index}
              className="badge rounded-xl bg-fitlog-primary p-2.5 text-xs font-bold text-black"
            >
              {muscle}
            </div>
          ))}
        </div>

        {/* Workout name + equipment */}
        <div className="mt-1">
          <h2 className="card-title text-xl font-bold">{workout.name}</h2>

          <p className="mt-1 text-sm text-base-content/60">
            {workout.equipment}
          </p>
        </div>

        <div className="border-t border-gray-700"></div>

        {/* Workout stats */}
        <div className="flex flex-wrap justify-start gap-4">
          <div className="flex items-center gap-1 text-[14px] text-base-content/60">
            <CiStopwatch />
            {workout.duration} min
          </div>

          <div className="flex items-center gap-1 text-[14px] text-base-content/60">
            <FaFire />
            {workout.caloriesBurned} kcal
          </div>

          <div className="flex items-center gap-1 text-[14px] text-base-content/60">
            <CiStar />
            {workout.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
