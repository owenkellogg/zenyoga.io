import BazarAvatar from "components/BazarAvatar";
import BazarCard from "components/BazarCard";
import Carousel from "components/carousel/Carousel";
import FlexBox from "components/FlexBox";
import Quote from "components/icons/Quote";
import { H5, Paragraph } from "components/Typography";
import { Grid, styled } from "@mui/material";
import React from "react"; // styled components

const StyledBazarCard = styled(BazarCard)(({ theme }) => ({
  position: "relative",
  padding: "2rem 4rem",
  overflow: "hidden",
  borderRadius: "8px",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem",
  },
}));
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  padding: "4rem 6rem",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 4rem",
  },
}));
const StyledQuote = styled(Quote)(({ theme }) => ({
  position: "absolute",
  color: theme.palette.text.primary,
  fontSize: "4rem",
  opacity: 0.08,
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
}));
const StyledAvatar = styled(BazarAvatar)(() => ({
  width: 64,
  height: 64,
  display: "block",
  margin: "auto",
}));
const StyledGridContainer = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    justifyContent: "center",
    "& .css-1ale3h9, & .css-84whe7": {
      textAlign: "center",
    },
  },
}));

const GrocerySection9 = ({ testimonials }) => {
  return (
    <Carousel
      totalSlides={3}
      visibleSlides={1}
      showDots={true}
      spacing="0px"
      arrowButtonColor="inherit"
      showArrowOnHover={true}
    >
      {testimonials &&
        testimonials.map((data, ind) => (
          <StyledBazarCard key={ind}>
            <StyledFlexBox position="relative" flexWrap="wrap">
              <StyledQuote
                sx={{
                  left: 0,
                  top: 0,
                }}
              />
              <StyledGridContainer container spacing={1}>
                <Grid item lg={2} sm={3}>
                  <StyledAvatar src={data.photoUrl} />
                </Grid>
                <Grid item lg={10} sm={9}>
                  <Paragraph color="grey.700">{data.comment}</Paragraph>
                  <H5 mt={1} fontWeight="700">
                    {data.clientName}
                  </H5>
                </Grid>
              </StyledGridContainer>
              <StyledQuote
                sx={{
                  right: 0,
                  bottom: 0,
                  transform: "rotate(180deg)",
                }}
              />
            </StyledFlexBox>
          </StyledBazarCard>
        ))}
    </Carousel>
  );
};

const cardList = [
  {
    title: "25% Special Off Today Only for Vegetables",
    subtitle: "Till 10 Sept, 2021",
    imgUrl:
      "/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png",
    shopUrl: "/",
    bgColor: "#F6FFE5",
  },
  {
    title: "15% Off for All Product Only Need to Subscribe",
    subtitle: "Subscribe Us",
    imgUrl:
      "/assets/images/products/kisspng-organic-food-milk-food-gift-baskets-grocery-5abeaffc1e5b25 1.png",
    shopUrl: "/",
    bgColor: "#FFF8E5",
  },
  {
    title: "25% Special Off Today Only for Vegetables",
    subtitle: "Till 10 Sept, 2021",
    imgUrl:
      "/assets/images/products/kisspng-organic-food-leaf-vegetable-fruit-rich-vegetables-5aa9f4d026ae09 1.png",
    shopUrl: "/",
    bgColor: "#F6FFE5",
  },
];
export default GrocerySection9;
