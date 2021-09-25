import React, { useState, createContext, useEffect } from 'react';
import { db } from './firebase';


export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const getProducts = () => {
        const docs = [];
        db.collection("Products").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setItems(docs)
        })
    }

    const getCategory = (item) => {
        const docs = [];
        db.collection("Products")
            .where('category', "==", `${item}`)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setItems(docs)
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <ItemsContext.Provider value={{ items, getCategory, getProducts }}>
            {children}
        </ItemsContext.Provider>
    )
}


// mock: https://mocki.io/v1/72f12565-1732-4904-ac69-d0594752ea26