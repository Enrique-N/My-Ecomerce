import React from 'react'


const Item = ({ name, username, img }) => {
    return (
        <>
            <div>{name}</div>
            <div>{username}</div>
            <img src={img} alt="" width="250" height="250"></img>
        </>
    )
}

export default Item
