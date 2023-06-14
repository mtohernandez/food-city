import classes from "./CardRounded.module.css";

const { rounded } = classes;

const CardRounded = (props) => {
  return <div className={rounded}>{props.children}</div>;
};

export default CardRounded;
