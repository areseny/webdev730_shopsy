import React from "react";
import { Link } from "react-router-dom";
import CategoryIndexItem from "./category_index_item";

export default class CategoriesNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCategories();
  }

  render() {
    const categoryList = this.props.categories.map(category => (
      <CategoryIndexItem key={category.id} category={category} />
    ));
    return (
      <div className="categories-nav">
        <ul>
          {/* <li>
            <Link to="/products">All Products</Link>
          </li> */}
          {categoryList}
        </ul>

      </div>
    );
  }
}
