import { call, put } from "redux-saga/effects";
import api from "../../../utils/api";
import { getProduct } from "../slice";

export function* callCreateProductWorker(action) {
  try {
    yield call(api.createProduct, action.payload);
    const { data } = yield call(api.getProducts);
    yield put(getProduct(data));
  } catch (e) {
    console.log(e);
  }
}

export function* callGetProductsWorker() {
  try {
    const { data } = yield call(api.getProducts);
    yield put(getProduct(data));
  } catch (e) {
    console.log(e);
  }
}
