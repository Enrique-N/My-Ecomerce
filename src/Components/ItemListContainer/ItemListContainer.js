import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios("https://www.breakingbadapi.com/api/characters")
            .then(user => setUsers(user.data))
    }, [])

    return (
        <div>
            {users.length > 0
                ? <ItemList users={users} />
                : <div className="d-flex justify-content-center my-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
        </div>
    )
}

export default ItemListContainer
