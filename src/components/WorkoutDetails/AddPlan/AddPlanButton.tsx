"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout.type";
import { useContext } from "react";
import { FaCalendarPlus } from "react-icons/fa";
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
      toast.warning(`${workout.name} is Already in Your Plan`, {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    setPlanWorkoutData((prev) => [...prev, workout]);

    toast.success(`${workout.name} Added to Plan`, {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <button
      className="btn w-48 bg-fitlog-primary text-black  rounded-2xl"
      onClick={() => handleAddPlanButton(workout)}
    >
      <FaCalendarPlus />
      Add to today&apos;s plan
    </button>
  );
};

export default AddPlanButton;
