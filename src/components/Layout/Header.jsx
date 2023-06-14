import { useContext } from "react";
import classes from "./Header.module.css";
import CartContext from "../../store/cart-context";
import { HeaderCartButton } from "./HeaderCartButton";

const { header, headerTitle, burguerMenu, burguerMenuItems, headerInput } =
classes;

const Header = () => {

  const cartContext = useContext(CartContext);

  const { items } = cartContext;


  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <header className={header}>
      <h1 className={headerTitle}>Food City</h1>
      <button className={burguerMenu}>Menu</button>
      <div className={burguerMenuItems}>
        <input className={headerInput} type="text" placeholder="Search" />
        <HeaderCartButton onClick={() => {}} items={numberOfCartItems}/>
      </div>
    </header>
  );
};

export default Header;
