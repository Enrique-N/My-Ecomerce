import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="text-center">
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={1} />
        </div>
    )
}

export default ItemListContainer
