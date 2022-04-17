import LazyImage from "components/LazyImage";
import NavLink2 from "components/nav-link/NavLink2";
import { H3, Paragraph } from "components/Typography";
import { alpha, Grid, styled } from "@mui/material";
import Link from "next/link";
import React from "react";
const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 1),
  boxShadow: theme.shadows[4],
  padding: "0 2rem",
  borderRadius: 2,
  alignItems: "center",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[2],
  },
  [theme.breakpoints.down("lg")]: {
    "&": {
      padding: "1.5rem",
    },
  },
}));

const HomeFourCard3 = ({ body, title, color, imgUrl, bgColor }) => {
  return (
    <Link href="/sale-page-1">
      <a>
        <StyledGrid
          container
          sx={{
            backgroundColor: bgColor,
            color,
          }}
        >
          <Grid item md={6} sm={8} xs={7}>
            <H3 lineHeight={1.3}>{title}</H3>

            <Paragraph color={color ? color : "grey.600"} mt="0.5rem" mb="1rem">
              {body}
            </Paragraph>

            <NavLink2 title="SHOP NOW" />
          </Grid>

          <Grid item md={6} sm={4} xs={5}>
            <LazyImage
              src={imgUrl}
              alt="apple-watch-1"
              width={100}
              height={100}
              layout="responsive"
            />
          </Grid>
        </StyledGrid>
      </a>
    </Link>
  );
};

export default HomeFourCard3;
