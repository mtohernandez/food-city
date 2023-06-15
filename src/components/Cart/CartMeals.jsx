import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { MealSummary } from "../Meals";
import shoppingCart from "../../assets/shoppingcart.svg";
import CartItem from "./CartItem";
import {
  CardContainer,
  CardRounded,
  CardContainerInside,
  ButtonGeneral,
} from "../UI";

import classes from "./CartMeals.module.css";

const { totalAmountStyle, noItemStyle } = classes;

const CartMeals = () => {
  const { items, totalAmount, addItem, removeItem, clearCart } =
    useContext(CartContext);

  const orderHandler = () => {
    clearCart();
  };

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const mealsList = items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      tax={item.tax}
      amount={item.amount}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));

  return (
    <CardRounded flex={1}>
      <CardContainer>
        <MealSummary title="Current Cart" icon={shoppingCart} />
        {mealsList.length === 0 && <p className={noItemStyle}>No items yet.</p>}
        <CardContainerInside>{mealsList}</CardContainerInside>
        <div className={totalAmountStyle}>
          <span>Total Amount (plus tax):</span>
          <span>${totalAmount.toFixed(2)}</span>
          <ButtonGeneral label="Order" button={{ onClick: orderHandler }} />
        </div>
      </CardContainer>
    </CardRounded>
  );
};

export default CartMeals;
