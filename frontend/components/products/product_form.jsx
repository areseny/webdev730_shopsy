import React from "react";

export default class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.product;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render() {
    return (
      <div className="product-form-container">
        <form className="product-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />
          <input
            type="number"
            value={this.state.price}
            onChange={this.update("price")}
          />
          <textarea
            name="description"
            cols="30"
            rows="10"
            value={this.state.description}
            onChange={this.update("description")}
          >
            {this.state.description}
          </textarea>
          <input
            type="text"
            value={this.state.imageUrl}
            onChange={this.update("imageUrl")}
          />
          <input
            type="submit"
            className="submit-product-btn"
            value={this.props.type}
          />
        </form>
      </div>
    );
  }
}
