import { Fragment, lazy, Suspense} from "react";
import {Routes, Route, Link} from "react-router-dom";
import AvailableMealsIndian from "./AvailableMealsIndian";
import Loading from "../../assets/Loading.gif"

const AvailableMealsChinese = lazy(()=>import('./AvailableMealsChinese'))

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
      <div className="text-center space-x-2 my-2">
      <Link to="/"><button className="bg-[#8a2b06] hover:bg-[#4d1601] text-white px-10 p-3 rounded-xl cursor-pointer"
      >Indian</button>
      </Link>
      <Link to='/chinese'>
      <button className="bg-[#8a2b06] hover:bg-[#4d1601] text-white px-10 p-3 rounded-xl cursor-pointer"
      >Chinese</button>
      </Link>
      </div>
      <Routes>
      <Route path="/" element={<AvailableMealsIndian/>} />
      <Route path="/chinese" element={<Suspense fallback={<div className="flex justify-center"><img src={Loading} alt='Loading'/></div>}><AvailableMealsChinese/></Suspense>} />
      </Routes>
    </Fragment>
  );
};

export default Meals;
