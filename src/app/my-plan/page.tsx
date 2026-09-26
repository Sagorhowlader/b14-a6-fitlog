import MyPlan from "@/components/MyPlan/MyPlan";

const MyPlanPage = () => {
  return (
    <section className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="text-center lg:text-left">
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
