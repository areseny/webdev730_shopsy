import React from "react";
import { Link } from "react-router-dom";

const CategoryIndexItem = ({ category }) => (
  <li>
    <Link to={`/categories/${category.id}`}>{category.name}</Link>
  </li>
);

export default CategoryIndexItem;
