import CarouselCard2 from "components/carousel-cards/CarouselCard2";
import Carousel from "components/carousel/Carousel";
import { Box, Container, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import { arrowButtonStyle } from "./Section2"; // styled components

const ContentWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#F3F6F9",
  boxShadow: theme.shadows[1],
  borderRadius: "8px",
  position: "relative",
}));
const BadgeBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "3rem",
  top: 0,
  [theme.breakpoints.down("sm")]: {
    "&": {
      width: "85px",
      right: "1rem",
    },
  },
}));

const Section5 = ({ hotDealList }) => {
  return (
    <Container
      sx={{
        pb: "4rem",
      }}
    >
      <ContentWrapper>
        <Carousel
          totalSlides={3}
          visibleSlides={1}
          infinite={true}
          leftButtonStyle={arrowButtonStyle}
          rightButtonStyle={arrowButtonStyle}
        >
          {hotDealList.map((item, index) => {
            const expireDate = new Date(item.expireDate).getTime();
            return (
              <CarouselCard2
                key={index}
                imgUrl={item.imgUrl}
                productName={item.productName}
                expireDate={expireDate}
              />
            );
          })}
        </Carousel>

        <BadgeBox>
          <Image
            src="/assets/images/badges/hot.svg"
            width={110}
            height={130}
            alt=""
          />
        </BadgeBox>
      </ContentWrapper>
    </Container>
  );
};

export default Section5;
