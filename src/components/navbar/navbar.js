import React from 'react'
import { Link } from "gatsby"
import './navbar.scss'

const Navbar = () => {

    // Toggles mobile menu open and close
    const toggleHamburgerMenu = () => {
        let navbarMenu = document.querySelector('.navbar-menu');
        let hamburgerToggle = document.querySelector('.navbar-burger');
        let navbar = document.querySelector('.navbar');
        navbarMenu.classList.toggle('is-active');
        hamburgerToggle.classList.toggle('is-active');
        navbar.classList.toggle('is-active');
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <h2 className='navbar__title'>InnerCircle</h2>
                </Link>

                <span role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleHamburgerMenu}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </span>
            </div>

            <div className="navbar-menu">
                <div className="navbar-end">
                    <Link to="/services/" className="navbar-item">Services</Link>
                    <Link to="/about/" className="navbar-item">About</Link>
                    <Link to="/blog/" className="navbar-item">Blog</Link>
                    <Link className="navbar-item">Language Picker</Link>
                    <Link to="/contact/" className="navbar-item navbar__contact-cta">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar