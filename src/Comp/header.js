
import React from 'react';
import './header.css';

import logo from './logo.svg';

function Header() {
   

    return (
        <div className="header-container">
            <img src={logo} alt="Logo" className="header-logo" width="50" height="50" />
        </div>

    );
}

export default Header;

