import React, { useState, useEffect } from "react";

// Import Styles
import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

// Dummy Data
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const [mealsState, setMealsState] = useState([]);
    console.log("init mealsState -> " + mealsState)
    let mealsJSX = <p key="e1">No Meals...</p>;
    useEffect(() => {
        let data = fetch("./data/dummy_meals.json")
            .then(_response => _response.json())
            .then(_json => setMealsState(_json))
            .catch(error => console.log(error))
    }, []);
    // console.log(mealsState)
    if (mealsState.length > 0) {
        mealsJSX = mealsState.map(data => {
            return <MealItem key={data.id} data={data}/>
        });
    }
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsJSX}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;