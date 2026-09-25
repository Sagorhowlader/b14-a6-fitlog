import MyPlan from "@/components/MyPlan/MyPlan";
import MyPlanTabs from "@/components/MyPlan/MyPlanTabs";

const MyPlanPage = () => {
  return (
    <section className="mx-auto p-6 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">MY PLAN</h1>
        <span className="text-base-content/60">
          Cap of five lifts for today. Finish them, then load more.
        </span>
      </div>
      <MyPlan />
    </section>
  );
};

export default MyPlanPage;
