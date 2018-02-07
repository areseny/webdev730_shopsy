import React from "react";
import { Link } from "react-router-dom";

export default class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMouseDown = (e) => {
    e.preventDefault();
    const status = $(e.target).prop("selected");
    if (status) {
      $(e.target).prop("selected", false);
    } else {
      $(e.target).prop("selected", true);
    }
  }

  handleClick = (e) => {
    this.props.action(true);
  }

  render() {
    if (this.props.type === "option") {
      return (
        <option
          onMouseDown={this.handleMouseDown}
          value={this.props.category.id}
        >
          {this.props.category.name}
        </option>
      );
    } else {
      return (
        <li>
          <Link to={`/categories/${this.props.category.id}`} onClick={this.handleClick}>
            {this.props.category.name}
          </Link>
        </li>
      );
    }
  }
}
