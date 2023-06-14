import classes from "./MealSummary.module.css";

const { titleStyle } = classes;

const MealSummary = (props) => {

  const { icon, title } = props;

  return (
    <h2 className={titleStyle}>
      <img src={icon} />
      {title}
    </h2>
  );
};

export default MealSummary;
