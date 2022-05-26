import React from "react";

// Import Styles
import classes from './MealSummary.module.css';

const MealSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food Delivered to You</h2>
            <p>
                Choose your favourite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All of our meals are cooked with high-quality ingredients, just-in-time and 
                of course by experienced chefs!
            </p>
        </section>
    );
};

export default MealSummary;