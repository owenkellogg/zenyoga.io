import FlexBox from "components/FlexBox";
import { H4, Span } from "components/Typography";
import { Grid, styled } from "@mui/material";
import React from "react";
import appIcons from "components/icons";
import { Box } from "@mui/system";
const Container = styled(Box)(({ theme }) => ({
  padding: "5rem 1rem",
  maxWidth: "1200px",
  margin: "auto",
}));
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  borderRadius: "8px",
  padding: "1.5rem",
  flexWrap: "wrap",
  background: "#fff",
  boxShadow: theme.shadows[2],
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "1rem 0.5rem",
    textAlign: "center",
    "& .css-1q4f0ng": {
      margin: "0.5rem",
    },
  },
}));

const ServiceSection2 = ({ id, services }) => {
  const servicesData = services.slice(0, 4);
  return (
    <Container id={id}>
      <Grid container spacing={3}>
        {servicesData &&
          servicesData.map((item, ind) => {
            const Icon = appIcons[item.icon];
            return (
              <Grid item lg={3} md={6} sm={6} xs={12} key={ind}>
                <StyledFlexBox alignItems="center">
                  <FlexBox
                    alignItems="center"
                    color="grey.600"
                    fontSize="50px"
                    mr={2}
                  >
                    <Icon fontSize="50px" color="grey.600">
                      {item.icon}
                    </Icon>
                  </FlexBox>
                  <div>
                    <H4 color="grey.900" fontSize="1rem" fontWeight="700">
                      {item.title}
                    </H4>
                    <Span color="grey.600">{item.subtitle}</Span>
                  </div>
                </StyledFlexBox>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default ServiceSection2;
