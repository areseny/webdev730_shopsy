import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchFormContainer from "../search/search_form_container";
import GreetingContainer from "../greeting/greeting_container";
import CategoriesNavContainer from "./categories_nav_container";
import MediaQuery from "react-responsive";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = { isHidden: false };
  }

  componentWillReceiveProps() {
    const catNav = document.getElementById("catNav");
    catNav.classList.remove("show-nav");
    catNav.classList.add("hide-nav");
  }

  handleClick(e) {
    e.preventDefault();
    const catNav = document.getElementById("catNav");
    catNav.classList.remove("hide-nav");
    catNav.classList.add("show-nav");
  }

  render() {
    return <header>
        <div className="main-header">
          <div className="left-sub-header">
            <Link to="/">
              <h1 className="logo">Shopsy</h1>
            </Link>
            <MediaQuery query="(max-width: 860px)">
              <img src="https://res.cloudinary.com/brainzilla/image/upload/v1511551698/hamburger_d3hkc7.png" onClick={this.handleClick} className="hamburger" />
            </MediaQuery>
            <div className="desktop-search-container">
              <SearchFormContainer />
            </div>
          </div>
          <GreetingContainer />
        </div>
        <MediaQuery query="(max-width: 860px)">
          <SearchFormContainer />
        </MediaQuery>
        <div className="sub-header hide-nav" id="catNav">
          <CategoriesNavContainer />
        </div>
      </header>;
  }
}
