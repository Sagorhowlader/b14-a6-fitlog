import MyPlan from "@/components/MyPlan/MyPlan";
import MyPlanTabs from "@/components/MyPlan/MyPlanTabs";

const MyPlanPage = () => {
  return (
    <section className="p-8 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="font-oswald text-3xl font-bold">MY PLAN</h1>
        <span className="text-[16px] text-base-content/60">
          Cap of five lifts for today. Finish them, then load more.
        </span>
      </div>
      <MyPlan />
    </section>
  );
};

export default MyPlanPage;
