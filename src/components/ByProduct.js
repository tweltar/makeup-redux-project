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

const ByProduct = () => {
    return (
        <div>
            <Header />
            <section className="ByProduct">
                <nav>
                    <Link to="/search/byproduct/blusher" className="ProductNav"><img src={blusher} /><p>Blush</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/bronzer" className="ProductNav"><img src={bronzer} /><p>Bronzer</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/eyebrow" className="ProductNav"><img src={eyebrow} /><p>Eyebrow</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/eyeliner" className="ProductNav"><img src={eyeliner} /><p>Eyeliner</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/eyeshadow" className="ProductNav"><img src={eyeshadow} /><p>Eyeshadow</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/foundation" className="ProductNav"><img src={foundation} /><p>Foundation</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/lipliner" className="ProductNav"><img src={lipliner} /><p>Lip Liner</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/lipstick" className="ProductNav"><img src={lipstick} /><p>Lipstick</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/mascara" className="ProductNav"><img src={mascara} /><p>Mascara</p><i className="fas fa-angle-right NavArrow"></i></Link>
                    <Link to="/search/byproduct/nailpolish" className="ProductNav"><img src={nailpolish} /><p>Nail Polish</p><i className="fas fa-angle-right NavArrow"></i></Link>
                </nav>
                <Products />
            </section>
            <Footer />
        </div>
    );
};

export default ByProduct;