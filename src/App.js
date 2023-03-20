import { useSelector, useDispatch } from "react-redux";
import uiSlice from "./store/ui-slice";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CardProvider from "./store/CardProvider";

function App() {
 
  const dispatch = useDispatch();
  const CartHandler=()=>{
    dispatch(uiSlice.actions.toggle());
  };

  const showCart = useSelector(state=>state.ui.cartIsVisible)

  return (
    <CardProvider>
      <div className="bg-neutral">
        {showCart && <Cart onClose={CartHandler}/>}
        <Header onShowCart={CartHandler}/>
        <main>
          <Meals/>
        </main>
      </div>
    </CardProvider>
  );
}

export default App;
