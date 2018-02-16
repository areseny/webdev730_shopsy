import React from "react";
import ProductIndexItem from "./product_index_item";
import Banner from "../banner/banner";
import { getProductsByCategory } from "../../actions/product_actions";
const queryString = require("query-string");

export default class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.arg !== nextProps.arg) {
        nextProps.action(nextProps.arg);
    }
  }

  componentDidMount() {
    this.props.action(this.props.arg);
  }

  displayProducts() {
    if (this.props.products.length === 0) {
      return <p>There are no products matching that selection.</p>;
    } else if (this.props.sellerId) {
      return this.props.products
        .filter(
          product => product.id !== parseInt(this.props.match.params.productId)
        )
        .map(product => (
          <ProductIndexItem
            key={product.id}
            product={product}
            path={this.props.match.path}
            deleteProduct={this.props.deleteProduct}
            productToEdit={this.props.productToEdit}
            openProductForm={this.props.openProductForm}
          />
        ));
    } else {
      return this.props.products.map(product => (
        <ProductIndexItem
          key={product.id}
          product={product}
          path={this.props.match.path}
        />
      ));
    }
  }

  render() {
    return (
      <div className="main-index">
        <div className="product-index">
          <div className="product-row">{this.displayProducts()}</div>
        </div>
      </div>
    );
  }
}
