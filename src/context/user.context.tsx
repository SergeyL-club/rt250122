import { createContext, useContext, useEffect, useState } from "react";
import getParamUser from "../axios/api/getParamUser";

const User = createContext<any | null>(null);

function UserProvider(props: any) {
  const [UserValue, setUserValue] = useState<object | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (accessToken && refreshToken) {
      getParamUser({ accessToken, refreshToken })
        .then((req) => {
          setUserValue(req.data);
        })
        .catch((e: any) => {
          console.log(e);
        });
    }
  }, []);

  const values = UserValue ? { ...UserValue, setUserValue } : { setUserValue };

  return <User.Provider value={values} {...props} />;
}

export default UserProvider;

export const useUser = () => useContext(User);
