import CartContext from './CartContext';
import { useReducer } from 'react';

const initialCardState = {
    items: [],
    totalAmount: 0
}

const cardReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];
        let updatedItems;

        if(existingItem) {
            const updatedItem = {...existingItem, amount: existingItem.amount + action.item.amount };
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === 'REMOVE') {
        const existingItem = state.items.find(item => item.id === action.id);
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems

        if(existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return initialCardState;
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