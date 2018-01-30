import React from "react";
import BannerContainer from "../banner/banner_container";
import ProductIndexContainer from "../products/product_index_container";

const Homepage = () => {
    return (
      <div className="homepage">
        <BannerContainer />
        <h1 className="homepage-header">Featured Products</h1>
        <ProductIndexContainer  />
      </div>
    );
};

export default Homepage;