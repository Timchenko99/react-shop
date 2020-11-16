import React from 'react'
import { connect } from 'react-redux';

import NavigationItem from './NavigationItem/NavigationItem';
import * as actions from '../../../store/actions/index';

import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem to={"/checkout/cart/"} iconName="ShoppingCart" >Корзина({props.products.length})</NavigationItem>
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        products: state.order.products,
        totalPrice: state.order.totalPrice,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderAdded: (product) => dispatch(actions.addProductToOrders(product)),
        onOrderRemoved: (product) => dispatch(actions.removeProductFromOrders(product)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)( NavigationItems); 
