import React, { useContext, useState } from 'react'
import { db } from '../../firebase'
import { CartContext } from '../../CartContext'



const Checkout = () => {

    const { totalPrice, cartItems, Clear, setLastItem } = useContext(CartContext)
    const [buyer, setBuyer] = useState({
        nombre: "",
        apellido: "",
        email: "",
        numero: "",
        items: cartItems.map(({ id, nombre, precio }) => ({
            id,
            nombre,
            precio
        })),
        date: new Date().toLocaleString(),
        total: totalPrice
    })

    const onChangeEvent = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    const sendData = async (e) => {
        e.preventDefault()
        await db.collection('compras').doc().set(buyer)
        db.collection("compras").orderBy("date", "desc").limit(1).get().then(('child_added', function (snapshot) {
            snapshot.docs.forEach(doc => {
                setLastItem(doc.id)
            })
        }))
        Clear()
    }

    return (
        <div>
            <button type="button" className="btn btn-success mx-3" style={{ height: "50px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">Terminar Compra</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Complete Form</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="col-lg-12 g-3 needs-validation" onSubmit={sendData}>
                                <div className="col-lg-8">
                                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="validationCustom01" onChange={onChangeEvent} name="nombre" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="validationCustom02" name="apellido" onChange={onChangeEvent} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <label htmlFor="validationCustom02" className="form-label">Number</label>
                                    <input type="number" className="form-control" id="validationCustom02" name="numero" onChange={onChangeEvent} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={onChangeEvent} name="email" required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                        <label className="form-check-label" htmlFor="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer mt-2">
                                    <button className="btn btn-primary" type="submit" data-bs-dismiss="modal" id="liveAlertBtn" required>Submit form</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
