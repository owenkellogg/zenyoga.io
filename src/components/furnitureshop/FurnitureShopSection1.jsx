import React from "react";
import { Button, Grid } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import { H1, H6, Paragraph } from "components/Typography";
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
  minHeight: 650,
  display: "flex",
  alignItems: "center",
  backgroundImage:
    //"url('/assets/images/Furniture Shop/Furniture Shop Header.jpg')",
    //"url('https://www.yogasingapore.net/wp-content/uploads/2013/06/yoga-brain2.jpg')",
    "url('https://cdn.wallpapersafari.com/17/69/ZYNUpP.jpg')",

  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "all 0.3s",
  [theme.breakpoints.down("md")]: {
    height: "60vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
  },
}));
const StyledGrid = styled(Grid)(({ theme }) => ({
  maxWidth: 1280,
  position: "relative",
  alignItems: "center",
  margin: "auto",
  padding: "2rem 0px 5rem 0px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));
const GridItemOne = styled(Grid)(({ theme }) => ({
  padding: 20,
  "& h1": {
    fontSize: 60,
  },
  [theme.breakpoints.down("md")]: {
    "& .css-q4ts9v, & .css-pkvvvs": {
      maxWidth: "100%",
      paddingRight: "1rem",
    },
    "& h1": {
      fontSize: 50,
    },
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    "& .css-q4ts9v, & .css-pkvvvs": {
      maxWidth: "100%",
      paddingRight: "1rem",
    },
    "& h1": {
      fontSize: 40,
    },
  },
}));
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
  borderRadius: 0,
  padding: "8px 30px",
}));
const GridItemTwo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const TextBox = styled(Box)(({ theme }) => ({
  paddingRight: 100,
  marginTop: 5,
  marginBottom: 40,
  [theme.breakpoints.down("md")]: {
    paddingRight: 0,
  },
}));

const FurnitureShopSection1 = () => {
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
              <GridItemOne item md={6} sm={12} xs={12}>
                <H6>Ser Zen</H6>
                <H1 fontSize={60}>Andorra Ioga</H1>
                <TextBox>
                  <Paragraph color="grey.600">
                  En un estat de zen, ens retrobem amb els nostres desitjos més profunds una vegada més, només sense les pors que acompanyen els perseguir-los.
                  </Paragraph>
                </TextBox>
                <StyledButton color="primary" variant="contained">
                  Connecta Ara
                </StyledButton>
              </GridItemOne>
              <GridItemTwo item md={6} sm={12} xs={12} />
            </StyledGrid>
          </Container>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default FurnitureShopSection1;
