import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchFormContainer from "../search/search_form_container";
import GreetingContainer from "../greeting/greeting_container";
import CategoriesNavContainer from "./categories_nav_container";
import MediaQuery from "react-responsive";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: this.props.isHidden };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isHidden: nextProps.isHidden });
  }

  handleClick = e => {
    e.preventDefault();
    this.props.action(false);
  };

  render() {
    const classes = ["sub-header"];
    if (this.state.isHidden) {
      classes.push("hide-nav");
    } else {
      classes.push("show-nav");
    }
    return (
      <header>
        <div className="main-header">
          <div className="left-sub-header">
            <Link to="/">
              <h1 className="logo">Shopsy</h1>
            </Link>
            <MediaQuery query="(max-width: 860px)">
              <img
                src="https://res.cloudinary.com/brainzilla/image/upload/v1511551698/hamburger_d3hkc7.png"
                onClick={this.handleClick}
                className="hamburger"
              />
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
        <MediaQuery query="(min-width: 860px)">
          <CategoriesNavContainer />
        </MediaQuery>
        <MediaQuery query="(max-width: 860px)">
          <div className={classes.join(" ")} id="catNav">
            <CategoriesNavContainer />
          </div>
        </MediaQuery>
      </header>
    );
  }
}
