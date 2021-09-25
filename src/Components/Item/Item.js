import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../CartContext'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {

    const { addCart, itemState } = useContext(CartContext)

    const onAdd = (quantityToAdd) => {
        addCart(producto, quantityToAdd)
    }

    return (
        <>
            {producto.stock === 0
                ? <div>
                    <div>{producto.nombre}</div>
                    <div>${producto.precio}</div>
                    <div>Stock: {producto.stock}</div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/my-ecormerce.appspot.com/o/notebook%20agotada.jpg?alt=media&token=dc86dcec-00f6-45ce-b46c-33d4c6147875" alt="imagen del producto" width="200px" height="200px" />
                    <div>
                        <div>0</div>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary" >-</button>
                            <button className="btn btn-primary" onClick={() => itemState(true)}>Agregar al Carrito</button>
                            <button type="button" className="btn btn-primary" >+</button>
                        </div>
                    </div>
                </div>
                : <div>
                    <div>{producto.nombre}</div>
                    <div>${producto.precio}</div>
                    <div>Stock: {producto.stock}</div>
                    <Link to={`/detail/${producto.id}`}>
                        <img src={producto.img} alt="imagen del producto" width="200px" height="200px" />
                    </Link>
                    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
                </div>
            }
        </>
    )
}

export default Item


