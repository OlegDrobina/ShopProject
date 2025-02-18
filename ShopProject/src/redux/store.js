import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import { rootSaga } from "./rootSaga";
import authReducer from "./authentication/authSlice";
import { product } from "./products/slice";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    router: routerReducer,
    auth: authReducer,
    product: product.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
    routerMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
