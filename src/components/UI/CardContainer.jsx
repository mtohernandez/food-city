import classes from "./CardContainer.module.css";

const { cardContainer } = classes;

const CardContainer = (props) => {
  return <div className={cardContainer}>{props.children}</div>;
};

export default CardContainer;
