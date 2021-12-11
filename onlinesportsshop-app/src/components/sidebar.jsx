import React, { useState } from "react";

import {
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const SideBar = () => {
  // define state in functional component
  const [categories, setCategories] = useState([
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ]);
  return (
    <div>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List>
          {categories.map((c) => (
            <ListItem>
              <ListItemButton>
                <ListItemText primary={c} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default SideBar;