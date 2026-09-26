"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";
type DeleteSaveItemsProps = {
  children: React.ReactNode;
  cardActive: string;
  workout: IWorkout;
};
const DeleteSaveItems = ({
  children,
  workout,
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

  const handleDeleteItems = (workout: IWorkout) => {
    if (cardActive == "plan") {
      const currentPlanWorkoutData = planWorkoutData.filter(
        (planData) => planData.id != workout.id,
      );
      if (currentPlanWorkoutData) {
        setPlanWorkoutData([...currentPlanWorkoutData]);
      }
      toast.success(`${workout.name} removed from ${cardActive}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    }
    if (cardActive == "save") {
      const currentSaveWorkoutData = saveWorkoutData.filter(
        (planData) => planData.id != workout.id,
      );
      if (currentSaveWorkoutData) {
        setSaveWorkoutData([...currentSaveWorkoutData]);
      }
      toast.success(
        `${workout.name} removed from ${cardActive.toUpperCase()}`,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        },
      );
    }
  };
  return (
    <button
      className="btn bg-base-300"
      onClick={() => handleDeleteItems(workout)}
    >
      {children}
    </button>
  );
};

export default DeleteSaveItems;
