import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [users, setUser] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(resp => resp.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div>
            <ItemList users={users} />
        </div>
    )
}

export default ItemListContainer
