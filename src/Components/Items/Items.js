import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Items = ({ name, username, email }) => {
    return (
        <div className="col-3 border m-2 pb-2">
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <ItemCount stock={5} initial={1} onAdd={() => console.log("agregar al carrito")} />
        </div>
    )
}

export default Items
