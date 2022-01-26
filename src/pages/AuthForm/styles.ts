import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { styleButton } from "../Header/styles";

const styleForm: SxProps<Theme> = {
  zIndex: "2",
  width: "25vw",
  position: "absolute",
  borderRadius: "10px",
  left: "50%",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  padding: "30px",
  background: "#ffffff",
  transform: "translate(-50%, -50%)",
};

const styleBackground: SxProps<Theme> = {
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: "100vh",
  opacity: "0.4",
  zIndex: "1",
  background: "#cccccc",
};

const styleTypography: SxProps<Theme> = {
  color: "#ffffff",
};

const styleButtonAuth: SxProps<Theme> = {
  ...styleButton,
  marginTop: "30px",
};

export { styleForm, styleBackground, styleTypography, styleButtonAuth };
