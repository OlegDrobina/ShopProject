import { takeEvery } from "redux-saga/effects";
import productAsyncActions from "./asyncAction";
import {
  callCreateProductWorker,
  callDeleteProductWorker,
  callEditProductWorker,
  callGetProductsWorker,
} from "./workers";

export function* createProductWatcher() {
  yield takeEvery(
    productAsyncActions.createProductAction.type,
    callCreateProductWorker
  );
  yield takeEvery(
    productAsyncActions.getProductAction.type,
    callGetProductsWorker
  );
  yield takeEvery(
    productAsyncActions.deleteProductAction.type,
    callDeleteProductWorker
  );
  yield takeEvery(
    productAsyncActions.editProductAction.type,
    callEditProductWorker
  );
}
