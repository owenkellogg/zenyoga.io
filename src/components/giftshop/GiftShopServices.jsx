import React from "react";
import appIcons from "components/icons";
import FlexBox from "components/FlexBox";
import { H4, Span } from "components/Typography";
import { Grid, styled } from "@mui/material";
import { Box, useTheme } from "@mui/system";
const Container = styled(Box)(() => ({
  margin: "auto",
  maxWidth: "1200px",
  paddingBottom: "3rem",
}));
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  flexWrap: "wrap",
  background: "#fff",
  alignItems: "center",
  padding: "1.5rem 0.8rem",
  justifyContent: "center",
  border: `1px solid ${theme.palette.grey[300]}`,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "1rem 0.5rem",
    textAlign: "center",
    "& .css-1q4f0ng": {
      margin: "0.5rem",
    },
  },
}));
const IconBox = styled(FlexBox)(({ theme }) => ({
  alignItems: "center",
  fontSize: "22px",
  marginRight: "12px",
  background: theme.palette.info[50],
  padding: "12px",
  borderRadius: "50%",
}));

const GiftShopServices = (props) => {
  const { serviceData } = props;
  const { palette } = useTheme();
  const servicesData = serviceData.slice(0, 3);
  return (
    <Container>
      <Grid container spacing={3}>
        {servicesData &&
          servicesData.map((item, ind) => {
            const Icon = appIcons[item.icon];
            return (
              <Grid item lg={4} md={4} sm={12} xs={12} key={ind}>
                <StyledFlexBox>
                  <IconBox>
                    <Icon
                      fontSize="50px"
                      sx={{
                        color: palette.primary.main,
                      }}
                    >
                      {item.icon}
                    </Icon>
                  </IconBox>
                  <div>
                    <H4 mb="5px" fontSize="1rem" fontWeight="600">
                      {item.title}
                    </H4>
                    <Span color="grey.600">{item.subtitle1}</Span>
                  </div>
                </StyledFlexBox>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default GiftShopServices;
