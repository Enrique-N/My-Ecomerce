import React, { useContext } from 'react'
import { ItemsContext } from '../../ItemContext';
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = ({ match }) => {

    let userID = match.params.id;

    const { items } = useContext(ItemsContext)
    const currentProduct = items.filter(data => data.id === userID)[0]

    return (
        <div className="row" style={{ marginTop: "5%" }}>
            <div className="col-12 d-flex justify-content-evenly">
                {currentProduct
                    ? <ItemDetail producto={currentProduct} />
                    : <div className="d-flex justify-content-center my-5">
                        <div>
                            <h1 >Product Doesn't Exist. Come back to home, please.</h1>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default ItemDetailContainer
