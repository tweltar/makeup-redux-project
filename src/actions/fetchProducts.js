import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from './index';
import Axios from 'axios';

const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsPending());
        return Axios.get(`?product_type=blush`)
            .then(res => dispatch(fetchProductsSuccess(res.data)))
            .catch(err => dispatch(fetchProductsError(err)));
    };
};

export default fetchProducts;