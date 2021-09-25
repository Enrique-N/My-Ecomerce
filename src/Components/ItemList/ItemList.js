import React, { useContext } from 'react'
import { CartContext } from '../../CartContext'
import Item from '../Item/Item'

const ItemList = ({ productos }) => {

    const { value } = useContext(CartContext)

    return (
        <div className="text-center row d-flex justify-content-center container-fluid" style={{ marginTop: "70px" }}>
            {productos.map(producto =>
                <div key={producto.id} className="col-3 border m-2 pb-2">
                    <Item producto={producto} key={productos.id} />
                </div>
            )}
            {value
                ? <div className="alert alert-danger alert-dismissible fade show text-center my-2 w-50 fixed-bottom">
                    <strong>Producto Agotado</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                : null
            }
        </div>
    )
}

export default ItemList
