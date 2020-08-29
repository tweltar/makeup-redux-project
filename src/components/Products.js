import React from 'react';
import './Products.css';
import { useEffect } from "react";
import Selectors from "./Selectors";
import ProductCard from './ProductCard';
import Loader from './Loader';
import fetchProducts from '../actions/fetchProducts';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Products = ({ pending, products, fetchProducts }) => {

    useEffect(() => {
        fetchProducts("blush");
    }, [fetchProducts]);

    return (
        <div className="Products">
            <Selectors />
            {
                pending ? <Loader /> : 
                    <div className="ProductDisplay">
                        {
                            products && products.map(product => <ProductCard key={product.id} product={product} />)
                        }
                    </div>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return state.products
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);