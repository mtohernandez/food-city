import classes from "./CartItem.module.css";
import { ButtonGeneral, CardInsideExpand } from "../UI";

const {
  cartItem,
  cartItemInside,
  nameStyle,
  descriptionStyle,
  priceStyle,
} = classes;

const CartItem = (props) => {
  const { name, description, price, tax, amount, onAdd, onRemove } = props;

  return (
    <div className={cartItem}>
      <div className={cartItemInside}>
        <h3 className={nameStyle}>{name}</h3>
        <p className={descriptionStyle}>{description}</p>
        <CardInsideExpand>
          <span className={priceStyle}>${price}</span>
          <span className={priceStyle}>x{amount}</span>
        </CardInsideExpand>
        <CardInsideExpand>
          <span className={descriptionStyle}>${tax}</span>
          <span className={descriptionStyle}>tax</span>
        </CardInsideExpand>
      </div>
      <CardInsideExpand>
        <ButtonGeneral label="+" button={{ onClick: onAdd }} />
        <ButtonGeneral label="-" button={{ onClick: onRemove }} />
      </CardInsideExpand>
    </div>
  );
};

export default CartItem;
