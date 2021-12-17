import React, { Component } from "react";
//import TextField from "@mui/material/TextField";
//import Box from "@mui/material/Box";

import { connect } from "react-redux";
import { loginAction } from "../actions/loginaction";

import {
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Button,
  Typography,
} from "@mui/material";

class Login extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
      role: "",
    },
  };
  handleChange = (event) => {
    const usr = { ...this.state.user };
    usr[event.target.name] = event.target.value;
    this.setState({ user: usr });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // dispatch login action
    this.props.loginAction(this.state.user);

    // Redirect to products page on successfull login
    if (this.props.login.loggedIn) {
      this.props.history.push("/products");
    }
  };
  render() {
    return (
      <div
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      >
        <Typography variant="h5">Login Form</Typography>
        <Paper elevation={3}>
          <form
            onSubmit={this.handleSubmit}
            noValidate
            autoComplete="off"
            padding={2}
          >
            <TextField
              id="filled-basic"
              label="Username"
              variant="filled"
              type="text"
              style={{ marginBottom: 10 }}
              fullWidth
              value={this.state.email}
              name="username"
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
              fullWidth
              style={{ marginBottom: 10 }}
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
            <FormControl variant="filled" fullWidth>
              <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={this.state.role}
                name="role"
                onChange={this.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="customer">Customer</MenuItem>
               
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ marginTop: "10px" }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    loginAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Login);