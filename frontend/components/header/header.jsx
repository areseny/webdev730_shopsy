import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchFormContainer from "../search/search_form_container";
import GreetingContainer from "../greeting/greeting_container";
import CategoriesNavContainer from "./categories_nav_container";

export default class Header extends React.Component {
  componentWillReceiveProps(nextProps) {
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
    return (
      <header>
        <div className="main-header">
          <div className="left-sub-header">
            <Link to="/">
              <h1 className="logo">Shopsy</h1>
            </Link>
            <img
              src="https://res.cloudinary.com/brainzilla/image/upload/v1511551698/hamburger_d3hkc7.png"
              onClick={this.handleClick}
              className="hamburger"
            />
          <div className="desktop-search-container">
            <SearchFormContainer />
          </div>
          </div>
          <GreetingContainer />
        </div>
        <div className="search-sub-header">
          <SearchFormContainer />
        </div>
        <div className="sub-header hide-nav" id="catNav">
          <CategoriesNavContainer />
        </div>
      </header>
    );
  }
}
