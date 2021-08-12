import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="text-center">
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={() => console.log("agregar al carrito")} />
        </div>
    )
}

export default ItemListContainer
