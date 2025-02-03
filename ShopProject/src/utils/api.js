import axios from "axios";
import { PRODUCTS_SERVICE_URL } from "../constants/api";

const instance = axios.create({
  baseURL: PRODUCTS_SERVICE_URL,
});

const api = {
  createProduct(params) {
    return instance.post("/products", params);
  },
  getProducts() {
    return instance.get("/products");
  },
};

export default api;
