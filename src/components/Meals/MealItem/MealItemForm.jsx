import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const { form } = classes;

const MealItemForm = (props) => {
  const { id, onAddToCart } = props;

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    )
      setAmountIsValid(false);

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          type: "number",
          id: "amount" + id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
