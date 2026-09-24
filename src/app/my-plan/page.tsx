import React from "react";

const MyPlanPage = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">MY PLAN</h1>
        <span className="text-base-content/60">
          Cap of five lifts for today. Finish them, then load more.
        </span>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-base-200 rounded-2xl p-5">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-base-content/60">
              Exercises
            </span>
            <span className="text-3xl font-bold">0</span>
          </div>
        </div>

        <div className="bg-base-200 rounded-2xl p-5">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-base-content/60">
              Minutes
            </span>
            <span className="text-3xl font-bold">0</span>
          </div>
        </div>

        <div className="bg-base-200 rounded-2xl p-5">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-base-content/60">
              Calories
            </span>
            <span className="text-3xl font-bold">0</span>
          </div>
        </div>
      </div>

      {/* Tabs + Sort */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Tabs */}
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Today"
            defaultChecked
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Completed"
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 2
          </div>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-base-content/60">
            Sort by
          </span>

          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn btn-outline">
              Click ⬇️
            </div>

            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-md border border-base-200"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="min-h-80 rounded-2xl border border-base-300 bg-base-100 flex flex-col items-center justify-center text-center p-8">
        <div className="w-16 h-16 rounded-full bg-base-200 flex items-center justify-center mb-5">
          <span className="text-2xl">🏋️</span>
        </div>

        <h1 className="text-2xl font-bold">NOTHING HERE YET</h1>

        <p className="text-base-content/60 mt-2 max-w-md">
          Browse the library and add a lift to get today moving.
        </p>

        <button className="btn btn-primary mt-6">Go to workouts</button>
      </div>
    </section>
  );
};

export default MyPlanPage;
