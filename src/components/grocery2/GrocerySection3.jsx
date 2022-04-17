import BazarCard from "components/BazarCard";
import LazyImage from "components/LazyImage";
import { Box, Grid, styled } from "@mui/material";
import Link from "next/link";
import React from "react";
import { H3, H5, Tiny } from "../Typography"; // styled component

const StyledBazarCard = styled(BazarCard)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "1.5rem 2rem",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "20px",
    textAlign: "center",
    "& .css-1fojr6f": {
      margin: "0px",
    },
  },
}));

const GrocerySection3 = ({ categories }) => {
  return (
    <Box>
      <H3 fontSize="25px" mb={4}>
        Shop By Category
      </H3>

      <Grid container spacing={3}>
        {categories &&
          categories.map((item, ind) => (
            <Grid item lg={4} xs={6} key={ind}>
              <Link href={item.url}>
                <a>
                  <StyledBazarCard hoverEffect>
                    <LazyImage
                      src={item.imgUrl}
                      height={46}
                      width={46}
                      objectFit="contain"
                    />
                    <Box ml="2rem">
                      <Tiny color="primary.main">{item.subtitle}</Tiny>
                      <H5>{item.title}</H5>
                    </Box>
                  </StyledBazarCard>
                </a>
              </Link>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

const serviceList = [
  {
    imgUrl: "/assets/images/icons/healthy-food.svg",
    title: "Fruits & Vegatables",
    subtitle: "Upto 60% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/icons/fish.svg",
    title: "Fish & meat",
    subtitle: "Upto 30% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/icons/wheat-flour.svg",
    title: "Rice & Flour",
    subtitle: "Upto 40% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/products/Orange 1kg 2.png",
    title: "Fruits & Vegatables",
    subtitle: "Upto 40% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/icons/feeding-bottle.svg",
    title: "Baby Food",
    subtitle: "Upto 30% off",
    url: "/",
  },
  {
    imgUrl: "/assets/images/icons/skincare.svg",
    title: "Personal Care",
    subtitle: "Upto 60% off",
    url: "/",
  },
];
export default GrocerySection3;
