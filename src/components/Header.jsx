import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Header = () => {
    const items = useSelector((state)=>state.cart)
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <Link to="/" className="navbar-brand">Redux Store</Link>
                <div className="d-flex align-items-center" role="search">
                    <div className="me-5 fs-5">
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </div>
                    <div className="border p-2 rounded">Cart Items : {items.length}</div>
                </div>
            </div>
        </nav>
    )
}
