import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../CartContext';


const ItemDetail = ({ producto }) => {

    const [value, setValue] = useState(0)
    const [render, setRender] = useState(false)
    const { addCart } = useContext(CartContext)

    const onAdd = (quantityToAdd) => {
        setValue(quantityToAdd)
        addCart(producto, quantityToAdd)
        setRender(true)
    }

    console.log(value)

    return (
        <div className="text-center" key={producto.char_id}>
            <div>{producto.nombre}</div>
            <div>Stock: {producto.stock}</div>
            <img src={producto.img} alt="imagen del producto" width="250" height="250" />
            <div>${producto.precio}</div>
            {render
                ? <Link to="/cart" type="button" className="btn btn-primary">Terminar Compra</Link>
                : <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />}
        </div>
    )
}

export default ItemDetail
