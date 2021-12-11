import { Typography } from "@mui/material";
import React, { Component } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import IconButton from "@mui/material/IconButton";

class Home extends React.Component {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <IconButton aria-label="decrement" onClick={this.decrement}>
          <RemoveCircleIcon />
        </IconButton>
        {this.state.count}
        <IconButton aria-label="increment" onClick={this.increment}>
          <AddCircleIcon />
        </IconButton>
      </div>
    );
  }
}

export default Home;