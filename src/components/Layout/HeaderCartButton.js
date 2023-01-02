import classes from './headerCartBtn.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/CartContext'

export default function HeaderCartButton({ showCard }) {

    const cartCtx = useContext(CartContext);
    
    const totalAmountOfItems = cartCtx.items.reduce((currNum, item) => {
        return currNum + item.amount
    }, 0);

    return(
        <button className={classes.button} onClick={showCard}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{ totalAmountOfItems }</span>
        </button>
    )
}