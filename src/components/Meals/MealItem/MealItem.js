import React, {useContext} from "react";

// Import components
import MealItemForm from "./MealItemForm";
// Import Context
import CartContext from "../../../store/cart-context";
// Import Styles
import classes from './MealItem.module.css';

const MealItem = props => {
    const {name, description, price, id} = props.data;
    const cartCtx = useContext(CartContext);

    //CREATING CARTITEM object
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        });
    };
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
            </div>
            <div>
                <MealItemForm id={props.data.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default MealItem;