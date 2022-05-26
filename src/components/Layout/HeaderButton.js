import React, {useContext, useEffect, useState} from "react";

// Import Components
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

// Import Styling
import classes from './HeaderButton.module.css';

const HeaderButton = props => {
    //A state to controll button animation
    const [animationState, setAnimationState] = useState(false);

    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfItems = cartCtx.items.reduce((currentVal, item)=>{
        return currentVal + item.amount;
    },0);

    //Adding Animation effect
    const btnClasses = `${classes.button} ${animationState ? classes.bump : ''}`;

    //Only change if there is items in Cart and if changed.
    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setAnimationState(true);
        const animeTimer = setTimeout(()=>{
            setAnimationState(false);
        }, 300);

        return () => {
            clearTimeout(animeTimer);
        };
    }, [items]);

    return (
        <button onClick={props.onClick} className={btnClasses}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    );
};

export default HeaderButton;