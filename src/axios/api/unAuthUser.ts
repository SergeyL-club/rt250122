import axios from "../axios";

function unAuthUser({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) {
  return axios.delete("/api/sessions", {
    headers: {
      authorization: accessToken,
      "x-refresh": refreshToken,
    },
  });
}

export default unAuthUser;
