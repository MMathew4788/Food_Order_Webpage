
const CartItem = (props) => {
  const price = `\u00A3 ${props.price.toFixed(2)}`;

  return (
    <li>
      <div className="flex flex-row justify-between p-2 border-b-2 border-primary ">
      <div className="space-y-2">
        <h2 className="font-bold">{props.name}</h2>
        <div className="space-x-10">
          <span className="text-primary font-semibold">{price}</span>
        </div>
      </div>
      <div className="space-x-4 my-auto">
        <button className="px-3 border border-primary rounded-lg text-primary font-semibold" onClick={props.onRemove}>−</button>
        <span className="px-2 font-semibold py-1">{props.amount}</span>
        <button className="px-3 border border-primary rounded-lg text-primary font-semibold" onClick={props.onAdd}>+</button>
      </div>
      </div>
    </li>
  );
};

export default CartItem;