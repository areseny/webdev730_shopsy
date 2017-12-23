import { connect } from "react-redux";
import ProductForm from "./product_form";
import { withRouter } from "react-router-dom";
import { createProduct, updateProduct } from "../../actions/product_actions";
import { getAllCategories } from "../../actions/category_actions";

const mapStateToProps = (state, ownProps) => {
  let product, type;
  if (ownProps.type === "create") {
    product = {
      title: "",
      price: "",
      description: "",
      image_url: "",
      public_id: ""
    };
    type = "Create";
  } else {
    product = state.products[ownProps.match.params.productId];
    type = "Update";
  }
  return { 
    product,
     type,
     categories: Object.values(state.categories)
     };
};

const mapDispatchToProps = (state, ownProps) => dispatch => {
  const action = ownProps.type === "create" ? createProduct : updateProduct;
  return {
    action: (userId, product, categories) => dispatch(action(userId, product, categories)),
    getAllCategories: () => dispatch(getAllCategories())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductForm)
);
