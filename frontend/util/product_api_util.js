export const fetchProduct = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/products/${id}`
  })
);

export const fetchProducts = () => (
  $.ajax({
    method: 'GET',
    url: `api/products`
  })
);
