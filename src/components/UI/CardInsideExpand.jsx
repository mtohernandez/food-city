import classes from "./CardInsideExpand.module.css";

const { flexContainer } = classes;

const CardInsideExpand = (props) => {
  return (
    <div className={flexContainer}>
      {props.children}
    </div>
  );
};

export default CardInsideExpand;
