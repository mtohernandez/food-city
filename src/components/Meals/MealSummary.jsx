import classes from "./MealSummary.module.css";

const { titleStyle, titleContainer } = classes;

const MealSummary = (props) => {
  const { icon, title, stats } = props;

  return (
    <div className={titleContainer}>
      <h2 className={titleStyle}>
        <img src={icon} />
        {title}
      </h2>
      {stats && Object.entries(stats).map(([key, value]) => (
        <p key={key}>{key}: {value}</p>
      ))}
    </div>
  );
};

export default MealSummary;
