import React from "react";

// Import Components
import HeaderButton from "./HeaderButton";
// import styles
import classes from './Header.module.css';
// Import Images
import mealsImg from '../../assets/meals.jpg';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="table full of food!"/>
            </div>
        </>
    );
};

export default Header;