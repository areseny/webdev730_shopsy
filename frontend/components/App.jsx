import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import AuthRoute from '../util/route_util';
import { Link } from 'react-router-dom';

const App = () => (
  <div className="main-content">
    <header>
      <Link to="/"><h1 className="logo">Shopsy</h1></Link>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={SessionFormContainer}/>
  </div>
);

export default App;
