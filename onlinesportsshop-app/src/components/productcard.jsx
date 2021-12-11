import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ProductCard = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, height: 280 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.product.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div">
              {props.product.title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              ${props.product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductCard;