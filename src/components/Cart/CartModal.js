import classes from './cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';

export default function Cart({ hideCard }) {
    const cartCtr = useContext(CartContext);

    const totalAmountValue = `$${cartCtr.totalAmount.toFixed(2)}`;

    const listIsNotEmpty = cartCtr.items.length > 0;


    const cartItemRemoveHandler = (id) => {
        cartCtr.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtr.addItem({...item, amount:1});
    }


    const cartItems = cartCtr.items.map((item,ix) => {
        return <CartItem
                key={ix}
                item={item}
                onAdd={()=>cartItemAddHandler(item)}
                onRemove={cartItemRemoveHandler.bind(null, item.id)} />
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