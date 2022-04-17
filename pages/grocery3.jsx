import {
  getGrocery3offerProducts,
  getTopSailedProducts,
  getGrocery3Products,
} from "utils/api/grocery3-shop/products";
import React from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import AllProducts from "components/grocery3/AllProducts";
import PageFooter from "components/page-footer/PageFooter";
import GroceryLayout from "components/layout/GroceryLayout";
import DiscountProducts from "components/grocery3/DiscountProducts";
import TopSailedProducts from "components/grocery3/TopSailedProducts";
import GroceryShopSection1 from "components/grocery3/Grocery3ShopSection1";
import MobileNavigationBar from "components/mobile-navigation/MobileNavigationBar";

const Grocery3 = (props) => {
  const { offerProducts, allProducts, topSailedProducts } = props;
  return (
    <GroceryLayout showNavbar={false}>
      <Box>
        <GroceryShopSection1 />
      </Box>

      <Container>
        <Box mb={6} mt={3}>
          <DiscountProducts offerProducts={offerProducts} />
        </Box>

        <Box mb={6} mt={3}>
          <TopSailedProducts productsData={topSailedProducts} />
        </Box>

        <Box mb={6} mt={3}>
          <AllProducts productsData={allProducts} />
        </Box>
      </Container>
      <PageFooter />

      <MobileNavigationBar />
    </GroceryLayout>
  );
};

export async function getStaticProps() {
  const allProducts = await getGrocery3Products();
  const offerProducts = await getGrocery3offerProducts();
  const topSailedProducts = await getTopSailedProducts();
  return {
    props: {
      allProducts,
      offerProducts,
      topSailedProducts,
    },
  };
}
export default Grocery3;
