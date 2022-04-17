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
      padding: "2rem",
      paddingBottom: 0,
    },
  },
  [theme.breakpoints.between("md", "lg")]: {
    "& .css-1eqr9bp": {
      paddingRight: "1rem",
    },
  },
}));

const ShowcaseCard3 = () => {
  return (
    <Link href="/home-3">
      <a>
        <StyledGrid container>
          <Grid item sm={6} xs={12}>
            <BazarImage
              src="/assets/images/products/t-shirt2.png"
              alt="apple-watch-1"
              sx={{
                mx: "auto",
                maxWidth: "100%",
                maxHeight: "225px",
              }}
            />
          </Grid>

          <Grid item sm={6} xs={12} py="2rem">
            <Paragraph color="grey.600" mb="0.5rem">
              MEN&apos;S SHOE
            </Paragraph>
            <H1 lineHeight={1.3}>
              <Span color="primary.600" lineHeight={1.3}>
                Stylish
              </Span>{" "}
              Genuine <br /> Comfy T-shirts
            </H1>

            <Paragraph color="grey.600" mt="0.5rem" mb="1rem">
              Handcrafted from genuine Italian leather. One inner compartment
              with black satin lining
            </Paragraph>

            <NavLink2 title="SHOP NOW" />
          </Grid>
        </StyledGrid>
      </a>
    </Link>
  );
};

export default ShowcaseCard3;
