export const fetchProduct = id =>
  $.ajax({
    method: "GET",
    url: `api/products/${id}`
  });

export const fetchProducts = () =>
  $.ajax({
    method: "GET",
    url: `api/products`
  });

export const fetchSearchProducts = searchTerm =>
  $.ajax({
    method: "GET",
    url: `api/products?search=${searchTerm}`
  });

export const fetchProductsByCategory = categoryId =>
  $.ajax({
    method: "GET",
    url: `api/categories/${categoryId}`
  });

export const fetchFeaturedProducts = () =>
  $.ajax({
    method: "GET",
    url: `api/featured/products`
  });

export const fetchProductsByUser = userId => 
  $.ajax({
    method: "GET",
    url: `api/users/${userId}/products`
  });