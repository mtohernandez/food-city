import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const { mealItem, mealName, mealDescription, mealPrice } = classes;

const MealItem = (props) => {
  const { addItem } = useContext(CartContext);

  const { meal } = props;

  const addItemToCartHandler = (amount) => {
    addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
  };

  return (
    <li className={mealItem}>
      <div>
        <h3 className={mealName}>{meal.name}</h3>
        <p className={mealDescription}>{meal.description}</p>
        <div className={mealPrice}>{meal.price}</div>
      </div>
      <MealItemForm id={meal.id} onAddToCart={addItemToCartHandler} />
    </li>
  );
};

export default MealItem;
