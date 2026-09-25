import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import DeleteSaveItems from "../DeleteSaveItems";

type PlanCardProps = {
  workout: IWorkout;
};

export default function PlanCard({ workout }: PlanCardProps) {
  return (
    <section className="flex gap-5 rounded-xl bg-base-100 p-4 shadow-sm">
      <div>
        <Image
          src={workout.image}
          width={200}
          height={140}
          alt={workout.name}
          className="h-35 w-50 rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-1 justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-bold">{workout.name}</h1>
            <span className="text-sm text-gray-500">{workout.equipment}</span>
          </div>
          <div className="flex gap-5 text-sm">
            <span>⏱️ {workout.duration}</span>
            <span>🔥 {workout.caloriesBurned}</span>
            <span>⭐ {workout.rating}</span>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <Link href={`/workout/${workout.id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
          <div className="flex justify-center gap-3">
            <button className="btn btn-primary">Mark As Done</button>
          </div>
          <DeleteSaveItems cardActive="plan" workoutId={workout.id}>
            <RxCross1 />
          </DeleteSaveItems>
        </div>
      </div>
    </section>
  );
}
