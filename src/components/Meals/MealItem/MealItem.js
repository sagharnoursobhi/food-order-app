import classes from './mealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/CartContext';
import { useContext } from 'react';


export default function MealItem(props) {
    const price = `$${props.item.price.toFixed(2)}`

    const cartCtx = useContext(CartContext);

    const addToCardHandler = (amount) => {
        cartCtx.addItem({
            id: props.item.id,
            name: props.item.name,
            amount: amount,
            price: props.item.price
        })
    }

    return(
        <li className={classes.meal}>
            <div>
                <h3>{ props.item.name }</h3>
                <div className={classes.description}>{ props.item.description }</div>
                <div className={classes.price}>{ price }</div>
            </div>
            <div><MealItemForm id={props.item.id} onAddToCard={addToCardHandler}/></div>
        </li>
    )
}