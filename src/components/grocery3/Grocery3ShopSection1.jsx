import React from "react";
import { H1 } from "components/Typography";
import { Button, Grid } from "@mui/material";
import LazyImage from "components/LazyImage";
import Carousel from "components/carousel/Carousel";
import { Box, styled, useTheme } from "@mui/system"; // styled components

const StyledBox = styled(Box)(() => ({
  overflow: "hidden",
  marginBottom: 60,
  "& .carousel-dot": {
    position: "absolute",
    bottom: "30px",
    left: 0,
    right: 0,
    margin: "auto",
  },
}));
const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.paste[50],
}));
const StyledGrid = styled(Grid)(({ theme }) => ({
  maxWidth: 1280,
  alignItems: "center",
  margin: " 0 auto",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));
const GridItemTwo = styled(Grid)(({ theme }) => ({
  paddingLeft: 80,
  [theme.breakpoints.down("md")]: {
    paddingLeft: 40,
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    textAlign: "center",
  },
}));
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));
const GridItemOne = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
const TextBox = styled(Box)(({ theme }) => ({
  marginBottom: 40,
  "& h1": {
    fontSize: 50,
    fontWeight: 600,
    lineHeight: "1.35",
  },
  [theme.breakpoints.down("lg")]: {
    "& h1": {
      fontSize: 45,
    },
  },
  [theme.breakpoints.down("md")]: {
    "& h1": {
      fontSize: 38,
    },
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: 30,
  },
}));

const GroceryShopSection1 = () => {
  const { palette } = useTheme();
  return (
    <StyledBox id="carouselBox">
      <Carousel
        totalSlides={3}
        visibleSlides={1}
        showDots={true}
        showArrow={false}
        autoPlay={false}
        dotClass="carousel-dot"
        dotColor={palette.primary.main}
        spacing="0px"
      >
        {[...new Array(3)].map((_item, ind) => (
          <Container key={ind}>
            <StyledGrid container>
              <GridItemOne item md={6} sm={6} xs={12}>
                <Box pt={6}>
                  <LazyImage
                    src="/assets/images/Groceries Shop/banner-3.png"
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="contain"
                    priority
                  />
                </Box>
              </GridItemOne>

              <GridItemTwo item md={6} sm={6} xs={12}>
                <TextBox>
                  <H1>Buy groceries and</H1>
                  <H1>Feed yourself,</H1>
                  <H1>Even on the road.</H1>
                </TextBox>
                <StyledButton
                  variant="contained"
                  color="primary"
                  sx={{
                    px: "30px",
                    py: "6px",
                  }}
                >
                  Shop Now
                </StyledButton>
              </GridItemTwo>
            </StyledGrid>
          </Container>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default GroceryShopSection1;
