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
    if (this.props.location.search !== nextProps.location.search) {
      if (nextProps.location.search) {
        const parsed = queryString.parse(nextProps.location.search);
        this.props.getSearchProducts(parsed.search);
      } else {
        this.props.getProductsByCategory(nextProps.match.params.categoryId);
      }
    } else if (
      this.props.location.pathname !== "/" &&
      this.props.match.params.categoryId !== nextProps.match.params.categoryId
    ) {
      this.props.getProductsByCategory(nextProps.match.params.categoryId);
    } 
  }

  componentDidMount() {
    console.log(this.props.match);
    if (this.props.location.search) {
      const parsed = queryString.parse(this.props.location.search);
      this.props.getSearchProducts(parsed.search);
    } else if (this.props.location.pathname === "/") {
      this.props.getFeaturedProducts();
    } else if (this.props.match.path === "/users/:userId") {
      this.props.getProductsByUser(this.props.match.params.userId);
    }
    else {
      this.props.getProductsByCategory(this.props.match.params.categoryId);
    }
  }

  render() {
    return (
      <div className="main-index">
        <div className="product-index">
          <div className="product-row">
            {this.props.products.length === 0 ? (
              <p>There are no products matching that selection.</p>
            ) : (
              this.props.products.map(product => (
                <ProductIndexItem key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
