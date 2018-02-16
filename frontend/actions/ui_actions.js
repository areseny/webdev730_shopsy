export const OPEN_CATEGORIES_NAV = "OPEN_CATEGORIES_NAV";
export const CLOSE_CATEGORIES_NAV = "CLOSE_CATEGORIES_NAV";
export const OPEN_PRODUCT_FORM = "OPEN_PRODUCT_FORM";
export const CLOSE_PRODUCT_FORM = "CLOSE_PRODUCT_FORM";

export const openCategoriesNav = () => ({
  type: OPEN_CATEGORIES_NAV
});

export const closeCategoriesNav = () => ({
  type: CLOSE_CATEGORIES_NAV
});

export const openProductForm = () => ({
  type: OPEN_PRODUCT_FORM
});

export const closeProductForm = () => ({
  type: CLOSE_PRODUCT_FORM
});
