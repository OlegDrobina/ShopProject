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

export function* callDeleteProductWorker(action) {
  try {
    yield call(api.deleteProduct, action.payload);
    const { data } = yield call(api.getProducts);
    yield put(getProduct(data));
  } catch (e) {
    console.log(e);
  }
}

export function* callEditProductWorker(action) {
  try {
    yield call(api.editProduct, action.payload);
    const { data } = yield call(api.getProducts);
    yield put(getProduct(data));
  } catch (e) {
    console.log(e);
  }
}
