import { useDispatch, useSelector } from "react-redux";
import productAsyncActions from "../../../redux/products/saga/asyncAction";
import { push } from "redux-first-history";
import selector from "../../../redux/products/selectors";
import { useEffect } from "react";

export const usePreview = () => {
  const dispatch = useDispatch();
  const items = useSelector(selector.items);

  useEffect(() => {
    dispatch(productAsyncActions.getProductAction());
    if (items.length === 0) dispatch(push("/products"));
  }, []);

  return { items };
};
