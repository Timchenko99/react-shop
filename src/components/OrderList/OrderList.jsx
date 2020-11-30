import React from 'react'

import classes from './OrderList.module.css';

import OrderListItem from './OrderListItem/OrderListItem';

const OrderList = (props) => {
    return (
        <ul className={classes.OrderList}>
           {props.products.map(product => <OrderListItem key={product.id} product={product} />)}
        </ul>
    )
}

export default OrderList;
