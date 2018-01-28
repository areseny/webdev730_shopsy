import React from "react";
import { Link } from "react-router-dom";
import CategoryIndexItem from "./category_index_item";

export default class CategoriesNav extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    const catNav = document.getElementById("catNav");
    catNav.classList.add("hide-nav");
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
        <ul className="categories-list">
          <li className="categories-nav-header">
            Browse By Category
            <img src="https://res.cloudinary.com/brainzilla/image/upload/v1506393086/close_button_gwuq4f.png"
            id="closeBtn"
            onClick={this.handleClick.bind(this)} />
          </li>
          {categoryList}
        </ul>
      </div>
    );
  }
}
