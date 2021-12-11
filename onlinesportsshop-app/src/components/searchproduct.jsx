import React from "react";
import { Box, TextField } from "@mui/material";

const SearchProduct = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
      </Box>
    </div>
  );
};

export default SearchProduct;