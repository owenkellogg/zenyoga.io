import useWindowSize from "hooks/useWindowSize";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard13 from "../product-cards/ProductCard13";
import { Paragraph } from "components/Typography";
import { styled, useTheme } from "@mui/system";
const SubTitle = styled(Paragraph)(({ theme }) => ({
  marginTop: "-20px",
  marginBottom: "20px",
  fontSize: 12,
  color: theme.palette.grey[600],
}));

const TrendingProducts = ({ productsData }) => {
  const { palette, shadows } = useTheme();
  const [visibleSlides, setVisibleSlides] = useState(3);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(3);
  }, [width]);
  return (
    <CategorySectionCreator title="Trending Products" seeMoreLink="#">
      <SubTitle>Best collection in 2021 for you!</SubTitle>
      <Box mb={-0.5}>
        <Carousel
          infinite={true}
          totalSlides={productsData.length}
          visibleSlides={visibleSlides}
          sx={{
            "& #backArrowButton, #backForwardButton": {
              width: 40,
              height: 40,
              background: "#fff",
              boxShadow: shadows[2],
              color: palette.primary.main,
            },
          }}
        >
          {productsData.map((item, ind) => (
            <Box py={0.5} key={ind}>
              <ProductCard13
                id={item.id}
                imgUrl={item.imgUrl}
                title={item.title}
                rating={item.rating}
                price={item.price}
                off={item.discount}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

export default TrendingProducts;
