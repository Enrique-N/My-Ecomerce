import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = ({ match }) => {

    let userID = match.params.id;

    const [user, setUser] = useState({})

    useEffect(() => {
        axios(`https://www.breakingbadapi.com/api/characters/${userID}`)
            .then(user => setUser(user.data[0]))
    }, [userID])

    return (
        <div className="m-5 row">
            <div className="col-12 d-flex justify-content-evenly">
                {user
                    ? <ItemDetail user={user} />
                    : <div className="d-flex justify-content-center my-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default ItemDetailContainer
