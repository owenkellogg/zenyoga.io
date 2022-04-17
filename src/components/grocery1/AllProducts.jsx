import React from "react";
import { Box, Button, Grid } from "@mui/material";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard13 from "../product-cards/ProductCard13";
import { Paragraph } from "components/Typography";
import { styled } from "@mui/system";
const SubTitle = styled(Paragraph)(({ theme }) => ({
  marginTop: "-20px",
  marginBottom: "20px",
  fontSize: 12,
  color: theme.palette.grey[600],
}));

const AllProducts = ({ productsData }) => {
  return (
    <CategorySectionCreator title="All Products" seeMoreLink="#">
      <SubTitle>Best collection in 2021 for you!</SubTitle>
      <Grid container mb={-0.5} spacing={3}>
        {productsData.map((item, ind) => (
          <Grid key={ind} item md={4} sm={6} xs={12}>
            <ProductCard13
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              rating={item.rating}
              price={item.price}
              off={item.discount}
            />
          </Grid>
        ))}
      </Grid>
      <Box mt={6} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "13px",
          }}
        >
          Load More...
        </Button>
      </Box>
    </CategorySectionCreator>
  );
};

export default AllProducts;
