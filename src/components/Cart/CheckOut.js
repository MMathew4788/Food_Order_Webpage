import { useState, useContext } from "react";
import OrderPlacedModal from './OrderPlacedModal';
import StripeCheckout from "react-stripe-checkout";
import CartContext from "../../store/cart-context";

const Checkout = (props) => {
    
    const confirmHandler = (event) => {
      event.preventDefault();
      
      props.onConfirm({
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        postalCode: document.getElementById("postal").value,
        phoneNumber: document.getElementById("phoneNumber").value
      });
    };

    console.log()
    const [showOrderPlaced,setshowOrderPlaced] = useState(false);
    
    //Extracting the amount
    const cartCtx = useContext(CartContext);
    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

    const [custName, setCustName]=useState('')
    const handleChange = (event) => {
      setCustName(event.target.value);
    };
    
    const makePayment = async token =>{
      const body={
        token,
        totalAmount,
        custName       
      }
      const headers ={
        "content-Type":"application/json"
      }

      try {
        const response = await fetch(`http://localhost:8282/payment`, {
          method: "POST",
          headers,
          body: JSON.stringify(body)
        });
        setshowOrderPlaced(true);
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      } catch (error) {
        return console.log(error);
      }
    }

    console.log(process.env.REACT_APP_PUBLISHABLE_KEY)
        
    return (
      <form  onSubmit={confirmHandler} className="space-y-3 mt-2 border border-[#4d1601] rounded-lg p-1 h-60 overflow-y-auto">
        <div className="text-lg font-bold text-center text-[#4d1601]">Please enter the details and place your order</div>
        <div className="mx-2 my-1 space-y-1">
          <label htmlFor='name' className="font-bold">Your Name</label>
          <input type='text' id='name' className="w-full" placeholder="Please enter your Name" value={custName} onChange={handleChange} required/>
        </div>
        <div className="mx-2 my-1 space-y-1">
          <label htmlFor='address' className="font-bold">Address</label>
          <input type='text' id='street' className="w-full" placeholder="Please enter your Address" required/>
        </div>
        <div className="mx-2 my-1 space-y-1">
          <label htmlFor='postal' className="font-bold">Postal Code</label>
          <input type='text' id='postal'className="w-full" placeholder="Please enter the Postal Code" required/>
        </div>
        <div className="mx-2 my-1 space-y-1">
          <label htmlFor='phoneNumber' className="font-bold">Mobile Number</label>
          <input type='number' id='city' className="w-full" placeholder="Please enter your mobile number" required/>
        </div>
        <div className="flex flex-row justify-between p-2">
          <button type='button' onClick={props.onCancel}
            className="text-primary hover:bg-primary hover:text-secondary border border-primary p-3 rounded-xl cursor-pointer">
            Cancel
          </button>
          <StripeCheckout stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY} token={makePayment} name="Place Your Order" amount={totalAmount*100} currency="gbp">
          <button className="bg-primary hover:bg-dark-secondary text-secondary hover:text-light-secondary px-10 p-3 rounded-xl cursor-pointer">Place Order</button>
          </StripeCheckout>
        </div>
        <OrderPlacedModal show={showOrderPlaced}/>
      </form>
    );
  };
  
  export default Checkout;