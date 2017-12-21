import React from "react";
import CategoryIndexItem from "../header/category_index_item";

export default class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.product;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImg = this.uploadImg.bind(this);
  }

  componentDidMount() {
    this.props.getAllCategories();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  clearForm() {
    document.getElementById("filename").innerHTML = "";
    const product = { title: "", price: "", description: "", image_url: "" };
    this.setState(product);
    const options = Array.from(document.getElementById("catSelect").options);
    options.forEach(opt => (opt.selected = false));
  }

  uploadImg(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if (!error) {
        console.log(results);
        this.setState({ ["image_url"]: results[0].secure_url });
        document.getElementById("filename").innerHTML = `${
          results[0].original_filename
        }.${results[0].format}`;
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const select = document.getElementById("catSelect");
    const options = Array.from(select.options);
    const catIds = options
      .filter(option => option.selected)
      .map(opt => opt.value);
    let product = Object.assign({}, this.state);
    this.props.action(this.props.match.params.userId, product, catIds);
    this.clearForm();
  }

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
      <div id="addProductForm" className="product-form-container hide-form">
        <form className="form product-form" onSubmit={this.handleSubmit}>
          <label for="title">Title</label>
          <input
            className="form-text-input"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
          />
          <label for="price">Price</label>
          <input
            className="form-text-input"
            title="price"
            type="number"
            value={this.state.price}
            onChange={this.update("price")}
          />
          <label for="description">Description</label>
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
            <button onClick={this.uploadImg}>Upload Image</button>
            <div id="filename" />
          </div>
          <label for="categories">Categories</label>
          <select
            className="category-select"
            name="categories"
            id="catSelect"
            multiple
          >
            {categoryList}
          </select>
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
