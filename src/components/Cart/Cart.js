
import classes from './cart.module.css';
import Modal from '../UI/Modal';

export default function Cart({ hideCard }) {
    const cartItems = [{id:'c1', name:'Sushi', amount:2, price: 12.99}].map((item,ix) => {
        return <li key={ix}>{item.name}</li>
    })
    
    return(
       <Modal hideCard={hideCard}>
            <ul className={classes['cart-items']}>{ cartItems }</ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={hideCard}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
       </Modal>
    )
}