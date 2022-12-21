import classes from './cart.module.css';

export default function Cart() {
    const cartItem = [{id:'c1', name:'Sushi', amount:2, price: 12.99}].map((item,ix) => {
        return <li>{item.name}</li>
    })
    return(
        <div>
            <ul className={classes['cart-items']}>{ cartItem }</ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    )
}