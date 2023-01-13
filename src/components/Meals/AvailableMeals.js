import Card from "../UI/Card";
import MealItems from "./MealItems";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Paneer Tikka Masala",
    description: "Indian cottage cheese served in a spiced gravy",
    price: 11.50,
  },
  {
    id: "m2",
    name: "Butter Chicken",
    description: "Chicken in a tomato gravy, rich in butter",
    price: 10.50,
  },
  {
    id: "m3",
    name: "Chicken Biryani",
    description: "A savory chicken and rice dish",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Gulab Jamun",
    description: "A sweet Indian confectionary ",
    price: 5.00,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItems
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
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

export default AvailableMeals;
