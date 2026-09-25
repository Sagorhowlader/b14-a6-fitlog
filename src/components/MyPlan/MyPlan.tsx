"use client";
import React, { useContext, useState } from "react";
import MyPlanCard from "./PlanTab/PlanCard";
import { WorkoutContext } from "@/context/WorkoutContext";
import MyPlanStatistics from "./MyPlanStatistics";
import MyPlanTabs from "./MyPlanTabs";

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const handleTab = (tab: "plan" | "saved") => {
    setActiveTab(tab);
  };

  return (
    <div>
      <MyPlanStatistics activeTab={activeTab} />
      <MyPlanTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default MyPlan;
