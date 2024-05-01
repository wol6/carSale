import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Header/Header.css'

function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <h2><NavLink to="/">DreamDrives</NavLink></h2>
                </div>
                <div className="nav">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/inventoryStore">Inventory</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/login">MyAccount</NavLink></li>
                        <li><NavLink to="/aboutus">AboutUs</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header