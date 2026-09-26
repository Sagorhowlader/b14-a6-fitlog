import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { CiStopwatch, CiStar } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import DeleteSaveItems from "../DeleteSaveItems";
import MarkAsDone from "../MarkAsDone";

type PlanCardProps = {
  workout: IWorkout;
};

export default function PlanCard({ workout }: PlanCardProps) {
  return (
    <section className="flex flex-col gap-5 rounded-xl bg-base-200 p-4 shadow-sm lg:flex-row lg:items-center">
      {/* Image */}
      <Image
        src={workout.image}
        width={200}
        height={140}
        alt={workout.name}
        className="h-50 w-full rounded-lg object-cover lg:h-35 lg:w-50"
      />

      {/* Text */}
      <div className="flex flex-1 flex-col gap-4">
        <div>
          <h1 className="font-oswald text-xl font-bold uppercase">
            {workout.name}
          </h1>

          <span className="text-sm text-base-content/60">
            {workout.equipment}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-base-content/70">
          <span className="flex items-center gap-1">
            <CiStopwatch className="text-fitlog-primary" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <FaFire className="text-fitlog-primary" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <CiStar className="text-fitlog-primary" />
            {workout.rating}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 lg:items-center">
        <Link
          href={`/workout/${workout.id}`}
          className="btn btn-outline w-full rounded-full border-white/80 sm:w-36"
        >
          View Details
        </Link>

        <MarkAsDone workout={workout} />

        <DeleteSaveItems cardActive="plan" workout={workout}>
          <RxCross1 />
        </DeleteSaveItems>
      </div>
    </section>
  );
}
