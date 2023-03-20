import { useDispatch } from "react-redux";
import { uiAction } from "../../store/ui-slice";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `relative pointer justify-between py-2 px-8 flex text-light-secondary font-bold hover:text-secondary ${btnIsHighlighted ? 'animate-bump' : ''}`;

  useEffect(() => {      
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const dispatch = useDispatch();

  const openCartHandler=()=>{
    dispatch(uiAction.toggle());
  }

  return (
    <button className={btnClasses} onClick={openCartHandler}>
      <div className="text-lg md:text-2xl">Your Cart</div>
      <div className="h-8 w-5 ml-4">
        <CartIcon />
      </div>
      <span className="relative w-6 -top-4 right-4 bg-dark-secondary py-0.5 px-1 text-sm rounded-full ml-4 font-bold">{numberOfCartItems}</span>
    </button>
  );
};


export default HeaderCartButton;
