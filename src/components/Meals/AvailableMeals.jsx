import { useContext } from "react";
import MealItem from "./MealItem/MealItem";
import meals from "./data";
import MealSummary from "./MealSummary";
import shoppingBag from "../../assets/shoppingbag.svg";
import { CardRounded, CardContainer, CardContainerInside } from "../UI";
import CartContext from "../../store/cart-context";

const AvailableMeals = () => {

  const { items } = useContext(CartContext);

  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  const bestPrice = meals.reduce((acc, meal) => {
    if (meal.price < acc) {
      return meal.price;
    }
    return acc;
  }, meals[0].price);

  const avgPrice = meals.reduce((acc, meal) => {
    return acc + meal.price;
  }, 0) / meals.length;

  return (
    <CardRounded>
      <CardContainer>
        <MealSummary
          title="Products"
          icon={shoppingBag}
          stats={{
            found: meals.length,
            added: items.length,
            bestPrice: "$" + bestPrice,
            avgPrice: "$" + avgPrice.toFixed(2),
          }}
        />
        <CardContainerInside>{mealsList}</CardContainerInside>
      </CardContainer>
    </CardRounded>
  );
};

export default AvailableMeals;
