import { Fragment } from "react";
import backgroundimage from "../../assets/background.webp";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <div className="flex flex-col bg-black">
        <div className="flex flex-col md:flex-row bg-black text-white fixed top-0 left-0 
        w-full h-32 py-2 md:h-24 justify-between z-10 items-center px-10">
          <div className="font-bold text-2xl">MATHEW'S</div>
          <div>ONLINE ORDERING</div>
          <HeaderCartButton onClick={props.onShowCart}/>
        </div>
        <div className="w-full h-[20rem] md:h-[28rem] z-0 overflow-hidden object-cover">
          <img src={backgroundimage} 
                alt="Background"
                />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
