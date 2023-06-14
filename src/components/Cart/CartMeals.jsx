import { useContext } from "react";
import classes from "./CartMeals.module.css";
import CartContext from "../../store/cart-context";

import shoppingCart from "../../assets/shoppingcart.svg";
import CartItem from "./CartItem";

const {
  cartMeals,
  cartMealsTitle,
  cartMealsContainer,
  totalAmountStyle,
  buttonStyle,
} = classes;

const CartMeals = () => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const mealsList = items.map((item) => (
    <CartItem
      name={item.name}
      description={item.description}
      price={item.price}
      amount={item.amount}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));

  return (
    <div className={cartMeals}>
      <h2 className={cartMealsTitle}>
        <img src={shoppingCart} />
        Current Cart
      </h2>
      <div className={cartMealsContainer}>{mealsList}</div>
      <div className={totalAmountStyle}>
        <span>Total Amount (plus tax):</span>
        <span>${totalAmount.toFixed(2)}</span>
        <button className={buttonStyle}>Order Now</button>
      </div>
    </div>
  );
};

export default CartMeals;
