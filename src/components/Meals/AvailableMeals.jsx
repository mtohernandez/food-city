import CardRounded from "../UI/CardRounded";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import meals from "./data";

const { mealsListContainer } = classes;

const AvailableMeals = () => {
  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  return (
    <section className={mealsListContainer}>
      <CardRounded>
        <ul>{mealsList}</ul>
      </CardRounded>
    </section>
  );
};

export default AvailableMeals;
