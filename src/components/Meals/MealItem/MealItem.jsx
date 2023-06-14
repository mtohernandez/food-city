import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";

import arrowUp from "../../../assets/arrowUp.svg";

const { mealItem, mealName, mealDescription, mealPrice, mealPriceContainer, mealImage } = classes;

const MealItem = (props) => {
  const { addItem } = useContext(CartContext);

  const { meal } = props;

  const addItemToCartHandler = (amount) => {
    addItem({
      id: meal.id,
      description: meal.description,
      name: meal.name,
      price: meal.price,
      tax: meal.tax,
      amount: amount,
    });
  };

  return (
    <li className={mealItem} onClick={() => addItemToCartHandler(1)} >
      <div>
        <div className={mealPriceContainer}>
          <span className={mealPrice}>{meal.price}</span>
          <img src={arrowUp} alt="arrow up" />
        </div>
        <h3 className={mealName}>{meal.name}</h3>
        <p className={mealDescription}>{meal.description}</p>
      </div>
      <img className={mealImage} src={meal.imageUrl} alt={meal.name} />
    </li>
  );
};

export default MealItem;
