import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header className='header-wrapper'>
            <nav className='nav-flex-cont'>
                <div className='logo-wrapper'>
                    <img src={logo} alt="" />
                </div>
                <div className='menu-wrapper'>
                    <ul className='main-menu'>
                        <li><a href="/order">Order</a></li>
                        <li><a href="/review">Order Review</a></li>
                        <li><a href="/inventory">Manage Inventory</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;