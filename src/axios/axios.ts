import axiosPackage from "axios";
import defaultConfig from "../config/default";

const axios = axiosPackage.create({
  baseURL: defaultConfig.serverUrl,
  timeout: defaultConfig.timeOut,
});

export default axios;
