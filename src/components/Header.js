import React from 'react';
import './Header.css';
import ManualSelector from './ManualSelector';

const Header = () => {
    return (
        <header>
            <div className="Header">
                <h1>Prettify</h1>
                <h3>MAKEUP INFORMATION</h3>
            </div>
            <ManualSelector />
        </header>
    );
};

export default Header;