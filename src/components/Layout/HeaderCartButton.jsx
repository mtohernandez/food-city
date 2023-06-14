import classes from "./HeaderCartButton.module.css";

const { button, icon, title, badge } = classes;

export const HeaderCartButton = (props) => {

  const { onClick, items } = props;

  // To implement the bump animation or any animation, 
  // use effect is needed to add and remove a class

  return (
    <button className={button} onClick={onClick}>
      <span className={icon}>CartIcon</span>
      <span className={title}>Cart Items</span>
      <span className={badge}>{items}</span>
    </button>
  );
};
