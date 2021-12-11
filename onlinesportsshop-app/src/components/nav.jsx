import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Nav = () => {
  const count = useSelector((state) => state.count);
  const login = useSelector((state) => state.login);
  console.log(count);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button to="/home" color="inherit" component={NavLink}>
              MyApp
            </Button>

            <Button color="inherit" to="/customers" component={NavLink}>
              customers
            </Button>
            <Button
              color="inherit"
              to="/products"
              component={NavLink}
              style={{ marginRight: "auto" }}
            >
              Products
            </Button>
            {login.loggedIn ? (
              <Button to="/logout" component={NavLink} color="inherit">
                Logout
              </Button>
            ) : (
              <Button color="inherit" component={NavLink} to="/login">
                Login
              </Button>
            )}

            <Button color="inherit" component={NavLink} to="/register">
              Register
            </Button>

            <IconButton aria-label="cart" component={NavLink} to="/cart">
              <Badge badgeContent={count}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;