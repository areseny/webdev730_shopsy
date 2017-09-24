import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from '../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import AuthModalContainer from './modals/auth_modal_container';
import ProductIndexContainer from './products/product_index_container';
import ProductShowContainer from './products/product_show_container';
import Banner from './banner/banner.jsx';
import CartItemsIndexContainer from './cart_items/cart_items_index_container';

const App = () => (
  <div className="main-content">
    <header>
      <Link to="/"><h1 className="logo">Shopsy</h1></Link>
      <GreetingContainer />
    </header>
    <Switch>
      <Route path="/cart" component={CartItemsIndexContainer}/>
      <Route path="/products/:productId" component={ProductShowContainer}/>
      <Route path="/products" component={ProductIndexContainer} />
      <Route path="/" component={Banner} />
    </Switch>
    <AuthRoute path="/login" component={AuthModalContainer}/>
    <AuthRoute path="/signup" component={AuthModalContainer}/>
  </div>
);

export default App;
