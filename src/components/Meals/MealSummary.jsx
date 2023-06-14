import mealSummary from "./MealSummary.module.css";

const { summary } = mealSummary;

const MealSummary = () => {
  return <section className={summary}>
    <h2>Delicious Food, Delivered To You</h2>
  </section>;
};

export default MealSummary;
