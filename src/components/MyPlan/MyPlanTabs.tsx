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
      {/* Toggle Tabs */}
      <div className="flex w-fit self-center gap-1 rounded-full bg-base-300 p-1 lg:self-start">
        <button
          onClick={() => setActiveTab("plan")}
          className={`btn rounded-full border-0 px-6 shadow-none ${
            activeTab === "plan"
              ? "bg-base-100 text-base-content"
              : "bg-transparent text-base-content/70 hover:bg-transparent"
          }`}
        >
          Today&apos;s Plan
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`btn rounded-full border-0 px-6 shadow-none ${
            activeTab === "saved"
              ? "bg-base-100 text-base-content"
              : "bg-transparent text-base-content/70 hover:bg-transparent"
          }`}
        >
          Saved
        </button>
      </div>

      {/* Tab Content */}
      <div>{activeTab === "plan" ? <PlanTab /> : <SaveTab />}</div>
    </div>
  );
};

export default MyPlanTabs;
