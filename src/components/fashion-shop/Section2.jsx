import Light from "components/icons/Light";
import ProductCard3 from "components/product-cards/ProductCard3";
import useWindowSize from "hooks/useWindowSize";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "../CategorySectionCreator"; // common arrow button for slider

export const arrowButtonStyle = {
  backgroundColor: "white",
  color: "#2B3445",
};

const Section2 = ({ flashDeals }) => {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);
  return (
    <CategorySectionCreator
      icon={<Light color="primary" />}
      title="Flash Deals"
    >
      <Box mt={-0.5} mb={-0.5}>
        <Carousel
          totalSlides={flashDeals.length}
          visibleSlides={visibleSlides}
          infinite={true}
          leftButtonStyle={arrowButtonStyle}
          rightButtonStyle={arrowButtonStyle}
        >
          {flashDeals.map((item, ind) => (
            <Box py={0.5} key={ind}>
              <ProductCard3
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

export default Section2;
