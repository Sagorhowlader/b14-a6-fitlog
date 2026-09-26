import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { CiStopwatch, CiStar } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import DeleteSaveItems from "../DeleteSaveItems";

type SaveCardProps = {
  saveWorkoutData: IWorkout;
};

export default function SaveCard({ saveWorkoutData }: SaveCardProps) {
  return (
    <section className="flex items-center gap-5 rounded-xl bg-base-200 p-4 shadow-sm">
      {/* Image */}
      <Image
        src={saveWorkoutData.image}
        width={200}
        height={140}
        alt={saveWorkoutData.name}
        className="h-35 w-50 rounded-lg object-cover"
      />

      {/* Text */}
      <div className="flex flex-1 flex-col justify-between gap-4">
        <div>
          <h1 className="text-xl font-oswald font-bold uppercase">
            {saveWorkoutData.name}
          </h1>

          <span className="text-sm text-base-content/60">
            {saveWorkoutData.equipment}
          </span>
        </div>

        <div className="flex gap-5 text-sm text-base-content/70">
          <span className="flex items-center gap-1">
            <CiStopwatch className="text-fitlog-primary" />
            {saveWorkoutData.duration} min
          </span>

          <span className="flex items-center gap-1">
            <FaFire className="text-fitlog-primary" />
            {saveWorkoutData.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <CiStar className="text-fitlog-primary" />
            {saveWorkoutData.rating}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <Link
          href={`/workout/${saveWorkoutData.id}`}
          className="btn btn-outline w-36 rounded-full border-white/80"
        >
          View Details
        </Link>

        <DeleteSaveItems cardActive="save" workout={saveWorkoutData}>
          <RxCross1 />
        </DeleteSaveItems>
      </div>
    </section>
  );
}
