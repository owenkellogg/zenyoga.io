import BazarImage from "components/BazarImage";
import NavLink2 from "components/nav-link/NavLink2";
import { H1, Paragraph, Span } from "components/Typography";
import { Grid, styled } from "@mui/material";
import { alpha } from "@mui/system";
import Link from "next/link";
import React from "react"; // styled component

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  borderRadius: 4,
  boxShadow: theme.shadows[4],
  alignItems: "center",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[3],
  },
  [theme.breakpoints.down("sm")]: {
    "&": {
      flexDirection: "column-reverse",
      padding: "2rem",
    },
    "& .css-lvfarl-MuiGrid-root": {
      padding: "0",
      paddingTop: "2rem",
    },
  },
}));

const ShowcaseCard2 = () => {
  return (
    <Link href="/home-3">
      <a>
        <StyledGrid container>
          <Grid item sm={7} xs={12} p="30px">
            <Paragraph color="grey.600" mb="0.5rem">
              JACKETS
            </Paragraph>
            <H1 lineHeight={1.3}>
              <Span color="primary.600" lineHeight={1.3}>
                Minimalist
              </Span>{" "}
              Genuine <br /> Cotton Jacket
            </H1>

            <Paragraph color="grey.600" mt="0.5rem" mb="1rem">
              Handcrafted from genuine Italian leather. One inner compartment
              with black satin lining
            </Paragraph>

            <NavLink2 title="SHOP NOW" />
          </Grid>

          <Grid item sm={5} xs={12}>
            <BazarImage
              src="/assets/images/products/jacket.png"
              alt="apple-watch-1"
              sx={{
                mx: "auto",
                maxWidth: "100%",
                maxHeight: "225px",
              }}
            />
          </Grid>
        </StyledGrid>
      </a>
    </Link>
  );
};

export default ShowcaseCard2;
