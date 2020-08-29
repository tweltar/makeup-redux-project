import React from 'react';
import './ManualSelector.css';

const ManualSelector = () => {
    return (
        <div className="ManualSelector">
            <a href="" className="ByButton">By bla bla&nbsp;&nbsp;<i className="fas fa-angle-right RightArrow"></i></a>
            <div className="SelectorContent">
                <a>By Product</a>
                <a>By Brand</a>
            </div>
        </div>
    );
};

export default ManualSelector;