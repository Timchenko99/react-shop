import React from 'react'

import {Link} from 'react-router-dom';

import classes from './OrderListItem.module.css';

const OrderListItem = (props) => {
    return (
        <li className={classes.OrderListItem}>
            <article >
                <Link to={"/products/"+props.product.id} className={classes.OrderListItemImage}>
                    <img src={props.product.img} alt=""/>
                </Link>
                <div className={classes.OrderListItemDetails}>
                    <h2>{props.product.title}</h2>
                    <p>{props.product.price}&nbsp;UAH</p>
                </div>
               
               
            </article>
        </li>
    )
}

export default OrderListItem
