import classes from './headerCartBtn.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext, useState, useEffect } from 'react';
import CartContext from '../../store/CartContext';

export default function HeaderCartButton({ showCard }) {

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    
    const totalAmountOfItems = items.reduce((currNum, item) => {
        return currNum + item.amount
    }, 0);


    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const buttonClasses = `${btnIsHighlighted ? classes.bump : ''} ${classes.button}`;

    useEffect(()=>{
        if(items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);//in order to have animation permanently
        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false);
        }, 300);

        return ()=>{
            clearTimeout(timer);
        }

    }, [items]);

    return(
        <button className={buttonClasses} onClick={showCard}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{ totalAmountOfItems }</span>
        </button>
    )
}