import React from 'react';
import './ByBrand.css';
import Header from './Header';
import Products from './Products';
import Footer from './Footer';
import { useEffect } from 'react';
import { brands } from "../utils";

const ByBrand = () => {
    var num = 0;
    return (
        <div>
            <Header />
            <section className="ByBrand">
                <nav>
                {
                    brands && brands.map(brand => <a className="BrandNav"><p>{brand[num++]}</p><i className="fas fa-angle-right NavArrow"></i></a>)
                }
                </nav>
                <Products />
            </section>
            <Footer />
        </div>
    );
};

export default ByBrand;