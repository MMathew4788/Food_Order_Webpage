import { Fragment } from "react";
import backgroundimage from "../../assets/background.webp";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../assets/Logo.png";

const Header = (props) => {
  return (
    <Fragment>
      <div className="flex flex-col bg-black">
        <div
          className="flex flex-col md:flex-row bg-black text-white fixed top-0 left-0 
        w-full h-[11rem] md:h-24 justify-between z-10 items-center py-2 px-6 md:px-16"
        >
            <img src={logo} alt="Logo" className="h-16 md:h-20" />
            <div className="flex text-lg md:text-2xl items-center justify-center -mt-2 mb-2 md:mb-0 md:mt-0">ONLINE ORDERING</div>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
        <div className="w-full h-[28rem] pt-24 md:pt-0 z-0 overflow-hidden object-cover">
          <img src={backgroundimage} alt="Background" />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
