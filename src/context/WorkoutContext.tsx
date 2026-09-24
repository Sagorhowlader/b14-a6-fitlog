"use client";
import { IWorkout } from "@/types/worksout.type";
import React, { createContext, useState } from "react";
type WorkoutContextProps = {
  children: React.ReactNode;
};
const WorkoutContext = createContext({});
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
