import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/loginaction";

import Typography from "@mui/material/Typography";
const Logout = () => {
  // get login state from store
  const login = useSelector((state) => state.login);

  // Dispatch logout action at the of page loading
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutAction(login.username));
  }, []);

  return (
    <div>
      <Typography variant="h3">Logged out successfully!!</Typography>
    </div>
  );
};

export default Logout;