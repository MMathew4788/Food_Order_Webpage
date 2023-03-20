import { useRef, useState } from "react";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-row mx-auto md:flex-col md:space-y-2 ml-4"
    >
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button className="cursor-pointer rounded-xl ml-4 p-2 px-4 font-semibold bg-primary hover:bg-dark-secondary text-secondary hover:text-light-secondary text-center">
        Add to Cart
      </button>
      {!amountIsValid && <p>Please Enter a valid Amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
