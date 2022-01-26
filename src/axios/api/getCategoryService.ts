import axios from "../axios";

function getCategoryServices() {
  return axios.get("/api/categoryServices");
}

export default getCategoryServices;
