import { CartContext } from "../../CartContext";
import React, { useContext } from 'react'

const CartItems = () => {

    const { cartItems } = useContext(CartContext)
    const { DeleteItem } = useContext(CartContext)

    return (
        cartItems.map(item =>
            <div className="d-flex justify-content-evenly mt-5" key={item.id} style={{ margin: "0 200px", border: "solid black" }}>
                <img src={item.img} style={{ width: "100px", height: "100px" }} className="m-2"></img>
                <div className="align-self-center mx-2">Producto: {item.nombre}</div>
                <div className="align-self-center mx-2">Cantidad: {item.cantidad}</div>
                <div className="align-self-center mx-2">${item.precio * item.cantidad}</div>
                <button type="button" className="btn btn-dark align-self-center" style={{ height: "50px" }} onClick={() => DeleteItem(item.id)}>X</button>
            </div>
        )
    )
}

export default CartItems
