import React from 'react';
import './Header.css';
import ManualSelector from './ManualSelector';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="Header">
                <h1>Prettify</h1>
                <h3>MAKEUP INFORMATION</h3>
            </div>
            <div>
                <Link to="/home" className="BackToHome" title="Home"><i className="fas fa-home"></i></Link>
                <ManualSelector />
            </div>
        </header>
    );
};

export default Header;