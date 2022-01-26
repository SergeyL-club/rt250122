import axios from "../axios";

function getCategoryProducts() {
  return axios.get("/api/categoryProducts");
}

export default getCategoryProducts;
