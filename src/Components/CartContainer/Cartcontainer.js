import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import CartItems from "../CartItems/CartItems";
import Checkout from '../Checkout/Checkout';

const Cartcontainer = () => {

    const { cartItems, Clear, totalPrice, lastItem, value } = useContext(CartContext)

    return (
        <div>
            <CartItems />
            <div className="d-flex justify-content-center my-3 fs-4" style={{ marginLeft: "35%" }}>Total: ${totalPrice}</div>
            {cartItems.length === 0
                ? <div className="row d-flex justify-content-center" style={{ margin: "70px 0" }}>
                    <Link to="/" className="d-flex justify-content-center">
                        <button type="button" className="btn btn-dark " style={{ height: "50px" }}>Volver</button>
                    </Link>
                    {value
                        ? <div className="alert alert-success alert-dismissible fade show text-center my-2 w-50" role="alert" id="liveAlertPlaceholder">
                            <strong>Congratulations, Buy Order: {lastItem}. The purchase order number will be sent to your email
                            </strong>
                        </div>
                        : null
                    }
                </div>
                : <div className="d-flex justify-content-center" style={{ margin: "70px 0" }}>
                    <button type="button" className="btn btn-danger mx-3" style={{ height: "50px" }} onClick={Clear}>Clear</button>
                    <Link to="/">
                        <button type="button" className="btn btn-dark " style={{ height: "50px" }}>Seguir Comprando</button>
                    </Link>
                    <Checkout />
                </div>
            }
        </div >
    )
}

export default Cartcontainer

