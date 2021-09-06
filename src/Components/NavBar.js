import React from 'react'
import CartWidget from './CartWidget/CartWidget'

export default function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between px-3 fixed-top">
                <div className="d-flex">
                    <a className="navbar-brand" href="/">My Ecomerce</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        </header>
    )
}
