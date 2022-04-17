import ProductCard12 from "components/product-cards/ProductCard12";
import ProductCard3 from "components/product-cards/ProductCard3";
import { Box, Grid } from "@mui/material";
import React from "react";
import CategorySectionCreator from "../CategorySectionCreator";

const Section6 = ({ trendingItems }) => {
  const trendings = trendingItems.slice(1, trendingItems.length);
  return (
    <CategorySectionCreator title="Trending Items">
      <Box mt={-0.5} mb={-0.5}>
        <Grid container spacing={4}>
          <Grid item md={3} xs={12}>
            <ProductCard12
              id={trendingItems[0].id}
              imgUrl={trendingItems[0].imgUrl}
              title={trendingItems[0].title}
              rating={trendingItems[0].rating}
              price={trendingItems[0].price}
              off={trendingItems[0].discount}
            />
          </Grid>
          <Grid item container md={9} xs={12} spacing={4}>
            {trendings.map((item, ind) => (
              <Grid item xs={6} sm={4} key={ind}>
                <ProductCard3
                  id={item.id}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  rating={item.raging}
                  price={item.price}
                  off={item.discount}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </CategorySectionCreator>
  );
};

export default Section6;
