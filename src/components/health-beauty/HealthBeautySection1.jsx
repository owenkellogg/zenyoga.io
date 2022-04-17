import Carousel from "components/carousel/Carousel";
import LazyImage from "components/LazyImage";
import { H1 } from "components/Typography";
import { Button, Grid } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import React from "react"; // styled components

const StyledBox = styled(Box)(() => ({
  overflow: "hidden",
  backgroundColor: "#efefef",
  "& .carousel-dot": {
    position: "absolute",
    bottom: "30px",
    left: 0,
    right: 0,
    margin: "auto",
  },
}));
const StyledGrid = styled(Grid)(({ theme }) => ({
  maxWidth: 1200,
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
  "& .titleBox": {
    marginBottom: 30,
    "& h1": {
      fontSize: 35,
      lineHeight: 1.3,
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .css-q4ts9v, & .css-pkvvvs": {
      maxWidth: "100%",
      paddingRight: "1rem",
    },
    "& .titleBox": {
      "& h1": {
        fontSize: 30,
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    "& .css-q4ts9v, & .css-pkvvvs": {
      maxWidth: "100%",
      paddingRight: "1rem",
    },
    "& .titleBox": {
      textAlign: "center",
      "& h1": {
        fontSize: 25,
      },
    },
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "14px",
  background: theme.palette.primary.main,
  "&:hover": {
    background: theme.palette.primary[400],
  },
}));
const GridItemTwo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const HealthBeautySection1 = () => {
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
          <StyledGrid container key={ind}>
            <GridItemOne item md={7} sm={7} xs={12}>
              <Box className="titleBox">
                <H1>Take care of your</H1>
                <H1>health, that it may serve</H1>
                <H1>you to serve God.</H1>
              </Box>
              <StyledButton
                variant="contained"
                sx={{
                  px: "25px",
                }}
              >
                Shop Now
              </StyledButton>
            </GridItemOne>
            <GridItemTwo item md={5} sm={5} xs={12}>
              <LazyImage
                src="/assets/images/Health Shop/Header 1.png"
                width={570}
                height={360}
                priority
              />
            </GridItemTwo>
          </StyledGrid>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default HealthBeautySection1;
