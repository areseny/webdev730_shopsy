import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchFormContainer from "../search/search_form_container";
import GreetingContainer from "../greeting/greeting_container";
import CategoriesNavContainer from "./categories_nav_container";

export default class Header extends React.Component {
  render() {
    return <header>
        <div className="main-header">
          <Link to="/">
            <h1 className="logo">Shopsy</h1>
          </Link>
          <div className="desktop-search-container">
            <SearchFormContainer id="desktopSearch"/>
          </div>
          <GreetingContainer />
        </div>
          <div className="search-sub-header">
            <SearchFormContainer id="mobileSearch"/>
          </div>
        <div className="sub-header">
          <CategoriesNavContainer />
        </div>
      </header>;
  }
}
