
import React, { useState } from 'react';
 // eslint-disable-next-line
import BodyComp from './BodyComp';
import './header.css';

import logo from './logo.svg';

function Header(props) {
    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

    const handleButtonClick = () => {
        setBackgroundColor('#F5F5F5');
    }

    const handleColorChange = (e) => {
        setBackgroundColor(e.target.value);
    }

    return (
        <div className="header-container" style={{ backgroundColor }}>
            <img src={logo} alt="Logo" className="header-logo" width="50" height="50" />

            <div className="header-menu">
                <select onChange={handleColorChange} className="header-dropdown">
                    <option value="lightgreen">Green</option>
                    <option value="#F5F5F5">Gray</option>
                    <option value="lightblue">Blue</option>
                </select>
                <button onClick={handleButtonClick} className="header-button">Change Color</button>
            </div>

            {/*<hr className="header-divider" />
                <props.BodyComp />
            */}

        </div>

    );
}

export default Header;

