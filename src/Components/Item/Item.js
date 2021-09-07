import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../CartContext'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {

    const { addCart } = useContext(CartContext)

    const onAdd = (quantityToAdd) => {
        addCart(producto, quantityToAdd)
    }

    return (
        <>
            <div>{producto.nombre}</div>
            <div>${producto.precio}</div>
            <Link to={`/detail/${producto.id}`}>
                <img src={producto.img} alt="" width="200px" height="200px"></img>
            </Link>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    )
}

export default Item
