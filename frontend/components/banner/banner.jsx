import React from "react";
import { Link } from "react-router-dom";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCategories();
  }

  render() {
    const category = this.props.categories[0];
    if (!category) return <div></div>;
    return (
      <div className="banner">
        <div className="banner-image">
          <div className="banner-text" />
          <Link to={`/categories/${category.id}`}>
            <div className="banner-btn">Shop All Apparel</div>
          </Link>
        </div>
      </div>
    );
  }
}
