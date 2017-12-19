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
    console.log("product", this.state);
    console.log("params", this.props.match.params);
    const product = Object.assign({}, this.state);
    this.props.action(this.props.match.params.userId, product);
  }

  render() {
    return (
      <div className="product-form-container">
        <form className="product-form" onSubmit={this.handleSubmit}>
          <input
            placeholder="Title"
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />
          <input
            placeholder="Price"
            type="number"
            value={this.state.price}
            onChange={this.update("price")}
          />
          <textarea
            placeholder="Description"
            name="description"
            cols="30"
            rows="10"
            value={this.state.description}
            onChange={this.update("description")}
          >
            {this.state.description}
          </textarea>
          <input
            placeholder="Image Url"
            type="text"
            value={this.state.imageUrl}
            onChange={this.update("image_url")}
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
