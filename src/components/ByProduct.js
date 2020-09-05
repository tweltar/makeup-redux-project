import React from 'react';
import './ByProduct.css';
import Header from './Header';
import Footer from './Footer';
import blusher from '../images/blusher.png';
import bronzer from '../images/bronzer.png';
import eyebrow from '../images/eyebrow.png';
import eyeliner from '../images/eyeliner.png';
import eyeshadow from '../images/eyeshadow.png';
import foundation from '../images/foundation.png';
import lipliner from '../images/lipliner.png';
import lipstick from '../images/lipstick.png';
import mascara from '../images/mascara.png';
import nailpolish from '../images/nailpolish.png';
import Products from './Products';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import fetchProducts from '../actions/fetchProducts';
import { connect } from 'react-redux';
import { products } from '../utils';

const ByProduct = () => {
    return (
        <div>
            <Header />
            <section className="ByProduct">
                <nav>
                {
                        products && products.map(product => <Link to={`/search/byproduct/${product.name}`} key={product.name} className="ProductNav" ><img src={product.image} /><p>{product.name}</p><i className="fas fa-angle-right NavArrow"></i></Link>)
                }
                </nav>
                <Products />
            </section>
            <Footer />
        </div>
    );
};
const mapStateToProps = state => {
    return state.product_name;
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ByProduct);