"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout.type";
import { useContext } from "react";
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
      toast.warning(`${workout.name} is already in your plan`, {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    setSaveWorkoutData((prev) => [...prev, workout]);

    toast.success(`${workout.name} added to Plan`, {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <button
      className="btn btn-primary flex-1"
      onClick={() => handleSavePlanButton(workout)}
    >
      Save for later
    </button>
  );
};

export default SaveButton;
