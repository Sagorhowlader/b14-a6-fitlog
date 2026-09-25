"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout.type";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";
type AddPlanButtonProps = {
  workout: IWorkout;
};
const AddPlanButton = ({ workout }: AddPlanButtonProps) => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("AddPlanButton must be used inside WorkoutProvider");
  }
  const { planWorkoutData, setPlanWorkoutData } = context;
  const handleAddPlanButton = (workout: IWorkout) => {
    const isWorkoutAvailable = planWorkoutData.find(
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
    setPlanWorkoutData((prev) => [...prev, workout]);

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
      onClick={() => handleAddPlanButton(workout)}
    >
      Add to today&apos;s plan
    </button>
  );
};

export default AddPlanButton;
