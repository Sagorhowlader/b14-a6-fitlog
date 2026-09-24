"use client";
import { IWorkout } from "@/types/workout.type";
import React, { createContext, useState } from "react";
type WorkoutContextType = {
  planWorkoutData: IWorkout[];
  setPlanWorkoutData: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saveWorkoutData: IWorkout[];
  setSaveWorkoutData: React.Dispatch<React.SetStateAction<IWorkout[]>>;
};
type WorkoutContextProps = {
  children: React.ReactNode;
};
export const WorkoutContext = createContext<WorkoutContextType | null>(null);
const WorkoutProvider = ({ children }: WorkoutContextProps) => {
  const [planWorkoutData, setPlanWorkoutData] = useState<IWorkout[]>([]);
  const [saveWorkoutData, setSaveWorkoutData] = useState<IWorkout[]>([]);
  const shareData = {
    planWorkoutData,
    setPlanWorkoutData,
    saveWorkoutData,
    setSaveWorkoutData,
  };
  return (
    <WorkoutContext.Provider value={shareData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
