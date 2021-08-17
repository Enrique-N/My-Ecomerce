import React, { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd }) => {

    const [state, setState] = useState(initial)

    const onIncrease = () => {
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
            <div>{state}</div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={onDecrease}>-</button>
                <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                <button type="button" className="btn btn-primary" onClick={onIncrease}>+</button>
            </div>
        </div>
    )
}

export default ItemCount
