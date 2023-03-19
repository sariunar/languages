import React from 'react';
import logo from '../images/studystacklogo.svg'

const Header = () => {
    return (
        <header className="header">
            <div>
                <img className="header__logo" src={logo} alt="logo" />
                <h1 className="header__title"> English Vocabulary Cards</h1>
            </div>
            <nav className="header__menu">
                <ul>
                    <li>Home</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;