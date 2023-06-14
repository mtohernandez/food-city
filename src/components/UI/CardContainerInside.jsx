import classes from "./CardContainerInside.module.css";

const { cardContainerInside } = classes;

const CardContainerInside = (props) => {
  return <div className={cardContainerInside}>{props.children}</div>;
};

export default CardContainerInside;
