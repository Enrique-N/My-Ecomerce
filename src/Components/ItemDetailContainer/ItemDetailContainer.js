import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = ({ match }) => {

    let userID = match.params.id;

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`https://www.breakingbadapi.com/api/characters/${userID}`)
            .then(resp => resp.json())
            .then(data => setUsers(data))
    }, [userID])

    return (
        <div className="m-5 row">
            <div className="col-12 d-flex justify-content-evenly">
                <ItemDetail users={users} />
            </div>
        </div>
    )
}

export default ItemDetailContainer
