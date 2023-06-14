import CartContext from "./cart-context";
import { useReducer } from "react";


const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD') {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    let updatedTotalAmount;
    if(existingCartItem) {
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount + action.item.amount};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    } else {
      updatedItems = state.items.concat(action.item);
      updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if(action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if(existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  return defaultCartState;
} 

const CartProvider = (provider) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item: item});
  }

  const removeItemFromCartHandler = id => {
    dispatchCartAction({type: 'REMOVE', id: id});
  }

  const clearCartHandler = () => {
    dispatchCartAction({type: 'CLEAR'}); // Clear does not exist (default case)
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {provider.children}
    </CartContext.Provider>
  )
}

export default CartProvider