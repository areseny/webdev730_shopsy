import * as ProductApiUtil from "../util/product_api_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const receiveAllProducts = products => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  product
});

export const getAllProducts = () => dispatch =>
  ProductApiUtil.fetchProducts().then(products =>
    dispatch(receiveAllProducts(products))
  );

export const getProduct = id => dispatch =>
  ProductApiUtil.fetchProduct(id).then(product =>
    dispatch(receiveProduct(product))
  );

export const getSearchProducts = searchTerm => dispatch =>
  ProductApiUtil.fetchSearchProducts(searchTerm).then(products =>
    dispatch(receiveAllProducts(products))
  );

export const getFeaturedProducts = () => dispatch =>
  ProductApiUtil.fetchFeaturedProducts().then(products =>
    dispatch(receiveAllProducts(products))
  );

export const getProductsByCategory = categoryId => dispatch =>
  ProductApiUtil.fetchProductsByCategory(categoryId).then(products =>
    dispatch(receiveAllProducts(products))
  );

export const getProductsByUser = userId => dispatch =>
  ProductApiUtil.fetchProductsByUser(userId).then(products =>
    dispatch(receiveAllProducts(products))
  );

export const createProduct = (userId, newProduct, categoryIds) => dispatch =>
  ProductApiUtil.createProduct(userId, newProduct, categoryIds).then(product =>
    dispatch(receiveProduct(product))
  );

export const deleteProduct = (userId, product) => dispatch =>
  ProductApiUtil.deleteProduct(userId, product).then(p =>
    dispatch(removeProduct(p))
  );

export const updateProduct = (userId, product, categoryIds) => dispatch =>
  ProductApiUtil.updateProduct(userId, product, categoryIds).then(updatedProduct =>
    dispatch(receiveProduct(updatedProduct))
  );
