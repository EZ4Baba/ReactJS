import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import Card from "../UI/Card";
import "./AvailableMeals.css";
export default function AvailableMeals() {
  const dummyMeals = [];

  const [error, setError] = useState(null);
  const [meals, setMeals] = useState(dummyMeals);
  const [isLoading, setIsLoading] = useState(true);

  const URL =
    "https://react-http-5ef60-default-rtdb.asia-southeast1.firebasedatabase.app/foodItems/meals.json";

  useEffect(() => {
    async function getData() {
      let res = await fetch(URL);
      if (!res.ok) {
        throw new Error("Please check the internet connection...");
      }
      let data = await res.json();
      let loadedMeals = [];
      for (let obj in data) {
        let newmeal = {
          id: obj,
          name: data[obj].name,
          description: data[obj].description,
          price: data[obj].price,
        };
        loadedMeals.push(newmeal);
      }
      setMeals(loadedMeals);
      setIsLoading(false);
      setError(null);
    }
    getData().catch((error) => {
      setError(error.message);
    });

    setIsLoading(false);
  }, [URL]);
  if (isLoading) {
    return <p className="mealIsLoading"> Loading Meals...</p>;
  }
  if (error) {
    return <h3 className="mealError"> {error}</h3>;
  }
  return (
    <>
      <section className="meals">
        <Card>
          <ul>
            {meals.map((meal) => {
              return (
                <MealItem
                  id={meal.id}
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
    </>
  );
}
