import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ user }) => {

    const [value, setValue] = useState(0)
    const [render, setRender] = useState(false)

    const onAdd = (quantityToAdd) => {
        setValue(quantityToAdd)
        setRender(true)
    }

    console.log("Valor guardado:", value)

    return (
        <div className="text-center" key={user.char_id}>
            <div>{user.name}</div>
            <img src={user.img} alt="" width="250" height="250"></img>
            <div>{user.birthday}</div>
            <div>{user.nickname}</div>
            {render ? <Link to="/cart" type="button" className="btn btn-primary">Terminar Compra</Link> : <ItemCount stock={5} initial={1} onAdd={onAdd} />}
        </div>
    )
}

export default ItemDetail
