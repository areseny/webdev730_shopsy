import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from '../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import AuthModalContainer from './modals/auth_modal_container';
import ProductIndexContainer from './products/product_index_container';
import ProductShowContainer from './products/product_show_container';

const App = () => (
  <div className="main-content">
    <header>
      <Link to="/"><h1 className="logo">Shopsy</h1></Link>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={AuthModalContainer}/>
    <AuthRoute path="/signup" component={AuthModalContainer}/>
    <Route exact path="/" component={ProductIndexContainer} />
    <Route path="/products/:productId" component={ProductShowContainer}/>
  </div>
);

export default App;
