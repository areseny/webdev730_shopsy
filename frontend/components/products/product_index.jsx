import React from "react";
import ProductIndexItem from "./product_index_item";
import Banner from "../banner/banner";
const queryString = require("query-string");

export default class ProductIndex extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      if (nextProps.location.search) {
        const parsed = queryString.parse(nextProps.location.search);
        this.props.getSearchProducts(parsed.search);
      } else {
        this.props.getAllProducts();
      }
    }
  }

  componentDidMount() {
    if (this.props.location.search) {
      const parsed = queryString.parse(this.props.location.search);
      this.props.getSearchProducts(parsed.search);
    } else {
      this.props.getAllProducts();
    }
  }

  render() {
    return (
      <div className="main-index">
        <div className="product-index">
          <div className="product-row">
            {this.props.products.map(product => (
              <ProductIndexItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
