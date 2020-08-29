import React from 'react';
import './Selectors.css';
import ManualSelector from "./ManualSelector";

const Selectors = () => {
    return (
        <div className="Selectors">
            <ManualSelector />
            <ManualSelector />
            <ManualSelector />
        </div>
    );
};

export default Selectors;