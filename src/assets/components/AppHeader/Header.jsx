import React from 'react';
import './Header.css';
import logo from '../../images/studystacklogo.svg';

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="logo" />
            <h1 className="header__title"> English Vocabulary Cards</h1>
            <nav className="header__menu">
                <ul>
                    <li className="header__menu-link">Home</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;