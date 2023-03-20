import { Fragment, lazy, Suspense} from "react";
import {Routes, Route, Link} from "react-router-dom";
import AvailableMealsIndian from "./AvailableMealsIndian";
import Loading from "../../assets/Loading.gif"

const AvailableMealsChinese = lazy(()=>import('./AvailableMealsChinese'))

const Meals = () => {
  return (
    <Fragment>
      <div className="text-center space-x-2 my-2">
      <Link to="/"><button className="bg-primary hover:bg-dark-secondary text-secondary hover:text-light-secondary px-5 md:px-10 p-3 rounded-xl cursor-pointer font-bold"
      >Indian</button>
      </Link>
      <Link to='/chinese'>
      <button className="bg-primary hover:bg-dark-secondary text-secondary hover:text-light-secondary px-5 md:px-10 p-3 rounded-xl cursor-pointer font-bold"
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
