import React, {useState} from 'react'
import './navbar.scss'

const Navbar = () => {

    //State that toggles mobile menu
    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleHamburgerMenu = () => {
        let navbar = document.querySelector('.navbar-menu');
        let hamburgerToggle = document.querySelector('.navbar-burger');
        navbar.classList.toggle('is-active');
        hamburgerToggle.classList.toggle('is-active');
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <h2>InnerCircle</h2>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleHamburgerMenu}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item">Services</a>
                    <a className="navbar-item">About</a>
                    <a className="navbar-item">Blog</a>
                    <a className="navbar-item">Language Picker</a>
                    <a className="navbar-item">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar