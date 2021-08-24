import React from 'react'
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ users }) => {

    return (
        users.map(users =>
            <div className="text-center">
                <div>{users.name}</div>
                <img src={users.img} alt="" width="250" height="250"></img>
                <div>{users.birthday}</div>
                <div>{users.nickname}</div>
                <ItemCount stock={5} initial={1} onAdd={() => console.log("agregar al carrito")} />
            </div>
        )
    )
}

export default ItemDetail
