import { useState } from "react";
import OrderPlacedModal from './OrderPlacedModal';

const Checkout = (props) => {
    const confirmHandler = (event) => {
      event.preventDefault();
      setshowOrderPlaced(true);

      props.onConfirm({
        name: document.getElementById("name").value,
        street: document.getElementById("street").value,
        city: document.getElementById("city").value,
        postalCode: document.getElementById("postal").value
      });
    };

    const [showOrderPlaced,setshowOrderPlaced] = useState(false);
    
    return (
      <form  onSubmit={confirmHandler} className="space-y-3 mt-2 border border-primary rounded-lg p-1 h-60 overflow-y-auto">
        <div className="text-lg font-bold text-center text-primary">Please enter the details and confirm your order</div>
        <div className="mx-2 my-1 space-y-1">
          <label htmlFor='name' className="font-bold">Name</label>
          <input type='text' id='name' className="w-full" placeholder="Please enter your Name" required/>
        </div>
        <div className="mx-2 my-1 space-y-1">
          <label htmlFor='street' className="font-bold">Address</label>
          <input type='text' id='street' className="w-full" placeholder="Please enter your Address" required/>
        </div>
        <div className="mx-2 my-1 space-y-1">
          <label htmlFor='postal' className="font-bold">Postal Code</label>
          <input type='text' id='postal'className="w-full" placeholder="Please enter your Postal Code" required/>
        </div>
        <div className="mx-2 my-1 space-y-1">
          <label htmlFor='city' className="font-bold">Contact Number</label>
          <input type='number' id='city' className="w-full" placeholder="Please enter your Contact Number" required/>
        </div>
        <div className="flex flex-row justify-between p-2">
          <button type='button' onClick={props.onCancel}
            className="text-primary hover:bg-primary hover:text-secondary border border-primary p-3 rounded-xl cursor-pointer">
            Cancel
          </button>
          <button className="bg-primary hover:bg-dark-secondary text-secondary hover:text-light-secondary px-10 p-3 rounded-xl cursor-pointer">Confirm</button>
        </div>
        <OrderPlacedModal show={showOrderPlaced}/>
      </form>
    );
  };
  
  export default Checkout;