import React from "react";

// import components
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";

const Meals = props => {
    return (
        <>
            <MealSummary />
            <AvailableMeals />
        </>
    );
};

export default Meals;