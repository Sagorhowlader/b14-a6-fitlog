"use client";

import { IWorkout } from "@/types/workout.type";
import React, { createContext, useState } from "react";

type WorkoutContextProps = {
  children: React.ReactNode;
};

type SortType = "duration" | "calories" | "rating";

type WorkoutContextType = {
  planWorkoutData: IWorkout[];
  setPlanWorkoutData: React.Dispatch<React.SetStateAction<IWorkout[]>>;

  saveWorkoutData: IWorkout[];
  setSaveWorkoutData: React.Dispatch<React.SetStateAction<IWorkout[]>>;

  sortBy: SortType;
  setSortBy: React.Dispatch<React.SetStateAction<SortType>>;
};

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children }: WorkoutContextProps) => {
  const [planWorkoutData, setPlanWorkoutData] = useState<IWorkout[]>([]);
  const [saveWorkoutData, setSaveWorkoutData] = useState<IWorkout[]>([]);
  const [sortBy, setSortBy] = useState<SortType>("duration");

  const shareData = {
    planWorkoutData,
    setPlanWorkoutData,
    saveWorkoutData,
    setSaveWorkoutData,
    sortBy,
    setSortBy,
  };

  return (
    <WorkoutContext.Provider value={shareData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
