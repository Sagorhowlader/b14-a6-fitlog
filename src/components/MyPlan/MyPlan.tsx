"use client";
import React, { useState } from "react";
import MyPlanStatistics from "./MyPlanStatistics";
import MyPlanTabs from "./MyPlanTabs";
import SortItems from "./MyPlanShared/SortItems";

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  return (
    <div className="flex flex-col gap-2.5">
      <MyPlanStatistics activeTab={activeTab} />
      <div className="flex justify-end">
        <SortItems />
      </div>

      <MyPlanTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default MyPlan;
