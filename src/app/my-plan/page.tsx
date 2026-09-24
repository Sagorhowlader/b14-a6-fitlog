import MyPlan from "@/components/MyPlan";
import MyPlanStatistics from "@/components/MyPlanStatistics";
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
      <MyPlanStatistics />
      {/* Sort */}
      <div className="flex items-center justify-end gap-2">
        <span className="text-sm font-medium text-base-content/60">
          Sort by
        </span>

        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-outline btn-sm">
            Latest ↓
          </div>

          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-md border border-base-200"
          >
            <li>
              <a>Latest</a>
            </li>
            <li>
              <a>Duration</a>
            </li>
            <li>
              <a>Calories</a>
            </li>
            <li>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Tabs + Sort */}
      <div className="flex items-center justify-between">
        {/* Tabs */}
        <div className="tabs tabs-lift w-full">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Today's Plan"
            defaultChecked
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            <MyPlan />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Saved"
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div>Saved workouts</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPlanPage;
