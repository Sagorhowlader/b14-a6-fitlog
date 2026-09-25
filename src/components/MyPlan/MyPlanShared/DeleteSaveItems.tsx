"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
type DeleteSaveItemsProps = {
  children: React.ReactNode;
  cardActive: string;
  workoutId: number;
};
const DeleteSaveItems = ({
  children,
  workoutId,
  cardActive,
}: DeleteSaveItemsProps) => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("DeleteSaveItems must be used inside WorkoutProvider");
  }
  const {
    saveWorkoutData,
    planWorkoutData,
    setPlanWorkoutData,
    setSaveWorkoutData,
  } = context;

  const handleDeleteItems = (workoutId: number) => {
    if (cardActive == "plan") {
      const currentPlanWorkoutData = planWorkoutData.filter(
        (planData) => planData.id != workoutId,
      );
      if (currentPlanWorkoutData) {
        setPlanWorkoutData([...currentPlanWorkoutData]);
      }
    }
    if (cardActive == "save") {
      const currentSaveWorkoutData = saveWorkoutData.filter(
        (planData) => planData.id != workoutId,
      );
      if (currentSaveWorkoutData) {
        setSaveWorkoutData([...currentSaveWorkoutData]);
      }
    }
  };
  return (
    <button
      className="btn bg-base-300"
      onClick={() => handleDeleteItems(workoutId)}
    >
      {children}
    </button>
  );
};

export default DeleteSaveItems;
