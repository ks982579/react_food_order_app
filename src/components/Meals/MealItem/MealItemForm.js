import React, {useState, useRef} from "react";

// Import Components
import Input from "../../UI/Input";

// Import Styling
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const amountInputRef = useRef();
    const [amountValidState, setAmountValidState] = useState(true);

    const submitFormHandler = event => {
        event.preventDefault();

        let enteredAmount = amountInputRef.current.value; 
        let enteredAmountInt = +enteredAmount; //+ sign changes to number

        //validation
        if(enteredAmount.trim().length === 0 || enteredAmountInt < 1 || enteredAmountInt >5){
            setAmountValidState(false);
            return null;
        } else {
            props.onAddToCart(enteredAmountInt);
        }
    };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <Input label="Amount" ref={amountInputRef} input={{
                id: 'amount'+props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+ Add</button>
            {!amountValidState && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;