"use client";

import React, { useState } from "react";
import MyPlanStatistics from "./MyPlanStatistics";
import MyPlanTabs from "./MyPlanTabs";
import SortItems from "./MyPlanShared/SortItems";
import SearchItems from "./MyPlanShared/SearchItems";

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="flex flex-col gap-2.5">
      <MyPlanStatistics activeTab={activeTab} />

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between lg:justify-end">
        <div className="flex w-full justify-center sm:w-auto">
          <SearchItems searchText={searchText} setSearchText={setSearchText} />
        </div>

        <div className="flex w-full justify-center sm:w-auto sm:justify-end">
          <SortItems />
        </div>
      </div>

      <MyPlanTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchText={searchText}
      />
    </div>
  );
};

export default MyPlan;
