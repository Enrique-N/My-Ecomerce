import React from 'react'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemList = ({ users }) => {

    return (
        <div className="text-center row d-flex justify-content-center container-fluid">
            {users.map(user =>
                <div key={user.char_id} className="col-3 border m-2 pb-2">
                    <Link to={`/detail/${user.char_id}`}>
                        <Item {...user} key={users.char_id} />
                    </Link>
                    <ItemCount stock={5} initial={1} onAdd={() => console.log("agregar al carrito")} />
                </div>
            )}
        </div>
    )
}

export default ItemList
