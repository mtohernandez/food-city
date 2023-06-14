import { useContext } from "react";
import classes from "./CartMeals.module.css";
import CartContext from "../../store/cart-context";

const { cartMeals } = classes;

const CartMeals = () => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  }

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  }

  const mealsList = items.map((item) => (
    <li key={item.id}>
      {item.name} - {item.price} - {item.amount}
      <button onClick={cartItemAddHandler.bind(null, item)}>+</button>
      <button onClick={cartItemRemoveHandler.bind(null, item.id)}>-</button>
    </li>
  ));

  return (
    <div className={cartMeals}>
      {mealsList}
      <div>
        <span>Total Amount </span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartMeals;
