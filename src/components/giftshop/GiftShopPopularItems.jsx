import { Box } from "@mui/material";
import { useTheme } from "@mui/system";
import Carousel from "../carousel/Carousel";
import useWindowSize from "hooks/useWindowSize";
import React, { useEffect, useState } from "react";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard16 from "components/product-cards/ProductCard16";

const GiftShopPopularItems = ({ productsData }) => {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(4);
  }, [width]);
  const { palette, shadows } = useTheme();
  return (
    <CategorySectionCreator title="Popular Items" seeMoreLink="#">
      <Box mb={-0.5}>
        <Carousel
          totalSlides={productsData.length}
          visibleSlides={visibleSlides}
          infinite={true}
          sx={{
            "& #backArrowButton, #backForwardButton": {
              width: 35,
              height: 35,
              borderRadius: 0,
              color: palette.primary.main,
              background: palette.primary[50],
              boxShadow: shadows[2],
              "&:hover": {
                background: palette.primary[100],
              },
            },
          }}
        >
          {productsData.map((item, ind) => (
            <Box py={0.5} key={ind}>
              <ProductCard16
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

export default GiftShopPopularItems;
