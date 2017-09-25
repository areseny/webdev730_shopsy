import React from 'react';
import { Link } from 'react-router-dom';
import SearchFormContainer from '../search/search_form_container';
import GreetingContainer from '../greeting/greeting_container';
import CategoriesNav from './categories_nav';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="main-header">
          <Link to="/"><h1 className="logo">Shopsy</h1></Link>
          <SearchFormContainer />
          <GreetingContainer />
        </div>
        <div className="sub-header">
          <CategoriesNav />
        </div>
      </header>
    );
  }
}
