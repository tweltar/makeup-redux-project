import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import fetchProducts from '../actions/fetchProducts';
import Axios from 'axios';

const ViewProducts = ({ match }) => {
    const [product, setProduct] = useState("");

    const fetchProduct = async (id) => {
        try {
            console.log(match.params.id);
            const res = await Axios.get(`/${match.params.id}.json`);
            console.log(match.params.id);
            setProduct(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProduct()
    });

    return (
        <div>
            <Header />
            {
                product && <div>
                    Hello {product.name}
                </div>
            }
            <Footer />
        </div>
    );
};

export default ViewProducts;