import React from 'react';
import './ProductColor.css';

const ProductColor = ({ color }) => {
    return (
        <div className="ProductColor" title={color.colour_name} style={{backgroundColor: color.hex_value}}></div>
    );
};

export default ProductColor;