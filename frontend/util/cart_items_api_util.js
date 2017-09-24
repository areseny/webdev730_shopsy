export const fetchCartItems = () => (
  $.ajax({
    method: `GET`,
    url: 'api/cart_items'
  })
);

export const fetchCartItem = id => (
  $.ajax({
    method: `GET`,
    url: `api/cart_items/${id}`
  })
);

export const createCartItem = productId => (
  $.ajax({
    method: `POST`,
    url: `api/cart_items`,
    data: {product_id: productId}
  })
);

export const deleteCartItem = id => (
  $.ajax({
    method: `DELETE`,
    url: `api/cart_items/${id}`
  })
);
