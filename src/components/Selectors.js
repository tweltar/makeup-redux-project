import React from 'react';
import './Selectors.css';
import ManualSelector from "./ManualSelector";
import { products } from "../utils";

const Selectors = () => {
    var prouct = products[1].category;
    return (
        <div className="Selectors">
            <ManualSelector />
            <ManualSelector />
            <ManualSelector />
        </div>
    );
};

export default Selectors;