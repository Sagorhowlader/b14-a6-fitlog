import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { FaChevronDown } from "react-icons/fa";

type SortType = "duration" | "calories" | "rating";

const SortItems = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("SortItems must be used inside WorkoutProvider");
  }

  const { setSortBy, sortBy } = context;

  const handleSort = (sortBy: SortType) => {
    setSortBy(sortBy);
  };

  const sortLabel =
    sortBy === "duration"
      ? "Duration"
      : sortBy === "calories"
        ? "Calories"
        : "Rating";

  return (
    <div className="dropdown dropdown-end mt-2.5 mb-2.5">
      <div className="flex items-center gap-2.5">
        <div>Sort By</div>

        <div
          tabIndex={0}
          role="button"
          className="btn min-w-36 justify-between gap-2"
        >
          {sortLabel}
          <FaChevronDown />
        </div>
      </div>

      <ul
        tabIndex={-1}
        className="dropdown-content menu z-10 mt-2 w-56 rounded-box bg-base-200 p-2 shadow-lg"
      >
        <li>
          <button onClick={() => handleSort("duration")}>Duration</button>
        </li>

        <li>
          <button onClick={() => handleSort("calories")}>Calories</button>
        </li>

        <li>
          <button onClick={() => handleSort("rating")}>Rating</button>
        </li>
      </ul>
    </div>
  );
};

export default SortItems;
