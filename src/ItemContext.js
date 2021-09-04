import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios(`https://mocki.io/v1/4cb5b031-6939-4b7f-b96e-e045c02011cb`)
            .then(user => setItems(user.data))
    }, [])

    return (
        <ItemsContext.Provider value={[items]}>
            {children}
        </ItemsContext.Provider>
    )
}