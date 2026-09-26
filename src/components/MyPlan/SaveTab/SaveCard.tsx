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
    <section className="flex flex-col gap-5 rounded-xl bg-base-200 p-4 shadow-sm lg:flex-row lg:items-center">
      {/* Image */}
      <Image
        src={saveWorkoutData.image}
        width={200}
        height={140}
        alt={saveWorkoutData.name}
        className="h-50 w-full rounded-lg object-cover lg:h-35 lg:w-50"
      />

      {/* Text */}
      <div className="flex flex-1 flex-col gap-4">
        <div>
          <h1 className="font-oswald text-xl font-bold uppercase">
            {saveWorkoutData.name}
          </h1>

          <span className="text-sm text-base-content/60">
            {saveWorkoutData.equipment}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-base-content/70">
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
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
        <Link
          href={`/workout/${saveWorkoutData.id}`}
          className="btn btn-outline w-full rounded-full border-white/80 sm:w-36"
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
