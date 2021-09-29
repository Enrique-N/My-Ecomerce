import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../CartContext';


const ItemDetail = ({ producto }) => {

    const [value, setValue] = useState(1)
    const [render, setRender] = useState(false)
    const { addCart } = useContext(CartContext)

    const onAdd = (quantityToAdd) => {
        setValue(quantityToAdd)
        addCart(producto, quantityToAdd)
        setRender(true)
    }

    return (
        <div className="row text-center mt-5 p-2 border-box" style={{ border: "solid black" }} key={producto.char_id}>
            <div class="col-5">
                <img src={producto.img} alt="imagen del producto" width="250" height="250" />
            </div>
            <div class="col-5">
                <div><strong>{producto.nombre}</strong></div>
                <div><strong>Stock: {producto.stock}</strong></div>
                <div><strong>${producto.precio}</strong></div>
                <div>{producto.descripcion}</div>
                {render
                    ? <Link to="/cart" type="button" className="btn mt-2 btn-primary">Terminar Compra</Link>
                    : <ItemCount stock={producto.stock} initial={value} onAdd={onAdd} />}
            </div>
        </div>
    )
}

export default ItemDetail
