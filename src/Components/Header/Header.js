import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header-wrapper'>
            <nav className='nav-flex-cont'>
                <div className='logo-wrapper'>
                    <img src={logo} alt="" />
                </div>
                <div className='menu-wrapper'>
                    <ul className='main-menu'>
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/orders">Orders</Link></li>
                        <li><Link to="/inventory">Inventory</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;