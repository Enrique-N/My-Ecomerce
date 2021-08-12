import React, { useState } from 'react'


const ItemCount = ({ stock, initial }) => {

    let [state, setState] = useState(initial)

    const onAdd = () => {
        if (state < stock) {
            setState(state + 1)
        }
    }

    const onDecrease = () => {
        if (state > 1) {
            setState(state - 1)
        }
    }

    return (
        <div>
            <p>{state}</p>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={onDecrease}>-</button>
                <button type="button" className="btn btn-secondary" onClick={onAdd}>+</button>
            </div>
        </div>
    )
}

export default ItemCount
