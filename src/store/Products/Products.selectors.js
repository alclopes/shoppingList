export const selectAllProducts = (state) => state.products

export const selectSelectedProducts = (state) =>
  state.products.filter((product) => product.checked)
