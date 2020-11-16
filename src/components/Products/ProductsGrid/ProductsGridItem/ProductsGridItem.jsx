import React from 'react'
import {Link} from 'react-router-dom';

import classes from './ProductsGridItem.module.css';

const ProductsGridItem = (props) => {

    return (
        <div className={classes.ProductsGridItem}>
            <div className={classes.ProductGridItemImage}>
                <Link to={'/products/'+props.id} >
                    <img src={props.img} alt=""/>
                </Link>
            </div>
            <div>
               <div className={classes.ProductTitle}>{props.title}</div>
               <div className={classes.ProductPrice}>{props.price}&nbsp;UAH</div>
            </div>
        </div>
    )
}

export default ProductsGridItem
