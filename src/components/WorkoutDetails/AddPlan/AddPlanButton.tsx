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

  const IsTodayPlanFull = (): boolean => planWorkoutData.length >= 5;

  const handleAddPlanButton = (workout: IWorkout) => {
    // Check 5-workout limit
    if (planWorkoutData.length >= 5) {
      toast.warning("Today's plan can contain only 5 workouts", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    // Check duplicate workout
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

    // Add workout
    setPlanWorkoutData((prev) => [...prev, workout]);

    toast.success(`${workout.name} added to plan`, {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <button
      className="btn w-48 rounded-2xl bg-fitlog-primary text-black disabled:cursor-not-allowed disabled:bg-base-300 disabled:text-base-content/40"
      disabled={IsTodayPlanFull()}
      onClick={() => handleAddPlanButton(workout)}
    >
      <FaCalendarPlus />
      Add to today&apos;s plan
    </button>
  );
};

export default AddPlanButton;
