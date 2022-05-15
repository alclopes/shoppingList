import { createSlice } from '@reduxjs/toolkit'

import productsMock from '../../mocks/products.json'

const initialState = productsMock.products

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleProduct: (state, action) => {
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, checked: !product.checked }
          : product
      )
    },
  },
})

export const { toggleProduct } = productSlice.actions

export default productSlice.reducer
