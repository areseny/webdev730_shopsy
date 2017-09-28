import React from "react";
import Banner from "../banner/banner.jsx";
import ProductIndexContainer from "../products/product_index_container";
import { withRouter } from "react-router-dom";

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Banner />
        <h1 className="homepage-header">Featured Products</h1>
        <ProductIndexContainer location={this.props.location} />
      </div>
    );
  }
}
