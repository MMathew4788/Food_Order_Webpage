import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import CheckOut from "./CheckOut";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async(userData) => {
    await fetch('https://foodapp-bfa01-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    });
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className="flex flex-col justify-between">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className="flex flex-row justify-between p-2">
      <button
        onClick={props.onClose}
        className="bg-white hover:bg-[#4d1601] text-[#4d1601] border border-[#8a2b06] hover:text-white p-3 rounded-xl cursor-pointer"
      >
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className="bg-[#8a2b06] hover:bg-[#4d1601] text-white px-10 p-3 rounded-xl cursor-pointer">
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className="text-center font-bold text-2xl mb-3"> Your Order</div>
      <div className="flex flex-col h-60 overflow-y-auto">{cartItems}</div>
      <div className="flex justify-between items-center font-bold text-xl mx-2">
        <span className="mt-4">Total Amount</span>
        <div>&#163; {totalAmount}</div>
      </div>
      {isCheckout && <CheckOut onConfirm={submitOrderHandler} onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
