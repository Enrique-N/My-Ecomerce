import React from 'react'
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ user }) => {

    return (
        <div className="text-center" key={user.char_id}>
            <div>{user.name}</div>
            <img src={user.img} alt="" width="250" height="250"></img>
            <div>{user.birthday}</div>
            <div>{user.nickname}</div>
            <ItemCount stock={5} initial={1} onAdd={() => console.log("agregar al carrito")} />
        </div>
    )
}

export default ItemDetail
