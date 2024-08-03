import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu2 from '../../assets/menu2.png'

function Navbar() {

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () =>{
     mobileMenu ? setMobileMenu(false) :setMobileMenu(true);
    }

    return (
        <nav className={'container'}>
            <img src={logo} alt="" className='logo'/> 
            <ul className={mobileMenu? '':'hide-mobile-menu'}>
                <li> Home</li>
                <li>About</li>
                <li>Brands</li>
                <li><button className='btn'>Contact Us</button></li>
            </ul>
            <img src={menu2} alt='' className='menu' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar
