import FlexBox from "components/FlexBox";
import { H3, Span } from "components/Typography";
import { Container, styled } from "@mui/material";
import React from "react";
import appIcons from "components/icons/index"; // styled component

const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 2rem",
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: "8px",
  flexWrap: "wrap",
  [theme.breakpoints.between("sm", "lg")]: {
    "&": {
      justifyContent: "space-evenly",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "&": {
      justifyContent: "center",
      flexDirection: "column",
    },
  },
}));

const Section7 = ({ serviceList }) => {
  return (
    <Container
      sx={{
        mb: "4rem",
      }}
    >
      <StyledFlexBox>
        {serviceList.map((item, ind) => {
          const Icon = appIcons[item.icon];
          return (
            <FlexBox key={ind} p="1rem">
              <Icon
                fontSize="inherit"
                color="inherit"
                sx={{
                  color: "grey.900",
                  fontSize: "40px",
                  mr: 1,
                }}
              />
              <div>
                <H3 color="grey.900" lineHeight={1.3}>
                  {item.title}
                </H3>
                <Span color="grey.600">{item.subtitle}</Span>
              </div>
            </FlexBox>
          );
        })}
      </StyledFlexBox>
    </Container>
  );
};

export default Section7;
