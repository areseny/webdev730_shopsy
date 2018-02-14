import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ allProducts }) => {
  if (!allProducts) return <div />;
  return (
    <div className="banner">
      <div className="banner-image">
        <div className="banner-text" />
        <Link to={`/categories/${allProducts.id}`}>
          <div className="banner-btn">Shop All Apparel</div>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
