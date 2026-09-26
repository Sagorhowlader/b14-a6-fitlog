import NotFound from "@/app/not-found";
import AddPlanButton from "@/components/WorkoutDetails/AddPlan/AddPlanButton";
import SaveButton from "@/components/WorkoutDetails/SavePlan/SaveButton";
import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
type WorkoutDetailsPageProps = { params: Promise<{ id: string }> };
const getWorkoutDetails = async (id: string) => {
  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = await response.json();
  if (!response.ok) {
    notFound();
  }
  return data;
};
const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { id } = await params;
  const workoutDetailsData: IWorkout = await getWorkoutDetails(id);
 
  return (
    <>
      {workoutDetailsData ? (
        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 p-7 lg:grid-cols-2">
          {/* Left Side - Image */}
          <div>
            <Image
              src={workoutDetailsData.image}
              width={500}
              height={500}
              alt="Workout Image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Side Content */}
          <div className="w-full flex flex-col gap-5 rounded-2xl shadow-md">
            {/* Title & Description */}
            <div>
              <h1 className="font-oswald text-3xl font-bold text-base-content uppercase">
                {workoutDetailsData.name}
              </h1>
              <p className="text-base-content/60 mt-2 text-lg leading-relaxed">
                {workoutDetailsData.description}
              </p>
            </div>
            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2">
              {workoutDetailsData?.muscleGroups?.map(
                (muscle: string, index: number) => (
                  <div
                    key={index}
                    className="badge rounded-xl bg-fitlog-primary p-2.5 text-xs font-bold text-black"
                  >
                    {muscle}
                  </div>
                ),
              )}
            </div>
            {/* Workout Information */}
            <div className="overflow-hidden rounded-xl border border-base-200">
              <div className="flex justify-between border-b border-gray-700/50 bg-base-200 px-4 py-3">
                <div className="font-medium text-base-content/60">
                  EQUIPMENT
                </div>
                <div className="font-semibold">
                  {workoutDetailsData.equipment}
                </div>
              </div>

              <div className="flex justify-between border-b border-gray-700/50 bg-base-200 px-4 py-3">
                <div className="font-medium text-base-content/60">
                  DIFFICULTY
                </div>
                <div className="font-semibold">
                  {workoutDetailsData.difficulty}
                </div>
              </div>

              <div className="flex justify-between border-b border-gray-700/50 bg-base-200 px-4 py-3">
                <div className="font-medium text-base-content/60">SETS</div>
                <div className="font-semibold">{workoutDetailsData.sets}</div>
              </div>

              <div className="flex justify-between border-b border-gray-700/50 bg-base-200 px-4 py-3">
                <div className="font-medium text-base-content/60">REPS</div>
                <div className="font-semibold">{workoutDetailsData.reps}</div>
              </div>

              <div className="flex justify-between border-b border-gray-700/50 bg-base-200 px-4 py-3">
                <div className="font-medium text-base-content/60">DURATION</div>
                <div className="font-semibold">
                  {workoutDetailsData.duration} min
                </div>
              </div>

              <div className="flex justify-between border-b border-gray-700/50 bg-base-200 px-4 py-3">
                <div className="font-medium text-base-content/60">CALORIES</div>
                <div className="font-semibold">
                  {workoutDetailsData.caloriesBurned} kcal
                </div>
              </div>

              <div className="flex justify-between bg-base-200 px-4 py-3">
                <div className="font-medium text-base-content/60">RATING</div>
                <div className="font-semibold">{workoutDetailsData.rating}</div>
              </div>
            </div>
            {/* Instructions */}
            <div>
              <h2 className="mb-3 text-[16px] font-extrabold">Instructions</h2>

              <ul className="space-y-2">
                {workoutDetailsData?.instructions?.map(
                  (ins: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-3 leading-relaxed text-base-content/70"
                    >
                      <span className="font-bold">{index + 1}.</span>

                      <span>{ins}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <AddPlanButton workout={workoutDetailsData} />
              <SaveButton workout={workoutDetailsData} />
            </div>
          </div>
        </section>
      ) : (
        <NotFound />
      )}
    </>
  );
};
export default WorkoutDetailsPage;
