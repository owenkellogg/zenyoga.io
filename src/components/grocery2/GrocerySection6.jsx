import Carousel from "components/carousel/Carousel";
import LazyImage from "components/LazyImage";
import { H3, H5 } from "components/Typography";
import { Box, Button, Grid, styled } from "@mui/material";
import Link from "next/link";
import React from "react"; // styled component

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: "3rem",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    "& .css-1jbywm5": {
      fontSize: "28px",
    },
    "& .css-fm4dx6-MuiGrid-root": {
      marginTop: "2rem",
    },
  },
}));

const GrocerySection6 = ({ cardList }) => {
  return (
    <Box>
      <Box m={-0.5}>
        <Carousel
          totalSlides={3}
          visibleSlides={1}
          showDots={true}
          autoPlay={true}
          spacing="0px"
          arrowButtonColor="inherit"
          showArrowOnHover={true}
        >
          {cardList &&
            cardList.map((item, ind) => (
              <StyledGrid
                key={ind}
                container
                sx={{
                  bgcolor: item.bgColor,
                }}
              >
                <Grid item lg={7} md={6} sm={7} xs={12}>
                  <H5 fontWeight="600" fontSize="18px" mb={1}>
                    {item.subtitle}
                  </H5>
                  <H3 mb={4} fontSize="35px" lineHeight="1.37">
                    {item.title}
                  </H3>

                  <Link href={item.shopUrl}>
                    <a>
                      <Button variant="contained" color="primary">
                        Shop Now
                      </Button>
                    </a>
                  </Link>
                </Grid>
                <Grid item lg={5} md={6} sm={5} xs={12}>
                  <LazyImage
                    src={item.imgUrl}
                    width={320}
                    height={0}
                    objectFit="contain"
                  />
                </Grid>
              </StyledGrid>
            ))}
        </Carousel>
      </Box>
    </Box>
  );
}; // const cardList = [
//   {
//     title: "25% Special Off Today Only for Vegetables",
//     subtitle: "Till 10 Sept, 2021",
//     imgUrl:
//       "/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png",
//     shopUrl: "/",
//     bgColor: "#F6FFE5",
//   },
//   {
//     title: "15% Off for All Product Only Need to Subscribe",
//     subtitle: "Subscribe Us",
//     imgUrl:
//       "/assets/images/products/kisspng-organic-food-milk-food-gift-baskets-grocery-5abeaffc1e5b25 1.png",
//     shopUrl: "/",
//     bgColor: "#FFF8E5",
//   },
//   {
//     title: "25% Special Off Today Only for Vegetables",
//     subtitle: "Till 10 Sept, 2021",
//     imgUrl:
//       "/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png",
//     shopUrl: "/",
//     bgColor: "#F6FFE5",
//   },
// ];

export default GrocerySection6;
