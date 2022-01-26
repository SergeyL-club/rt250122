import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import getCategoryProducts from "../../axios/api/getCategoryProduct";
import getCategoryServices from "../../axios/api/getCategoryService";
import unAuthUser from "../../axios/api/unAuthUser";
import { useUser } from "../../context/user.context";
import MenuCategory from "../components/menuCategory";
import { Category } from "./intefaces";
import {
  styleAppBar,
  styleButton,
  styleToolBar,
  styleTypography,
  textColor,
} from "./styles";

interface Props {
  openAuthForm: () => void;
}

function Header({ openAuthForm }: Props) {
  const [categoryServices, setCategoryServices] = useState<Array<Category>>([]);
  const [categoryProducts, setCategoryProducts] = useState<Array<Category>>([]);

  const [anchorElS, setAnchorElS] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  const [openCS, setOpenCS] = useState(false);
  const [anchorElP, setAnchorElP] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const [openCP, setOpenCP] = useState(false);

  const AuthButton = useRef<HTMLButtonElement>(null);
  const UnAuthButton = useRef<HTMLButtonElement>(null);
  const User = useUser();

  useEffect(() => {
    if (User["_id"] && AuthButton.current) {
      AuthButton.current.setAttribute("style", "display: none;");
    } else if (AuthButton.current) {
      AuthButton.current.removeAttribute("style");
    }
    if (!User["_id"] && UnAuthButton.current) {
      UnAuthButton.current.setAttribute("style", "display: none;");
    } else if (UnAuthButton.current) {
      UnAuthButton.current.removeAttribute("style");
    }
  }, [User, UnAuthButton, AuthButton]);

  useEffect(() => {
    getCategoryServices()
      .then((result) => {
        setCategoryServices(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
    getCategoryProducts()
      .then((result) => {
        setCategoryProducts(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function handlerOpenCS(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setOpenCS(true);
    setAnchorElS(e.currentTarget);
  }

  function handlerCloseCS() {
    setOpenCS(false);
  }

  function handlerOpenCP(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setOpenCP(true);
    setAnchorElP(e.currentTarget);
  }

  function handlerCloseCP() {
    setOpenCP(false);
  }

  function handlerUnAuth() {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (accessToken && refreshToken) {
      unAuthUser({ accessToken, refreshToken }).then((req) => {
        localStorage.clear();
        if (User) {
          User.setUserValue(null);
        }
      });
    }
  }

  return (
    <AppBar sx={styleAppBar}>
      <Toolbar sx={styleToolBar}>
        <Button sx={styleButton} onClick={(e) => handlerOpenCS(e)}>
          <Typography sx={styleTypography} variant="h6" color={textColor}>
            Услуги
          </Typography>
        </Button>
        <MenuCategory
          handlerClose={handlerCloseCS}
          anchorEl={anchorElS}
          open={openCS}
          array={categoryServices}
        />
        <Button sx={styleButton} onClick={(e) => handlerOpenCP(e)}>
          <Typography sx={styleTypography} variant="h6" color={textColor}>
            Товары
          </Typography>
        </Button>
        <MenuCategory
          handlerClose={handlerCloseCP}
          anchorEl={anchorElP}
          open={openCP}
          array={categoryProducts}
        />
        <Button ref={AuthButton} onClick={openAuthForm} sx={styleButton}>
          <Typography sx={styleTypography} variant="h6" color={textColor}>
            Вход
          </Typography>
        </Button>
        <Button ref={UnAuthButton} onClick={handlerUnAuth} sx={styleButton}>
          <Typography sx={styleTypography} variant="h6" color={textColor}>
            Выход
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
