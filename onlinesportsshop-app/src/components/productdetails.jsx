import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { getProductByIdAction } from "../actions/productactions";

import {
  Grid,
  Container,
  Box,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByIdAction(props.match.params.id));
  }, []);

  const product = useSelector((state) => state.fakeStore.product);

  return (
    <div>
      <Container>
        <Box m={3}></Box>
        {console.log(product.image)}
        <Grid container spacing={3}>
          <Grid item sm={3}>
            <CardMedia
              image={product.image}
              title={product.title}
              style={{ height: "300px", width: "300px" }}
            />

            <CardActions>
              <Button variant="contained" color="primary">
                Add to cart
              </Button>
              <Link to="/payment" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: "10px" }}
                >
                  Buy now
                </Button>
              </Link>
            </CardActions>
          </Grid>
          <Grid item sm={9}>
            <Box display="flex" ml={3}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ marginRight: "30px" }}
              >
                {product.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                ${product.price}
              </Typography>
            </Box>
            <Box textAlign="left" ml={3}>
              <Typography variant="body2" color="textSecondary">
                {product.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductDetails;