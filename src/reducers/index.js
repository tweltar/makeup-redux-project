import { combineReducers } from 'redux';
import isLoading from './isLoading';
import products from './products';

const allReducers = combineReducers({
    products
});

export default allReducers;