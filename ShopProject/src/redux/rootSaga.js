import { all, call } from "redux-saga/effects";
import { createProductWatcher } from "./products/saga/watchers";

export function* rootSaga() {
  yield all([call(createProductWatcher)]);
}
