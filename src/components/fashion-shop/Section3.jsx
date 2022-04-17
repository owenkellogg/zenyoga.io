import ProductCard3 from "components/product-cards/ProductCard3";
import useWindowSize from "hooks/useWindowSize";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "../carousel/Carousel";
import CategorySectionCreator from "../CategorySectionCreator";
import { arrowButtonStyle } from "./Section2";

const Section3 = ({ newArrivals }) => {
  const [visibleSlides, setVisibleSlides] = useState(6);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(6);
  }, [width]);
  return (
    <CategorySectionCreator title="New Arrivals" seeMoreLink="#">
      <Box mt="2rem" mb={-0.5}>
        <Carousel
          totalSlides={newArrivals.length}
          visibleSlides={visibleSlides}
          infinite={true}
          leftButtonStyle={arrowButtonStyle}
          rightButtonStyle={arrowButtonStyle}
        >
          {newArrivals.map((item, ind) => (
            <Box py={0.5} key={ind}>
              <ProductCard3
                id={item.id}
                imgUrl={item.imgUrl}
                title={item.name}
                rating={item.rating}
                price={item.price}
                off={item.discount}
                hideReview
                hideFavoriteIcon
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

export default Section3;
