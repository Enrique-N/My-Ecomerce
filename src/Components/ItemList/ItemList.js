import React from 'react'
import Items from '../Items/Items'


const ItemList = ({ users }) => {

    return (
        <div className="text-center row d-flex justify-content-center container-fluid">
            {users.map(user => <Items name={user.name} username={user.username} email={user.email} key={user.id} />)}
        </div>
    )
}

export default ItemList
