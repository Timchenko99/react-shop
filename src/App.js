import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import NavBar from './components/NavBar/NavBar';
import SideDrawer from './components/NavBar/SideDrawer/SideDrawer';
import Product from './containers/Product/Product';
import Products from './containers/Products/Products';
import Orders from './containers/Orders/Orders';


class App extends Component {

  state ={
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () =>{
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState)=>{
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  }

  render(){

    return (
      <BrowserRouter>
        <NavBar drawerTogleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler} />
        <Switch>
          <Route path="/" exact>
            <React.Fragment>
            <h1>404 Page not... </h1>
            <p>ты как сюда залез ЛОВИТЕ ЕГО МУЖИКИ</p>
            </React.Fragment>
          </Route>
          <Route path="/products/new" >
            <Products/>
          </Route>
          <Route path="/products/women" >
            <Products gender="female"/>
          </Route>
          <Route path="/products/men" >
            <Products gender="male"/>
          </Route>
          <Route path="/products/:id" >
            <Product price="3 742" title="Платье из рельефного трикотажа" description="Прямое платье длиной до икры из мягкой пряжи рельефной вязки с добавлением шерсти. Заниженная линия плеча и длинные широкие рукава. Рельефная обвязка горловины и низа рукавов." img="https://www.cropp.com/media/catalog/product/Y/O/YO513-99X-001_3.jpg"/>
          </Route>
          <Route path="/products" >
            <Products />
          </Route>
          <Route path="/checkout/cart/">
            <Orders/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
