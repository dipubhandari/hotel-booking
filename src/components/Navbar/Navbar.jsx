import React from 'react'
import "./navbar.css"


const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navContainer">
                    <span className="logo">DipuBooking</span>
                    <div className="navItems">
                        <button className="navButton">Regiter</button>
                        <button className="navButton">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar