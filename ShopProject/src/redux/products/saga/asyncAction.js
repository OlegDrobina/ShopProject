import { createAction } from "@reduxjs/toolkit";

const productAsyncActions = {
  createProductAction: createAction("CREATE_PRODUCT_ASYNC"),
  getProductAction: createAction("GET_PRODUCT_ASYNC"),
  deleteProductAction: createAction("DELETE_PRODUCT_ASYNC"),
  editProductAction: createAction("EDIT_PRODUCT_ASYNC"),
};

export default productAsyncActions;
