import React from "react";
import OrderPlaced from "../../assets/OrderPlaced.gif";

const OrderPlacedModal = (props) => {
    if(!props.show){
        return null;
    }
  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 bg-black flex items-center justify-center">
      <div className="w-96  bg-slate-300 p-4 text-center flex flex-col items-center justify-center rounded-2xl">
        <img src={OrderPlaced} alt='OrderPlacedImage'/>
        <div className="text-3xl font-bold">ThankYou</div>
        <div className="text-xl font-bold mt-2">for placing your Order!</div>
        <div className="mt-2 text-slate-700">Your meal order has been placed sucessfully, we'll get back to you once it is done. </div>
        <button className="bg-[#8a2b06] mt-6 hover:bg-[#4d1601] text-white px-10 p-3 rounded-xl cursor-pointer"
         onClick={()=>window.location.reload(false)}>Back To Home Page</button>
      </div>
    </div>
  );
};
export default OrderPlacedModal;
