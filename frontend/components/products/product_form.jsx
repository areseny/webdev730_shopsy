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
    let product = Object.assign({}, this.state);
    this.props.action(this.props.match.params.userId, product);
    product = { title: "", price: "", description: "", image_url: "" };
    this.setState(product);
  }

  render() {
    return (
      <div className="product-form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="form-text-input"
            placeholder="Title"
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />
          <input
            className="form-text-input"
            placeholder="Price"
            type="number"
            value={this.state.price}
            onChange={this.update("price")}
          />
          <textarea
            className="form-text-input"
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
            className="form-text-input"
            placeholder="Image Url"
            type="text"
            value={this.state.image_url}
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
