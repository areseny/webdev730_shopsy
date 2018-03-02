import React from 'react';
import { Link } from 'react-router-dom';

export default class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    this.props.action();
  };

  render() {
    if (this.props.type === 'option') {
      return (
        <option value={String(this.props.category.id)}>
          {this.props.category.name}
        </option>
      );
    } else {
      return (
        <li>
          <Link
            to={`/categories/${this.props.category.id}`}
            onClick={this.handleClick}
          >
            {this.props.category.name}
          </Link>
        </li>
      );
    }
  }
}
