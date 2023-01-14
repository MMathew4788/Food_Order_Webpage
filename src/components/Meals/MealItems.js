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
    <li className="flex flex-col md:flex-row justify-between border-b-2 border-slate-500">
      <div className="flex flex-col md:flex-row">
        <div className="mt-2 md:w-20 md:h-20 md:my-auto">{props.picture}</div>
        <div className="flex flex-col justify-between m-4">
          <div className="text-base md:text-xl font-bold">{props.name}</div>
          <div className="text-base md:text-xl">{props.description}</div>
          <div className="font-bold text-[#8a2b06] ">{price}</div>
        </div>
      </div>
      <div className="py-2">
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItems;
