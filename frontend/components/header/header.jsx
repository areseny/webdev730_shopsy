import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchFormContainer from "../search/search_form_container";
import GreetingContainer from "../greeting/greeting_container";
import CategoriesNavContainer from "./categories_nav_container";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="main-header">
          <Link to="/">
            <h1 className="logo">Shopsy</h1>
          </Link>
          <SearchFormContainer />
          <GreetingContainer />
        </div>
        <div className="sub-header">
          <CategoriesNavContainer />
        </div>
      </header>
    );
  }
}
