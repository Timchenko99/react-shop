import React, { Component } from 'react'
import firebase from '../../firebase';

import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import AccentButton from '../../components/UI/AccentButton/AccentButton';
import SizeButtons from '../../components/UI/SizeButtons/SizeButtons';
import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './Product.module.css';


class Product extends Component {
    state = {
        selectedOption: "",
        product: null,
        loading: true
    }

    componentDidMount(){
      
        const id = this.props.match.params.id;
        firebase.database().ref('/products/'+id).once('value', (product) => {
            firebase.database().ref('/images/'+id).once('value', (images) => {
                
                console.log(images.val()['img-1']);
                this.setState({
                    product: {...product.val(), img: images.val()['img-1']},
                    loading: false
                })
            });
        });
    }


    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    

    render() {
        return (
            this.state.loading ? <Spinner /> : <div className={classes.Product}>
            <div className={classes.ProductImage}>
                <img src={this.state.product.img} alt="dress"/>
            </div>
            <article className={classes.ProductInfo}>
                <div>BreadCrumb</div>
                <div>
                    <h2 className={classes.ProductTitle}>{this.state.product.title}</h2>
                    <p className={classes.ProductDescription}>{this.state.product.description}</p>
                    <div className={classes.ProductPrice}>{this.state.product.price}&nbsp;UAH</div>
                    <p>Выбирите размер</p>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={classes.ProductSizes}>

                    </div>

                    <div className={classes.OrderButton}>
                        <AccentButton onClick={ ()=> this.props.onOrderAdded(this.state.product)}>в корзину</AccentButton>
                    </div>
                </div>
            </article>
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

export default connect(mapStateToProps, mapDispatchToProps)( withRouter(Product));
