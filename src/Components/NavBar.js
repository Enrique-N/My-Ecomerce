import React, { useContext } from 'react'
import CartWidget from './CartWidget/CartWidget'
import { ItemsContext } from '../ItemContext'
import { Link } from "react-router-dom"

export default function NavBar() {

    const { getProducts, getCategory } = useContext(ItemsContext)

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between px-3 fixed-top">
                <div className="d-flex">
                    <li className="navbar-brand" style={{ listStyle: "none" }}>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }} onClick={getProducts}>
                            My Ecomerce
                        </Link>
                    </li>
                    <ul className="navbar-nav">
                        <ul className="navbar-nav">
                            <Link to="/" style={{ textDecoration: "none" }} onClick={getProducts}>
                                <li className="nav-link active">
                                    Home
                                </li>
                            </Link>
                        </ul>
                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul className="navbar-nav">
                                <ul className="navbar-nav dropdown">
                                    <li className="nav-link dropdown-toggle active" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </li>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li>
                                            <button className="nav-link btn-dark dropdown-item" onClick={() => getCategory("Ryzen")}>Ryzen</button>
                                        </li>
                                        <li>
                                            <button className="nav-link btn-dark dropdown-item" onClick={() => getCategory("Intel")}>Intel</button>
                                        </li>
                                    </ul>
                                </ul>
                            </ul>
                        </div>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        </header>
    )
}
