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

    const DeleteItem = (userID) => {
        const filter = cartItems.filter(item => item.id !== userID)
        setCartItems(filter)
    }

    const Clear = () => {
        setCartItems([])
    }

    const isInCart = (id) => {
        console.log(cartItems.some(item => item.id === id))
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addCart, DeleteItem, Clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}

