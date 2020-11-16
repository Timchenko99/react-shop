import React, { Component } from 'react'
import { connect } from 'react-redux';

import classes from './Orders.module.css';

import AccentButton from '../../components/UI/AccentButton/AccentButton';
import OrderList from '../../components/OrderList/OrderList';
import * as actions from '../../store/actions/index';


class Orders extends Component {
    render() {
        return (
            <div className={classes.Orders}>
                <div>
                    <OrderList products={this.props.products} />
                </div>
                <div>
                    <AccentButton>ЗАКАЗАТЬ</AccentButton>
                </div>
            </div>
        )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)( Orders);

