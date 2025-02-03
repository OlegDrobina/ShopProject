import { takeEvery } from "redux-saga/effects";
import productAsyncActions from "./asyncAction";
import { callCreateProductWorker, callGetProductsWorker } from "./workers";

export function* createProductWatcher() {
  yield takeEvery(
    productAsyncActions.createProductAction.type,
    callCreateProductWorker
  );
  yield takeEvery(
    productAsyncActions.getProductAction.type,
    callGetProductsWorker
  );
}
