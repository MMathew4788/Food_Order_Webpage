import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItems = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `\u00A3 ${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="flex flex-col md:flex-row justify-between border-b-2 border-primary">
      <div className="flex flex-row">
        <div className="mt-2 w-full md:w-20 md:h-20 py-4 mx-auto">{props.picture}</div>
        <div className="flex flex-col w-full justify-between m-4">
          <div className="text-center md:text-left md:mx-0 text text-xl font-bold">{props.name}</div>
          <div className="text-lg mx-auto md:mx-0 text-center md:text-left">{props.description}</div>
          <div className="font-bold text-xl text-[#8a2b06] mx-auto md:mx-0">{price}</div>
        </div>
      </div>
      <div className="py-2 mx-auto md:mx-0">
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItems;
