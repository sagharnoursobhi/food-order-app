import classes from './cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

export default function Cart({ hideCard }) {
    const cartCtr = useContext(CartContext);

    const totalAmountValue = `$${cartCtr.totalAmount.toFixed(2)}`;

    const listIsNotEmpty = cartCtr.items.length > 0;


    const cartItems = cartCtr.items.map((item,ix) => {
        return <li key={ix}>{item.name}</li>
    });
    
    return(
       <Modal hideCard={hideCard}>
            <ul className={classes['cart-items']}>{ cartItems }</ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{ totalAmountValue }</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={hideCard}>Close</button>
                { listIsNotEmpty && <button className={classes.button}>Order</button>}
            </div>
       </Modal>
    )
}