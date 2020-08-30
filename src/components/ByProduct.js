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
import Products from './Products'; //m thi dok bu :3
import { Link } from 'react-router-dom';
import { useState } from "react";
import { bindActionCreators } from 'redux';
import fetchProducts from '../actions/fetchProducts';
import { connect, useDispatch } from 'react-redux';

const ByProduct = ({ product_name }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <Header />
            <section className="ByProduct">
                <nav>
                    <Link to="/search/byproduct/blusher" className="ProductNav" onClick={()=>fetchProducts("blush")}><img src={blusher} /><p>Blush</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/bronzer" className="ProductNav" onClick={()=>fetchProducts("bronzer")}><img src={bronzer} /><p>Bronzer</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/eyebrow" className="ProductNav" onClick={()=>fetchProducts("eyebrow")}><img src={eyebrow} /><p>Eyebrow</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/eyeliner" className="ProductNav" onClick={()=>fetchProducts("eyeliner")}><img src={eyeliner} /><p>Eyeliner</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/eyeshadow" className="ProductNav" onClick={()=>fetchProducts("eyeshadow")}><img src={eyeshadow} /><p>Eyeshadow</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/foundation" className="ProductNav" onClick={()=>fetchProducts("foundation")}><img src={foundation} /><p>Foundation</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/lipliner" className="ProductNav" onClick={()=>fetchProducts("lipliner")}><img src={lipliner} /><p>Lip Liner</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/lipstick" className="ProductNav" onClick={()=>fetchProducts("lipstick")}><img src={lipstick} /><p>Lipstick</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/mascara" className="ProductNav" onClick={()=>fetchProducts("mascara")}><img src={mascara} /><p>Mascara</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/nailpolish" className="ProductNav" onClick={()=>fetchProducts("nailpolish")}><img src={nailpolish} /><p>Nail Polish</p><i className="fas fa-angle-right NavArrow"></i></Link>
                </nav>
                <Products />
            </section>
            <Footer />
        </div>
    );
};
//you  don't need them
const mapStateToProps = state => {
    return state.product_name;
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProducts
}, dispatch);
//
export default connect(mapStateToProps, mapDispatchToProps)(ByProduct);