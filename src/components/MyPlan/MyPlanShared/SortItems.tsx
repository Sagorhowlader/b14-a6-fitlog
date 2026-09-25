import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { FaChevronDown } from "react-icons/fa";

const SortItems = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("SortItems must be used inside WorkoutProvider");
  }
  const { setSortBy } = context;
  const handleSort = (sortBy: string) => {
    setSortBy(sortBy);
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-outline gap-2">
        Sort by
        <FaChevronDown />
      </div>

      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-200 rounded-box z-10 mt-2 w-56 border border-base-300 p-2 shadow-lg"
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
