import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ productos }) => {


    return (
        <div className="text-center row d-flex justify-content-center container-fluid">
            {productos.map(producto =>
                <div key={producto.id} className="col-3 border m-2 pb-2">
                    <Item producto={producto} key={productos.id} />
                </div>
            )}
        </div>
    )
}

export default ItemList
