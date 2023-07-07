import { useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import "./AvailableMeals.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvaiableMeals = () => {
  const [cartItems, SetCartItems] = useState([]);

  function onAddItem(ItemName) {
    SetCartItems([...cartItems, ItemName]);
  }

  return (
    <section className="meals">
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return (
              <MealItem
                onAddItem={onAddItem}
                cartItemNumber={cartItems.length}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};
export default AvaiableMeals;
