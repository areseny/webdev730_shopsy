import React from 'react';
import { Link } from 'react-router-dom';

export default class CategoriesNav extends React.Component {
  render() {
    return (
      <div className="categories-nav">
        <ul>
          <li><Link to="/products">All Products</Link></li>
        </ul>
      </div>
    );
  }
}
