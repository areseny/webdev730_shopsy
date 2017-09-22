import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => (
  <div className="banner">
    <div className='banner-image'>
      <div className="banner-text"></div>
      <Link to={'/products'}>
        <div className="banner-btn">Shop Now</div>
      </Link>
    </div>
  </div>
);

export default Banner;
