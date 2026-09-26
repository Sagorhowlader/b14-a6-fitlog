"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

type MarkAsDoneProps = {
  workout: IWorkout;
};

const MarkAsDone = ({ workout }: MarkAsDoneProps) => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("DeleteSaveItems must be used inside WorkoutProvider");
  }
  const { planWorkoutData, setPlanWorkoutData } = context;
  const handleMarkAsDone = () => {
    const currentPlanWorkoutData = planWorkoutData.filter(
      (planData) => planData.id != workout.id,
    );
    if (currentPlanWorkoutData) {
      setPlanWorkoutData([...currentPlanWorkoutData]);
    }
    toast.success(`${workout.name} marked as done!`, {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <button
      onClick={handleMarkAsDone}
      className="btn w-36 rounded-full bg-fitlog-primary text-black hover:bg-fitlog-primary/80"
    >
      <FaCheck />
      Mark As Done
    </button>
  );
};

export default MarkAsDone;
