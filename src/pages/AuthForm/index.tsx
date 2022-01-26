import {
  Container,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import authUser from "../../axios/api/authUser";
import getParamUser from "../../axios/api/getParamUser";
import { useUser } from "../../context/user.context";
import {
  styleBackground,
  styleForm,
  styleTypography,
  styleButtonAuth,
} from "./styles";

interface Props {
  closeForm: () => void;
}

function AuthForm({ closeForm }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const User = useUser();

  function handlerChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    if (e.currentTarget.id === "Email") {
      setEmail(e.currentTarget.value);
    } else if (e.currentTarget.id === "Password") {
      setPassword(e.currentTarget.value);
    }
  }

  function handlerAuth() {
    authUser({ email, password })
      .then((req) => {
        const accessToken = req.data["accessToken"];
        const refreshToken = req.data["refreshToken"];

        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);
        }
        if (refreshToken) {
          localStorage.setItem("refreshToken", refreshToken);
        }
        getParamUser({ accessToken, refreshToken })
          .then((req) => {
            User.setUserValue(req.data);
            closeForm();
          })
          .catch((e: any) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <Box sx={styleBackground} onClick={closeForm} />
      <Container sx={styleForm}>
        <Typography sx={{ margin: "auto" }} variant="h4">
          Авторизация
        </Typography>
        <FormControl sx={{ marginTop: "30px" }} variant="standard">
          <InputLabel>Электронная почта</InputLabel>
          <Input id="Email" onChange={(e) => handlerChange(e)}></Input>
        </FormControl>
        <FormControl sx={{ marginTop: "20px" }} variant="standard">
          <InputLabel>Пароль</InputLabel>
          <Input
            id="Password"
            onChange={(e) => handlerChange(e)}
            type="password"
          ></Input>
        </FormControl>
        <Button onClick={handlerAuth} sx={styleButtonAuth}>
          <Typography sx={styleTypography} variant="body1">
            Вход
          </Typography>
        </Button>
      </Container>
    </>
  );
}

export default AuthForm;
