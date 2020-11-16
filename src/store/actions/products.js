import * as actionTypes from './actionTypes';

import Firebase from 'firebase';

export const fetchProducts = (  ) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START,
    };
};

export const fetchedProducts = ( products ) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products: products
    };
};

export const faildeFetchProducts = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED
    }
}

export const initFetchProductst = () => {
    return dispatch => {
        // Firebase.database.ref('/products').once()
    };
}

