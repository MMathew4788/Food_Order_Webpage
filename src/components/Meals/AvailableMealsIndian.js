import Card from "../UI/Card";
import MealItems from "./MealItems";
import PaneerTikkaMasala from "../../assets/PaneerTikkaMasala.jpeg";
import ButterChicken from "../../assets/ButterChicken.jpeg";
import Biryani from "../../assets/Biryani.jpeg";
import GulabJamun from "../../assets/GulabJamun.jpeg";


const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Paneer Tikka Masala",
    description: "Indian cottage cheese served in a spiced gravy",
    price: 11.50,
    picture: <img src={PaneerTikkaMasala} alt='Paneer Tikka Masala'/>
  },
  {
    id: "m2",
    name: "Butter Chicken",
    description: "Chicken in a tomato gravy, rich in butter",
    price: 10.50,
    picture: <img src={ButterChicken} alt='Butter Chicken'/>
  },
  {
    id: "m3",
    name: "Chicken Biryani",
    description: "A savory chicken and rice dish",
    price: 12.99,
    picture: <img src={Biryani} alt='Biryani'/>
  },
  {
    id: "m4",
    name: "Gulab Jamun",
    description: "A sweet Indian confectionary ",
    price: 5.00,
    picture: <img src={GulabJamun} alt='Gulab Jamuna'/>
  },
];

const AvailableMealsIndian = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItems
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      picture={meal.picture}
    />
  ));
  return (
    <section>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMealsIndian;
