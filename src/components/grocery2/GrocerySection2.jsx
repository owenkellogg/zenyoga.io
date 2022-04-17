import FlexBox from "components/FlexBox";
import { H4, Span } from "components/Typography";
import { Grid, styled } from "@mui/material";
import React from "react";
import appIcons from "components/icons"; // styled component

const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: "8px",
  padding: "1.5rem",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "1rem 0.5rem",
    textAlign: "center",
    "& .css-1q4f0ng": {
      margin: "0.5rem",
    },
  },
}));

const GrocerySection2 = ({ services }) => {
  return (
    <Grid container spacing={3}>
      {services &&
        services.map((item, ind) => {
          const Icon = appIcons[item.icon];
          return (
            <Grid item lg={4} xs={6} key={ind}>
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
                  <H4 color="grey.900" fontSize="1.25rem" fontWeight="700">
                    {item.title}
                  </H4>
                  <Span color="grey.600">{item.subtitle}</Span>
                </div>
              </StyledFlexBox>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default GrocerySection2;
