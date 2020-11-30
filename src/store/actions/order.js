import * as actionTypes from './actionTypes';

export const addProductToOrders = ( product ) => {
    return {
        type: actionTypes.ADD_ORDER,
        product: product
    };
};

export const removeProductFromOrders = ( product ) => {
    return {
        type: actionTypes.REMOVE_ORDER,
        product: product
    };
};

export const removeAllProductsFromOrders = (  ) => {
    return {
        type: actionTypes.REMOVE_ALL_ORDER,
    };
};
