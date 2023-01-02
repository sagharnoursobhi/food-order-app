import CartContext from './CartContext';
import { useReducer } from 'react';

const initialCardState = {
    items: [],
    totalAmount: 0
}

const cardReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updateItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

        return {
            items: updateItems,
            totalAmount: updatedTotalAmount
        }
    }
    return initialCardState 
}

export default function CartProvider(props) {

    const [cartState, dispatchCard] = useReducer(cardReducer, initialCardState);

    const addItemToCardHandler = (item) => {
        dispatchCard({ type: 'ADD', item: item })
    }

    const removeItemFromCardHandler = (id) => {
        dispatchCard({ type: 'REMOVE', id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCardHandler,
        removeItem: removeItemFromCardHandler
    }

    return <CartContext.Provider value={cartContext}>
                { props.children }
        </CartContext.Provider>
}