import classes from './headerCartBtn.module.css';
import CartIcon from '../Cart/CartIcon';

export default function HeaderCartButton({ showCard }) {
    return(
        <button className={classes.button} onClick={showCard}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}