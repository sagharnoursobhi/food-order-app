import classes from './headerCartBtn.module.css';
import CartIcon from '../Cart/CartIcon';

export default function HeaderCartButton() {
    return(
        <button className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}