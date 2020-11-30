import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    products: [],
    totalPrice: 0,
};

const addOrder = ( state, action ) => {
    const updatedState = {
        products: state.products.concat(action.product),
        totalPrice: state.totalPrice + action.product.price,
    }
    return updateObject( state, updatedState );
};

// const removeOrder = (state, action) => {
//     const updatedSt = {
//         products: state.products.filter(product => product.id !== action.product.id),
//         totalPrice: state.totalPrice - action.product.price,
//     }
//     return updateObject( state, updatedSt );
// };

const removeAllOrder = (state, action) => {
    const updatedSt = {
        products: [],
        totalPrice: state.totalPrice,
    }
    return updateObject( state, updatedSt );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_ORDER: return addOrder( state, action );
        // case actionTypes.REMOVE_ORDER: return removeOrder(state, action);
        case actionTypes.REMOVE_ALL_ORDER: return removeAllOrder(state, action);
        default: return state;
    }
};

export default reducer;