import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { Category } from "../Header/intefaces";

interface Props {
  handlerClose: () => void;
  anchorEl: (EventTarget & HTMLButtonElement) | null;
  array: Array<Category>;
  open: boolean;
}

function MenuCategory({ handlerClose, anchorEl, open, array }: Props) {
  return (
    <Menu onClose={handlerClose} anchorEl={anchorEl} open={open}>
      {array.map((el, i) => (
        <MenuItem key={i} onClick={handlerClose}>
          {el.name}
        </MenuItem>
      ))}
    </Menu>
  );
}

export default MenuCategory;
