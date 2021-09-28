import React, { useState, createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addCart = (item, quantityToAdd) => {
        if (isInCart(item.id)) {
            const newCart = cartItems.map((cartElement) => {
                if (cartElement.id === item.id) {
                    return { ...cartElement, cantidad: cartElement.cantidad + quantityToAdd }
                } else return cartElement
            })
            setCartItems(newCart)
        } else {
            setCartItems(prevItems => [...prevItems,
            {
                ...item,
                cantidad: quantityToAdd
            }])
        }
    }

    const DeleteItem = (userID) => {
        const filter = cartItems.filter(item => item.id !== userID)
        setCartItems(filter)
    }

    const Clear = () => {
        setCartItems([])
    }

    const isInCart = (id) => {
        return cartItems.some(item => item.id === id)
    }

    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + item.precio * item.cantidad;
    }, 0)

    const [lastItem, setLastItem] = useState([])
    const [value, setValue] = useState(false)

    const itemState = (valor) => {
        setValue(valor)
        setTimeout(() => {
            setValue(false)
        }, 5000);
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addCart, DeleteItem, Clear, totalPrice, setLastItem, lastItem, itemState, value }}>
            {children}
        </CartContext.Provider>
    )
}

