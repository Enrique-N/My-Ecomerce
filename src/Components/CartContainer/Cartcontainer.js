import React, { useContext } from 'react'
import { CartContext } from '../../CartContext';
import CartItems from "../CartItems/CartItems";

const Cartcontainer = () => {

    const { Clear } = useContext(CartContext)

    return (
        <div>
            <CartItems />
            <div className="d-flex justify-content-center" style={{ margin: "70px 0" }}>
                <button type="button" className="btn btn-dark " style={{ height: "50px" }} onClick={Clear}>Clear</button>
            </div>
        </div>

    )
}

export default Cartcontainer

