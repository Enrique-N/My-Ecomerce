import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios(`https://mocki.io/v1/72f12565-1732-4904-ac69-d0594752ea26`)
            .then(user => setItems(user.data))
    }, [])

    return (
        <ItemsContext.Provider value={[items]}>
            {children}
        </ItemsContext.Provider>
    )
}