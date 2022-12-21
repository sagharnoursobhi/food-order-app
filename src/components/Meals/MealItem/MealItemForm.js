import classes from './mealItemForm.module.css';
import Input from '../../UI/Input';

export default function MealItemForm(props) {
    return(
        <form action="" className={classes.form}>
            <Input label="Amount" input={{
                id: "amount_" + props.id, 
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }} />
            <button>Add</button>
        </form>
    )
}