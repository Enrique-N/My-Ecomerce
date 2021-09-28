import React, { useContext } from 'react'
import ItemList from '../ItemList/ItemList'
import { ItemsContext } from '../../ItemContext'


const ItemListContainer = () => {

    const { items } = useContext(ItemsContext)

    return (
        <div>
            {items.length > 0
                ? <ItemList productos={items} />
                : <div className="d-flex justify-content-center my-5">
                    <div className="spinner-border my-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
        </div>
    )
}

export default ItemListContainer
