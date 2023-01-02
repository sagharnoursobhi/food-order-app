import classes from './mealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

export default function MealItemForm(props) {

    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const enteredValue = amountInputRef.current.value;
        const enteredAmountNumber = +enteredValue;

        if(enteredValue.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCard(enteredAmountNumber);
    }

    return(
        <form action="" className={classes.form} onSubmit={onSubmitHandler}>
            <Input label="Amount" ref={amountInputRef} input={{
                id: "amount_" + props.id, 
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1",
            }} />
            <button>Add</button>
            { !amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}