import React, { useState, createContext, useEffect } from 'react';
import { db } from './firebase';
import { collection, query, getDocs } from "firebase/firestore";


export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const getProducts = async () => {
        const docs = [];
        const q = query(collection(db, "Products"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
        })
        setItems(docs)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <ItemsContext.Provider value={[items]}>
            {children}
        </ItemsContext.Provider>
    )
}