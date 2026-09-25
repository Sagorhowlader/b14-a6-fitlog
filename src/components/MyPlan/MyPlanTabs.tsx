"use client";

import React from "react";

import PlanTab from "./PlanTab/PlanTab";
import SaveTab from "./SaveTab/SaveTab";
type MyPlanTabsProps = {
  activeTab: "plan" | "saved";
  setActiveTab: React.Dispatch<React.SetStateAction<"plan" | "saved">>;
};
const MyPlanTabs = ({ activeTab, setActiveTab }: MyPlanTabsProps) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Tabs */}
      <div className="tabs tabs-lift w-full">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
          checked={activeTab === "plan"}
          onChange={() => setActiveTab("plan")}
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          <PlanTab />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          checked={activeTab === "saved"}
          onChange={() => setActiveTab("saved")}
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          <SaveTab />
        </div>
      </div>
    </div>
  );
};

export default MyPlanTabs;
