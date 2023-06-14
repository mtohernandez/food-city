import classes from "./ButtonGeneral.module.css";
import { forwardRef } from "react";

const { buttonStyle } = classes;

const ButtonGeneral = forwardRef((props, ref) => {
  const { label, button } = props;

  return (
    <button className={buttonStyle} ref={ref} {...button}>
      {label}
    </button>
  );
});

export default ButtonGeneral;
