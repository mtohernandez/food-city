import MealItem from "./MealItem/MealItem";
import meals from "./data";
import MealSummary from "./MealSummary";
import shoppingBag from "../../assets/shoppingbag.svg";
import { CardRounded, CardContainer, CardContainerInside } from "../UI";

const AvailableMeals = () => {
  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  return (
    <CardRounded>
      <CardContainer>
        <MealSummary title="Products" icon={shoppingBag} />
        <CardContainerInside>{mealsList}</CardContainerInside>
      </CardContainer>
    </CardRounded>
  );
};

export default AvailableMeals;
