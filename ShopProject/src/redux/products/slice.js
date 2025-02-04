import { createSlice } from "@reduxjs/toolkit";

export const product = createSlice({
  name: "product",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {
    createProduct: () => {},
    getProduct: (state, action) => {
      state.items = action.payload;
    },
    deleteProduct: () => {},
  },
});

export const { createProduct, getProduct, deleteProduct } = product.actions;
