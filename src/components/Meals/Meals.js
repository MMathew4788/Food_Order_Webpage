import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <section
        className="text-center max-w-xs md:max-w-4xl absolute top-48 mx-auto md:top-90 bg-[#383838] text-white 
        rounded-xl p-4 md:p-10 drop-shadow-xl shadow--[#383838] space-y-3 left-0 right-0">
        <h1 className="text-lg md:text-4xl">Quality Food, Affordable Price</h1>
        <p className=" text-sm md:text-xl">
          Select delicious meal from our wide range of cuisines and enjoy them
          at your home
        </p>
      </section>
      <AvailableMeals/>
    </Fragment>
  );
};

export default Meals;
