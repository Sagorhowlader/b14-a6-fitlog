"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout.type";
import { useContext } from "react";
import { CiBookmark } from "react-icons/ci";
import { Bounce, toast } from "react-toastify";
type SaveButtonProps = {
  workout: IWorkout;
};
const SaveButton = ({ workout }: SaveButtonProps) => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("SavePlanButton must be used inside WorkoutProvider");
  }
  const { saveWorkoutData, setSaveWorkoutData } = context;
  const handleSavePlanButton = (workout: IWorkout) => {
    const isWorkoutAvailable = saveWorkoutData.find(
      (data) => data.id === workout.id,
    );
    if (isWorkoutAvailable) {
      toast.warning(`${workout.name} is Already in Your Save`, {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    setSaveWorkoutData((prev) => [...prev, workout]);

    toast.success(`${workout.name} added to Save`, {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <button
      className="btn w-48 rounded-2xl bg-black"
      onClick={() => handleSavePlanButton(workout)}
    >
      <CiBookmark />
      Save for later
    </button>
  );
};

export default SaveButton;
