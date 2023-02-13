import Card from "../UI/Card";
import MealItems from "./MealItems";
import ChickenDumplings from "../../assets/ChickenDumplings.jpg";
import ChowMein from "../../assets/ChowMein.jpg";
import FriedRice from "../../assets/FriedRice.jpg";
import SpringRoll from "../../assets/SpringRoll.jpg";


const DUMMY_MEALS = [
  {
    id: "c1",
    name: "Chicken Dumplings",
    description: "Tender Steamed dough filled with seasoned chicken",
    price: 7.50,
    picture: <img src={ChickenDumplings} alt='Chicken Dumplings'/>
  },
  {
    id: "c2",
    name: "Chow Mein",
    description: "Stir-fried Chinese noodles with vegetables and protein",
    price: 8.00,
    picture: <img src={ChowMein} alt='Chow Mein'/>
  },
  {
    id: "c3",
    name: "Fried Rice",
    description: "Delicious stir-fried rice with vegetables and eggs",
    price: 10.99,
    picture: <img src={FriedRice} alt='Fried Rice'/>
  },
  {
    id: "c4",
    name: "Spring Roll",
    description: "Crispy wrapped rolls filled with savory minced vegetables",
    price: 9.00,
    picture: <img src={SpringRoll} alt='Spring Roll'/>
  },
];

const AvailableMealsChinese = () => {
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

export default AvailableMealsChinese;
