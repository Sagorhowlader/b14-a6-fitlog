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
    <section className="flex items-center gap-5 rounded-xl bg-base-200 p-4 shadow-sm">
      {/* Image */}
      <Image
        src={workout.image}
        width={200}
        height={140}
        alt={workout.name}
        className="h-35 w-50 rounded-lg object-cover"
      />

      {/* Text */}
      <div className="flex flex-1 flex-col justify-between gap-4">
        <div>
          <h1 className="text-xl font-oswald font-bold uppercase">
            {workout.name}
          </h1>

          <span className="text-sm text-base-content/60">
            {workout.equipment}
          </span>
        </div>

        <div className="flex gap-5 text-sm text-base-content/70">
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
      <div className="flex items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="btn btn-outline border-white/80 rounded-full w-36"
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
