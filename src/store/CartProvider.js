import React, {useReducer} from "react";
import CartContext from "./cart-context";

let defaultCartState = {
    items: [],
    totalAmount: 0
}

// item: object = {id, name, amount (quantity), price};
// state: list = [items, ...]

const cartReducer = (state, action) => {
    // TYPE = ADD_ITEM
    if(action.type == 'ADD_ITEM'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.item.id;
        });

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        //needs 'price', 'amount'  
        if(existingCartItem) {

            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item); //should have name, quantity, price...
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } 
    // TYPE = ADD_ITEM
    else if(action.type === "REMOVE_ITEM") {
        //getting index of existing item - same as above
        const existingCartItemIndex = state.items.findIndex(item => {
            return item.id === action.id;
        });
        //getting the item itself
        const existingCartItem = state.items[existingCartItemIndex];
        //Updating total cost
        const updatedTotalCost = state.totalAmount - existingCartItem.price;
        //creating variable that will conditionally store values
        let updatedItems;

        /* if there is only 1 item left, we pop it from the array
        * else we will just subtract 1 from the quantity */
        if(existingCartItem.amount === 1){
            //returns a NEW array by applying certain conditions
            updatedItems = state.items.filter(item => {
                return item.id !== action.id;
            })
        } else {
            //copy item into new object and then update the amount
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount-1};
            
            //Create a new items array
            updatedItems = [...state.items];
            //Override the item we are changing
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        //return the newly updated list to update the state
        return {
            items: updatedItems,
            totalAmount: updatedTotalCost
        }
    } else {
        console.log('ACTION DOES NOT EXIST')
    }
    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    
    // Each item has: id, name, amount, price
    const addItemToCartHandler = item =>{
        dispatchCartAction({type: 'ADD_ITEM', item: item})
    };
    const removeItemFromCartHandler = id =>{
        dispatchCartAction({type: 'REMOVE_ITEM', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount, //updated in reducer function
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;