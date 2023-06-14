import classes from "./CartItem.module.css";

const {
  cartItem,
  cartItemInside,
  flexContainer,
  nameStyle,
  descriptionStyle,
  priceStyle,
  buttonStyle,
} = classes;

const CartItem = (props) => {
  const { name, description, price, amount, onAdd, onRemove  } = props;

  return (
    <div className={cartItem}>
      <div className={cartItemInside}>
        <h3 className={nameStyle}>{name}</h3>
        <p className={descriptionStyle}>{description}</p>
        <div className={flexContainer}>
          <span className={priceStyle}>${price}</span>
          <span className={priceStyle}>x{amount}</span>
        </div>
        {/* <div className={flexContainer}>
          <span className={descriptionStyle}>$ 3.45</span>
          <span className={descriptionStyle}>tax</span>
        </div> */}
      </div>
      <div className={flexContainer}>
        <button onClick={onAdd} className={buttonStyle}>+</button>
        <button onClick={onRemove} className={buttonStyle}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
