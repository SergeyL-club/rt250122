import axios from "../axios";

function authUser({ email, password }: { email: string; password: string }) {
  return axios.post("/api/sessions", { email, password });
}

export default authUser;
