import React from 'react'

import classes from './ProductsGrid.module.css';

import ProductsGridItem from './ProductsGridItem/ProductsGridItem';

const ProductsGrid = (props) => {
    const productSelectedHandler = (id)=>{
        props.history.push('/posts/'+id);
    };
    return (
        <div className={classes.ProductsGrid}>
            {props.products.map(product => <ProductsGridItem id={product.id} key={product.id} img={product.img} title={product.title} price={product.price} click={()=>productSelectedHandler(product.id)}/> )}
        </div>
    )
}

export default ProductsGrid;

