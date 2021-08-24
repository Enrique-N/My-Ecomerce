import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/characters")
            .then(resp => resp.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <ItemList users={users} />
        </div>
    )
}

export default ItemListContainer
