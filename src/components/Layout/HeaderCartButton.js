import { useDispatch } from "react-redux";
import { uiAction } from "../../store/ui-slice";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

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
      <div className={classes.icon}>
        <CartIcon />
      </div>
      <div className="text-2xl">Your Cart</div>
      <span className="bg-[#b94517] py-1 px-4 rounded-xl ml-4 font-bold">{numberOfCartItems}</span>
    </button>
  );
};


export default HeaderCartButton;
