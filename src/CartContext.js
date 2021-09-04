import React, { useState, createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addCart = (item, quantityToAdd) => {
        setCartItems(prevItems => [...prevItems,
        {
            ...item,
            cantidad: quantityToAdd
        }])
    }

    console.log("carrito", cartItems)

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addCart }}>
            {children}
        </CartContext.Provider>
    )
}

