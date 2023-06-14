import classes from "./Input.module.css";
import { forwardRef } from "react";

const { inputStyle, labelStyle } = classes;

const Input = forwardRef((props, ref) => {
  const { label, input } = props;

  return (
    <div className={inputStyle}>
      <label htmlFor={input.id} className={labelStyle}>
        {label}
      </label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
