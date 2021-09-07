import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import CartItems from "../CartItems/CartItems";

const Cartcontainer = () => {

    const { cartItems } = useContext(CartContext)
    const { Clear } = useContext(CartContext)

    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + item.precio * item.cantidad;
    }, 0)

    return (
        <div>
            <CartItems />
            <div className="d-flex justify-content-center my-3 fs-4" style={{ marginLeft: "35%" }}>Total: ${totalPrice}</div>
            {cartItems.length == 0
                ? <div className="d-flex justify-content-center" style={{ margin: "70px 0" }}>
                    <Link to="/">
                        <button type="button" className="btn btn-dark " style={{ height: "50px" }}>Volver</button>
                    </Link>
                </div>
                : <div className="d-flex justify-content-center" style={{ margin: "70px 0" }}>
                    <button type="button" className="btn btn-dark " style={{ height: "50px" }} onClick={Clear}>Clear</button>
                </div>
            }
        </div>

    )
}

export default Cartcontainer

