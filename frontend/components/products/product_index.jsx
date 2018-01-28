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
    if (
      nextProps.location.search &&
      this.props.location.search !== nextProps.location.search
    ) {
      const parsed = queryString.parse(nextProps.location.search);
      this.props.getSearchProducts(parsed.search);
    } else if (
      this.props.sellerId &&
      this.props.sellerId !== nextProps.sellerId
    ) {
      this.props.getProductsByUser(nextProps.sellerId);
    } else if (
      this.props.location.pathname !== "/" &&
      this.props.match.params.categoryId !== nextProps.match.params.categoryId
    ) {
      this.props.getProductsByCategory(nextProps.match.params.categoryId);
    }
  }

  componentDidMount() {
    if (this.props.location.search) {
      const parsed = queryString.parse(this.props.location.search);
      this.props.getSearchProducts(parsed.search);
    } else if (this.props.location.pathname === "/") {
      this.props.getFeaturedProducts();
    } else if (this.props.match.path === "/users/:userId") {
      this.props.getProductsByUser(this.props.match.params.userId);
    } else if (this.props.sellerId) {
      this.props.getProductsByUser(this.props.sellerId);
    } else {
      this.props.getProductsByCategory(this.props.match.params.categoryId);
    }
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
            action={this.props.deleteProduct}
          />
        ));
    } else {
      return this.props.products.map(product => (
        <ProductIndexItem
          key={product.id}
          product={product}
          path={this.props.match.path}
          action={this.props.deleteProduct}
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
