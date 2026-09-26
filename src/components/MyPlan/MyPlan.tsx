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

      <div className="flex items-center justify-center lg:justify-end gap-5">
        <SearchItems searchText={searchText} setSearchText={setSearchText} />
        <SortItems />
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
