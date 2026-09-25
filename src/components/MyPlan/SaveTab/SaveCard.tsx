import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import DeleteSaveItems from "../MyPlanShared/DeleteSaveItems";

type SaveCardProps = {
  saveWorkoutData: IWorkout;
};

export default function SaveCard({ saveWorkoutData }: SaveCardProps) {
  return (
    <section className="flex gap-5 rounded-xl bg-base-100 p-4 shadow-sm">
      <div>
        <Image
          src={saveWorkoutData.image}
          width={200}
          height={140}
          alt={saveWorkoutData.name}
          className="h-35 w-50 rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-1 justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-bold">{saveWorkoutData.name}</h1>
            <span className="text-sm text-gray-500">
              {saveWorkoutData.equipment}
            </span>
          </div>
          <div className="flex gap-5 text-sm">
            <span>⏱️ {saveWorkoutData.duration}</span>
            <span>🔥 {saveWorkoutData.caloriesBurned}</span>
            <span>⭐ {saveWorkoutData.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <Link href={`/workout/${saveWorkoutData.id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
          <DeleteSaveItems cardActive="save" workoutId={saveWorkoutData.id}>
            <RxCross1 />
          </DeleteSaveItems>
        </div>
      </div>
    </section>
  );
}
