import { IWorkout } from "@/types/worksout.type";
import Image from "next/image";
import React from "react";
type WorkoutDetailsPageProps = { params: Promise<{ id: string }> };
const getWorkoutDetails = async (id: string) => {
  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = await response.json();
  return data;
};
const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { id } = await params;
  const workoutDetailsData: IWorkout = await getWorkoutDetails(id);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-7 max-w-6xl mx-auto">
      {/* Left Side - Image */}
      <div className="rounded-2xl overflow-hidden bg-base-200 shadow-md">
        <Image
          src={workoutDetailsData.image}
          width={500}
          height={500}
          alt="Workout Image"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Right Side Content */}
      <div className="flex flex-col gap-5 bg-base-100 rounded-2xl p-6 shadow-md border border-base-200">
        {/* Title & Description */}
        <div>
          <h1 className="text-3xl font-bold text-base-content">
            {workoutDetailsData.name}
          </h1>
          <p className="text-base-content/60 mt-2 leading-relaxed">
            {workoutDetailsData.description}
          </p>
        </div>
        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {workoutDetailsData.muscleGroups.map(
            (muscle: string, index: number) => (
              <div
                key={index}
                className="badge badge-primary font-medium px-3 py-3"
              >
                {muscle}
              </div>
            ),
          )}
        </div>
        {/* Workout Information */}
        <div className="rounded-xl border border-base-200 overflow-hidden">
          <div className="flex justify-between px-4 py-3 bg-base-200/50">
            <div className="font-medium text-base-content/60">EQUIPMENT</div>
            <div className="font-semibold">{workoutDetailsData.equipment}</div>
          </div>
          <div className="flex justify-between px-4 py-3">
            <div className="font-medium text-base-content/60">DIFFICULTY</div>
            <div className="font-semibold">{workoutDetailsData.difficulty}</div>
          </div>
          <div className="flex justify-between px-4 py-3 bg-base-200/50">
            <div className="font-medium text-base-content/60"> SETS </div>
            <div className="font-semibold">{workoutDetailsData.sets}</div>
          </div>
          <div className="flex justify-between px-4 py-3">
            <div className="font-medium text-base-content/60"> REPS </div>
            <div className="font-semibold">{workoutDetailsData.reps}</div>
          </div>
          <div className="flex justify-between px-4 py-3 bg-base-200/50">
            <div className="font-medium text-base-content/60">DURATION</div>
            <div className="font-semibold">{workoutDetailsData.duration}</div>
          </div>
          <div className="flex justify-between px-4 py-3">
            <div className="font-medium text-base-content/60">CALORIES</div>
            <div className="font-semibold">
              {workoutDetailsData.caloriesBurned}
            </div>
          </div>
          <div className="flex justify-between px-4 py-3 bg-base-200/50">
            <div className="font-medium text-base-content/60">RATING</div>
            <div className="font-semibold">{workoutDetailsData.rating}</div>
          </div>
        </div>
        {/* Instructions */}
        <div>
          <h2 className="text-xl font-bold mb-3"> Instructions </h2>
          <ul className="space-y-2">
            {workoutDetailsData.instructions.map(
              (ins: string, index: number) => (
                <li
                  key={index}
                  className="flex gap-3 text-base-content/70 leading-relaxed"
                >
                  {ins}
                </li>
              ),
            )}
          </ul>
        </div>
        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="btn btn-primary flex-1">
            Add to today&apos;s plan
          </button>
          <button className="btn btn-outline btn-secondary flex-1">
            Save for later
          </button>
        </div>
      </div>
    </section>
  );
};
export default WorkoutDetailsPage;
