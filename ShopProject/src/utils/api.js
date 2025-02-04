import axios from "axios";
import { PRODUCTS_SERVICE_URL } from "../constants/api";

const instance = axios.create({
  baseURL: PRODUCTS_SERVICE_URL,
});

//Added to overcome mockapi random default values
const formCreateProductBody = (params) => {
  const { id, name, category, description, price, quantity } = params;
  return {
    id: id,
    name: name,
    category: category || "",
    description: description || "",
    price: price || 0.0,
    quantity: quantity || 0,
  };
};

const api = {
  createProduct(params) {
    return instance.post("/products", formCreateProductBody(params));
  },
  getProducts() {
    return instance.get("/products");
  },
  deleteProduct(id) {
    return instance.delete(`/products/${id}`);
  },
  editProduct(params) {
    return instance.put(`/products/${params.id}`, params);
  },
};

export default api;
