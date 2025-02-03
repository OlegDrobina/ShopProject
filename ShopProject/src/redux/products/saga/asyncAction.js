import { createAction } from "@reduxjs/toolkit";

const productAsyncActions = {
  createProductAction: createAction("CREATE_PRODUCT_ASYNC"),
  getProductAction: createAction("GET_PRODUCT_ASYNC"),
};

export default productAsyncActions;
