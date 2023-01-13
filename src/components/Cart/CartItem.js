
const CartItem = (props) => {
  const price = `\u00A3 ${props.price.toFixed(2)}`;

  return (
    <li>
      <div className="flex flex-row justify-between p-2 border-b-2 border-slate-500 ">
      <div className="space-y-2">
        <h2 className="font-bold">{props.name}</h2>
        <div className="space-x-10">
          <span className="text-[#8a2b06] font-semibold">{price}</span>
          <span className="border px-2 py-1">x {props.amount}</span>
        </div>
      </div>
      <div className="space-x-4">
        <button className="px-3 border border-slate-500 rounded-lg" onClick={props.onRemove}>−</button>
        <button className="px-3 border border-slate-500 rounded-lg" onClick={props.onAdd}>+</button>
      </div>
      </div>
    </li>
  );
};

export default CartItem;