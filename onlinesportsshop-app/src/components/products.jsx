import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Grid } from "@mui/material";
import { getAllProductsAction } from "../actions/productactions";
import ProductCard from "./productcard";
import SideBar from "./sidebar";
import SearchProduct from "./searchproduct";
import { Link } from "react-router-dom";

const Products = () => {
  // defining state in functional component
  //const [count, setCount] = useState(0);
  //console.log(count);

  // dispatch getAllProductsAction to get all products from rest api at the time of page loading
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsAction());
  }, []);

  // Get products from store
  const products = useSelector((state) => state.fakeStore.products);
  console.log(products);

  return (
    <div style={{ marginTop: "15px" }}>
      <SearchProduct />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
          <SideBar />
        </Grid>
        <Grid item xs={12} sm={10}>
          <Grid container spacing={2}>
            {products.map((p) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                component={Link}
                to={`/product/details/${p.id}`}
              >
                <ProductCard product={p} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;