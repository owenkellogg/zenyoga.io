import Link from "next/link";
import { Box, useTheme } from "@mui/system";
import React, { useEffect, useState } from "react";
import { H1 } from "components/Typography";
import Carousel from "../carousel/Carousel";
import ProductCard15 from "components/product-cards/ProductCard15";
import useWindowSize from "hooks/useWindowSize";

const TopCategorySection = ({ categoryList }) => {
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
      <H1 my={2}>Top Categories</H1>
      <Carousel
        totalSlides={categoryList.length}
        visibleSlides={visibleSlides}
        infinite={true}
        sx={{
          "& #backArrowButton, #backForwardButton": {
            width: 35,
            height: 35,
            borderRadius: 0,
            color: theme.palette.primary.main,
            background: theme.palette.primary[50],
            boxShadow: theme.shadows[2],
            "&:hover": {
              background: theme.palette.primary[100],
            },
          },
        }}
      >
        {categoryList.map((item, ind) => (
          <Link href="#" key={ind}>
            <a>
              <Box py={0.5}>
                <ProductCard15
                  title={item.title}
                  available={item.available}
                  imgUrl={item.imgUrl}
                />
              </Box>
            </a>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

export default TopCategorySection;
