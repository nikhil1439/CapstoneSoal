import React, { createContext, useReducer } from 'react'
import { CartReducer } from './CartReducer'

export const CartContext = createContext();

export const CartContextProvider = (props) => {

    const [cart, dispatch] = useReducer(CartReducer, { shoppingCart: [], totalPrice: 0, totalQty: 0 })
    console.log("hi", cart)
    return (
        <CartContext.Provider value={{ ...cart, dispatch, cart }}>
            {props.children}
        </CartContext.Provider>
    )
}