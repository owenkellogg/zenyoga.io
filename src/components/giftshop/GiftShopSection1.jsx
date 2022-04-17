import Carousel from "components/carousel/Carousel";
import LazyImage from "components/LazyImage";
import { H1, Paragraph } from "components/Typography";
import { Button, Grid } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import React from "react"; // styled components

const StyledBox = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  marginBottom: 60,
  backgroundColor: theme.palette.primary[100],
  "& .carousel-dot": {
    position: "absolute",
    bottom: "30px",
    left: 0,
    right: 0,
    margin: "auto",
  },
}));
const StyledGrid = styled(Grid)(({ theme }) => ({
  maxWidth: 1280,
  alignItems: "center",
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));
const GridItemOne = styled(Grid)(({ theme }) => ({
  padding: 20,
  "& .titleBox": {
    marginTop: 10,
    marginBottom: 30,
    "& h1": {
      fontSize: 45,
      lineHeight: 1.3,
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .titleBox": {
      "& h1": {
        fontSize: 30,
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
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
  fontSize: "16px",
  borderRadius: 0,
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

const GiftShopSection1 = () => {
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
            <GridItemOne item md={6} sm={6} xs={12}>
              <Box py={6}>
                <Paragraph color="primary.main">GIFT SHOP</Paragraph>
                <Box className="titleBox">
                  <H1>The gift of a man</H1>
                  <H1>is his goodwill.</H1>
                  <H1>Take care of gift</H1>
                </Box>
                <StyledButton
                  variant="contained"
                  sx={{
                    px: "30px",
                    py: "8px",
                  }}
                >
                  Shop Now
                </StyledButton>
              </Box>
            </GridItemOne>
            <GridItemTwo item md={6} sm={6} xs={12}>
              <LazyImage
                src="/assets/images/Gift Shop/Header.png"
                width={600}
                height={450}
                layout="responsive"
                objectFit="contain"
                priority
              />
            </GridItemTwo>
          </StyledGrid>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default GiftShopSection1;
