import { useState, useEffect, Fragment } from "react";
import backgroundimage from "../../assets/background.webp";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../assets/Logo.png";
import Carousel from "../UI/Carousel";

const Header = (props) => {
  const [hasLoaded, setHasLoaded] = useState(true);
  useEffect(() => {
    setHasLoaded(false);
  }, []);

  return (
    <Fragment>
      <div className="flex flex-col mx-0">
        <div
          className="flex flex-col md:flex-row bg-primary text-light-secondary font-bold fixed top-0 left-0 
        w-full h-[8rem] md:h-24 justify-between z-10 items-center py-2 px-6 md:px-16"
        >
          <img
            src={logo}
            alt="Logo"
            className={`h-14 md:h-20 transition-all duration-1000 ease-in-out ${
              hasLoaded
                ? " -translate-x-20 opacity-0 rotate-45"
                : "translate-x-0 opacity-100 rotate-0"
            }`}
          />
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
        <div className="flex relative w-full max-h-[40rem] mt-[8rem] md:mt-0 z-0 overflow-hidden">
          <img
            src={backgroundimage}
            alt="Background"
            className="object-cover w-full"
          />
          <section
            className="flex flex-col absolute z-10 top-[20%] md:top-[30%] text-center max-w-[80%] md:max-w-4xl mx-auto text-light-secondary 
        rounded-xl p-4 md:p-10 drop-shadow-xl shadow--[#383838] space-y-3 left-0 right-0 bg-primary bg-opacity-50 "
          >
            <h1 className="text-4xl md:text-7xl font-Lobster">
              <Carousel
                textItems={[
                  "Quality Food",
                  "Affordable Price",
                  "Delicious cuisine",
                ]}
                delay={2000}
              />
            </h1>
            <p className="text-lg md:text-3xl font-poppins">
              Select delicious meal from our wide range of cuisines and enjoy
              them at your home
            </p>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
