import { H1 } from "components/Typography";
import Carousel from "../carousel/Carousel";
import useWindowSize from "hooks/useWindowSize";
import { Box, styled, useTheme } from "@mui/system";
import React, { useEffect, useState } from "react";
import ProductCard10 from "components/product-cards/ProductCard10";
const TitleBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  "& h1": {
    fontSize: 40,
    fontWeight: 600,
    marginBottom: "10px",
  },
  "& div": {
    width: 200,
    height: "2px",
    margin: "auto",
    background: theme.palette.primary.main,
  },
}));

const TopSailedProducts = ({ productsData }) => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(3);
  }, [width]);
  const theme = useTheme();
  return (
    <Box>
      <TitleBox my={4}>
        <H1>Top Saled Products</H1>
        <Box />
      </TitleBox>
      <Carousel
        totalSlides={productsData.length}
        visibleSlides={visibleSlides}
        infinite={true}
        sx={{
          "& #backArrowButton, #backForwardButton": {
            width: 40,
            height: 40,
            borderRadius: 0,
            background: "#fff",
            boxShadow: theme.shadows[2],
            color: theme.palette.primary.main,
          },
        }}
      >
        {productsData.map((item, ind) => (
          <Box py={0.5} key={ind}>
            <ProductCard10
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              rating={item.rating}
              price={item.price}
              off={item.discount}
              hideRating={true}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default TopSailedProducts;
