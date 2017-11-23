import React from "react";
import { Link } from "react-router-dom";

const Banner = () => (
  <div className="banner">
    <div className="banner-image">
      <div className="banner-text" />
      <Link to={"/categories/1"}>
        <div className="banner-btn">Shop All Apparel</div>
      </Link>
    </div>
  </div>
);

export default Banner;
