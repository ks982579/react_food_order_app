import React, {useContext} from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
// Import styling
import classes from './Cart.module.css';

//get onCloseCart handler
const Cart = props => {
    let cartItemsArray = [{ id: 'c1', name: "Sushi", amount: 2, price: 12.99 }];
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
        return null
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
        return null;
    };

    let cartItemsJSX = cartCtx.items.map((item) => {
        return (<CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}/>);
    });
    
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const showOrderButton = cartCtx.items.length > 0; //to render button only if cart has items

    return (
        <Modal onBackdropClick={props.onCloseCart}>
            <ul className={classes["cart-items"]}>
                {cartItemsJSX}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onCloseCart} className={classes["button--alt"]}>Close</button>
                {showOrderButton && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart