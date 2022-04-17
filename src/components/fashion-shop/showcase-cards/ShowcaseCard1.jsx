import BazarImage from "components/BazarImage";
import NavLink2 from "components/nav-link/NavLink2";
import { H1, Paragraph, Span } from "components/Typography";
import { Box, styled } from "@mui/material";
import { alpha } from "@mui/system";
import Link from "next/link";
import React from "react";
// styled components
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  borderRadius: 4,
  boxShadow: theme.shadows[4],
  height: "100%",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[3],
  },
  [theme.breakpoints.between("sm", "md")]: {
    "&": {
      display: "flex",
      alignItems: "center",
      padding: "2rem",
    },
    "& .css-ag2ff3": {
      padding: "0",
      marginLeft: 0,
    },
    "& .css-1umnjqz": {
      padding: "0",
      width: "50%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "&": {
      padding: "2rem",
    },
    "& .css-ag2ff3": {
      padding: "0",
    },
    "& .css-1umnjqz": {
      padding: "0",
      paddingTop: "2rem",
    },
  },
}));
const StyledImage = styled(BazarImage)(({ theme }) => ({
  marginRight: "auto",
  marginLeft: "auto",
  padding: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    padding: "0",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "50%",
    padding: "1rem",
  },
}));

const ShowcaseCard1 = () => {
  return (
    <Link href="/home-3">
      <a>
        <StyledBox>
          <StyledImage
            src="/assets/images/products/shoes-1.png"
            alt="apple-watch-1"
          />

          <Box p="25px">
            <Paragraph color="grey.600" mb="0.5rem">
              SPECIAL OFFER
            </Paragraph>
            <H1 lineHeight={1.3}>
              <Span color="primary.600" lineHeight={1.3}>
                Comfortable
              </Span>{" "}
              Original <br /> Cotton Sneaker
            </H1>

            <Paragraph color="grey.600" mt="0.5rem" mb="1rem">
              Handcrafted from genuine Italian leather. One inner compartment
              with black satin lining
            </Paragraph>

            <NavLink2 title="SHOP NOW" />
          </Box>
        </StyledBox>
      </a>
    </Link>
  );
};

export default ShowcaseCard1;
