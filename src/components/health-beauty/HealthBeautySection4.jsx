import React from "react";
import { Box, Button, Grid } from "@mui/material";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard14 from "../product-cards/ProductCard14";
import { Paragraph } from "components/Typography";
import { styled } from "@mui/system";
const SubTitle = styled(Paragraph)(({ theme }) => ({
  marginTop: "-20px",
  marginBottom: "20px",
  fontSize: 12,
  color: theme.palette.grey[600],
}));

const HealthBeautySection4 = ({ productsData }) => {
  return (
    <CategorySectionCreator title="All Products" seeMoreLink="#">
      <SubTitle>Best deal with medical and beauty items</SubTitle>
      <Grid container mb={-0.5} spacing={3}>
        {productsData.map((item, ind) => (
          <Grid key={ind} item md={4} sm={6} xs={12}>
            <ProductCard14
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
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </Box>
    </CategorySectionCreator>
  );
};

export default HealthBeautySection4;
