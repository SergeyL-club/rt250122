import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

const textColor = "#ffffff";
const styleAppBar: SxProps<Theme> = {
  height: "64px",
};
const styleButton: SxProps<Theme> = {
  height: "50px",
  marginRight: "5px",
  ":hover": {
    background: "#1565c0",
  },
  background: "#0d47a1",
};
const styleTypography: SxProps<Theme> = {
  fontSize: "14px",
};
const styleToolBar: SxProps<Theme> = {
  maxWidth: "200px",
  display: "flex",
  marginLeft: "auto",
};

export { textColor, styleButton, styleTypography, styleAppBar, styleToolBar };
