import React from 'react';
import CategoryIndexItem from '../header/category_index_item';

export default class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(this.props.product, {
      filename: ''
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.product !== nextProps.product) {
      this.setState(nextProps.product);
    }
  }

  componentWillMount() {
    this.props.getAllCategories();
  }

  componentWillUnmount() {
    this.props.closeProductForm();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  clearForm() {
    const newState = {
      title: '',
      price: '',
      description: '',
      image_url: '',
      filename: '',
      productCategories: []
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

  handleSelectMousedown = e => {
    e.preventDefault();
    const productCategories = this.state.productCategories;
    console.log(productCategories);
    if (!productCategories.includes(e.target.value)) {
      productCategories.push(e.target.value);
    } else {
      const index = productCategories.indexOf(e.target.value);
      productCategories.splice(index, 1);
    }
    this.setState({ productCategories });
  };

  handleSubmit = e => {
    e.preventDefault();
    const productCategories = this.state.productCategories;
    let product = Object.assign({}, this.state);
    this.props.submitAction(
      this.props.match.params.userId,
      product,
      productCategories
    );
    this.clearForm();
    this.props.closeProductForm();
  };

  render() {
    const requiredDot = <span className="required-dot">*</span>;
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
          <label htmlFor="title">Title {requiredDot}</label>
          <input
            className="form-text-input"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.update('title')}
          />
          <label htmlFor="price">Price {requiredDot}</label>
          <input
            className="form-text-input"
            title="price"
            type="number"
            min="0"
            value={this.state.price}
            onChange={this.update('price')}
          />
          <label htmlFor="description">Description {requiredDot}</label>
          <textarea
            className="form-text-input"
            title="description"
            name="description"
            cols="30"
            rows="10"
            value={this.state.description}
            onChange={this.update('description')}
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
            Categories{' '}
            <span className="italic-msg"> - Select all that apply</span>
          </label>
          <select
            className="category-select"
            name="categories"
            id="catSelect"
            multiple={true}
            value={this.state.productCategories}
            onMouseDown={this.handleSelectMousedown}
          >
            {categoryList}
          </select>
          <div className="italic-msg">
            {requiredDot} Indicates required field
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
