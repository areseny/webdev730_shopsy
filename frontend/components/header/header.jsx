import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchFormContainer from "../search/search_form_container";
import GreetingContainer from "../greeting/greeting_container";
import CategoriesNavContainer from "./categories_nav_container";
import MediaQuery from "react-responsive";

export default class Header extends React.Component {
  render() {
    return <header>
        <div className="main-header">
          <Link to="/">
            <h1 className="logo">Shopsy</h1>
          </Link>
          <MediaQuery query="(min-width: 860px)">
            <SearchFormContainer />
          </MediaQuery>
          <GreetingContainer />
        </div>
        <MediaQuery query="(max-width: 860px)">
          <div className="search-sub-header">
            <SearchFormContainer />
          </div>
        </MediaQuery>
        <div className="sub-header">
          <CategoriesNavContainer />
        </div>
      </header>;
  }
}
