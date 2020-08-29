import React from 'react';
import './ProductCard.css';
import ProductColor from './ProductColor';
import {countStars, checkProductColor} from '../utils';

const ProductCard = ({product}) => {
    var parse = require("html-react-parser");

    return (
        <div className="ProductCard">
            <img src={product.api_featured_image} alt="product" />
            <h4>{product.name}</h4>
            <h5>Brand: {product.brand}</h5>
            <div style={{display: "flex", flexDirection: "row"}}>
                { product.rating && 
                    parse(countStars(product.rating))
                }
            </div>
            {
                product.product_colors &&             
                    <div className="ProductColors">
                        {() => {
                            const {colors, remain} = checkProductColor(product.product_colors);
                            colors.map(color => <ProductColor key={color.hex_value} color={color} />)
                        }}
                    </div>
            }
            {
                product.price && product.price !== "0.0" && <h3 className="Price">{product.price}&nbsp;$</h3>
            }
        </div>
    );
};

export default ProductCard;