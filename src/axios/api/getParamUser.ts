import axios from "../axios";

function getParamUser({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) {
  return axios.get("/api/users", {
    headers: {
      authorization: accessToken,
      "x-refresh": refreshToken,
    },
  });
}

export default getParamUser;
