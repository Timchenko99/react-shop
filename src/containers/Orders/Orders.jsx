import React, { Component } from 'react'
import { connect } from 'react-redux';
import firebase from '../../firebase';

import classes from './Orders.module.css';

import AccentButton from '../../components/UI/AccentButton/AccentButton';
import OrderList from '../../components/OrderList/OrderList';
import EmptyOrders from '../../components/EmptyOrders/EmptyOrders';
import Modal from '../../components/UI/Modal/Modal';
import * as actions from '../../store/actions/index';
import { withRouter } from 'react-router';


class Orders extends Component {

    state ={
        showModal: false
    }
    

    componentDidMount(){

    }

    modalCloseHandler = () =>{
        this.setState({showModal: false});
        this.props.onAllOrderRemove();
    }
    
    modalToggleHandler = () => {
        this.setState((prevState)=>{
          return { showModal: !prevState.showModal };
        });
        
    }

    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.showModal} close={this.modalCloseHandler}>
                <h1>Заказ принят!</h1>
                <p>Ваш заказ отправлен на обработку. Как только мы удостоверимся в наличии всех товаров оператор Вам перезвонит</p>

                </Modal>
                <div className={classes.Orders}>
                <header>
                    <h1 className={classes.Heading}>Корзина</h1>
                </header>
                <main>
                    <div className={classes.OrderList}>
                    {this.props.products.length !== 0 ? <OrderList products={this.props.products} /> : <EmptyOrders />  }

                        
                    </div>
                    {this.props.products.length !== 0 ? <div className={classes.OrdersSidebar}>
                        <div className={classes.OrderTotalPrice}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Стоимость заказа</th>
                                        <td>{this.props.products.reduce((accum, cur)=> accum + cur.price, 0)}</td>
                                    </tr>
                                    <tr>
                                        <th>Доставка</th>
                                        <td>900</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Итого к оплате</th>
                                            <td>{this.props.products.reduce((accum, cur)=> accum + cur.price, 0) + 900}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className={classes.OrderButton}><AccentButton onClick={this.modalToggleHandler}>ЗАКАЗАТЬ</AccentButton></div>
                    </div> : null }
                </main>

            </div>
            </React.Fragment>
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
        onAllOrderRemove: () => dispatch(actions.removeAllProductsFromOrders()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)( withRouter(Orders));

