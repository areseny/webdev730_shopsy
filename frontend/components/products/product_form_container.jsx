import { connect } from "react-redux";
import ProductForm from "./product_form";
import { withRouter } from "react-router-dom";
import { createProduct, updateProduct } from "../../actions/product_actions";
import { getAllCategories } from "../../actions/category_actions";

const mapStateToProps = ({ products, categories } , { type, match }) => {
  let product, formType;
  if (!match.params.productId) {
    product = {
      title: "",
      price: "",
      description: "",
      image_url: "",
      public_id: "",
    };
  } else {
    product = products[match.params.productId];
  }
  return { 
    product,
     formType,
     categories: Object.values(categories)
     };
};

const mapDispatchToProps = (dispatch, { match }) =>  {
  const action = !match.params.productId ? createProduct : updateProduct;
  return {
    action: (userId, product, categories) => dispatch(action(userId, product, categories)),
    getAllCategories: () => dispatch(getAllCategories())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductForm)
);
