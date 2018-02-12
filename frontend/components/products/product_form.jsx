import React from "react";
import CategoryIndexItem from "../header/category_index_item";

export default class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(this.props.product, {
      filename: "",
      options: []
    });
  }

  componentDidMount() {
    this.props.getAllCategories();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  clearForm() {
    const newState = {
      title: "",
      price: "",
      description: "",
      image_url: "",
      filename: "",
      options: [],
    };
    this.setState(newState);
  }

  uploadImg = e => {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if (!error) {
        this.setState({
          public_id: results[0].public_id,
          image_url: results[0].secure_url,
          filename: `${results[0].original_filename}.${results[0].format}`
        });
      }
    });
  };

  handleSelectChange = e => {
    e.preventDefault();
    const options = this.state.options;
    options.push(e.target.value);
    this.setState({ options: options });
  };

  handleSubmit = e => {
    e.preventDefault();
    const options = this.state.options;
    let product = Object.assign({}, this.state);
    this.props.action(this.props.match.params.userId, product, options);
    this.clearForm();
  };

  render() {
    const categoryList = this.props.categories
      .slice(1)
      .map(category => (
        <CategoryIndexItem
          key={category.id}
          category={category}
          type="option"
        />
      ));
    return (
      <div id="addProductForm" className="product-form-container">
        <form className="form product-form" onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title <span className="required-dot">*</span>
          </label>
          <input
            className="form-text-input"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />
          <label htmlFor="price">
            Price <span className="required-dot">*</span>
          </label>
          <input
            className="form-text-input"
            title="price"
            type="number"
            min="0"
            value={this.state.price}
            onChange={this.update("price")}
          />
          <label htmlFor="description">
            Description <span className="required-dot">*</span>
          </label>
          <textarea
            className="form-text-input"
            title="description"
            name="description"
            cols="30"
            rows="10"
            value={this.state.description}
            onChange={this.update("description")}
          >
            {this.state.description}
          </textarea>
          <div className="img-upload-container">
            <div className="upload-btn-container">
              <button className="img-upload-btn" onClick={this.uploadImg}>
                Upload Image
              </button>
              <span className="required-dot"> *</span>
            </div>
            <div id="filename">{this.state.filename}</div>
          </div>
          <label htmlFor="categories">
            Categories{" "}
            <span className="italic-msg"> - Select all that apply</span>
          </label>
          <select
            className="category-select"
            name="categories"
            id="catSelect"
            value={this.state.options}
            onChange={this.handleSelectChange}
            multiple={true}
          >
            {categoryList}
          </select>
          <div className="italic-msg">
            <span className="required-dot">*</span> Indicates required field
          </div>
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
