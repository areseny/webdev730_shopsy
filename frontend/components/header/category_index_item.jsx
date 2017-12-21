import React from "react";
import { Link } from "react-router-dom";

const CategoryIndexItem = ({ category, type }) => {
  if (type === 'option') {
    return (
      <option value={category.id}>{category.name}</option>
    );
  } else {
    return (
    <li>
      <Link to={`/categories/${category.id}`}>{category.name}</Link>
    </li>
    );

  }
  
};

export default CategoryIndexItem;
