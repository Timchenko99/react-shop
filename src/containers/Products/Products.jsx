import React, { Component } from 'react';
import firebase from '../../firebase';

import classes from './Products.module.css';

import ProductsGrid from '../../components/Products/ProductsGrid/ProductsGrid';
import Spinner from '../../components/UI/Spinner/Spinner';

export default class Products extends Component {
    state = {
        products: [],
        loading: true,
    }

    componentDidUpdate(){
        console.log(this.props.gender);
        if((this.state.products && this.props.gender && (this.state.products.some(product => product.gender !== this.props.gender))) || (this.state.products && !this.props.gender && this.state.products.every(product=> product.gender === "male")) || (this.state.products && !this.props.gender && this.state.products.every(product=> product.gender === "female"))){
            
            firebase.database().ref('/products').once('value', (productsSnapshot) => {
                firebase.database().ref('/images').once('value', (dataSnapshot) =>{
                    const images = dataSnapshot.val();
                    let products = Object.keys(dataSnapshot.val()).map(id => {
                       return  {
                           id: id,
                           ...productsSnapshot.val()[id]
                        };
                    });
    
                    if(this.props.gender){
                        products = products.filter(product => product.gender === this.props.gender);
                    }
    
                    console.log(products);
    
                    this.setState({
                        loading: false,

                        products: products.map(product => {
                            
                            return {
                                ...product,
                                img: images[product.id]['img-1']
                            };
                        })
                    })
    
                    console.log(this.state.products);
                    
                });
                
                // this.setState({
                //     products: 
                //     loading: false
                // })
    
            })

        }
    }

    componentDidMount() {
        firebase.database().ref('/products').once('value', (productsSnapshot) => {
            firebase.database().ref('/images').once('value', (dataSnapshot) =>{
                const images = dataSnapshot.val();
                let products = Object.keys(dataSnapshot.val()).map(id => {
                   return  {
                       id: id,
                       ...productsSnapshot.val()[id]
                    };
                });

                if(this.props.gender){
                    products = products.filter(product => product.gender === this.props.gender);
                }

                console.log(products);

                this.setState({
                    loading: false,

                    products: products.map(product => {
                        
                        return {
                            ...product,
                            img: images[product.id]['img-1']
                        };
                    })
                })

                console.log(this.state.products);
                
            });
            // this.setState({
            //     products: 
            //     loading: false
            // })

        })
    }


    render() {
        return (
            <div className={classes.Products}>
                <div className={classes.ProductsCategories}></div>
                <div className={classes.ProductsGrid}>
                    <div className={classes.ProductsFiltersWrapper}>
                        <div className={classes.ProductsFilters}>
                            <div className={classes.ProductsFiltersItem}>Сука</div>
                            <div className={classes.ProductsFiltersItem}>Сука</div>
                            <div className={classes.ProductsFiltersItem}>Сука</div>
                            <div className={classes.ProductsFiltersItem}>Сука</div>
                            <div className={classes.ProductsFiltersItem}>Сука</div>
                            <div className={classes.ProductsFiltersItem}>Сука</div>
                            <div className={classes.ProductsFiltersItem}>Сука</div>
                        </div>
                    </div>
                    {this.state.loading ? <div className={classes.Spinner}><Spinner/></div>: <ProductsGrid products={this.state.products} />}

                </div>

            </div>
        )
    }
}
