import { Box } from "@mui/system";
import React from "react";
import AllProducts from "components/grocery1/AllProducts";
import GroceryLayout from "components/layout/GroceryLayout";
import GroceryFooter from "components/grocery2/GroceryFooter";
import GrocerySection1 from "components/grocery1/GrocerySection1";
import ServiceSection2 from "components/grocery1/ServiceSection2";
import PopularProducts from "components/grocery1/PopularProducts";
import TrendingProducts from "components/grocery1/TrendingProducts";
import DiscountSection from "components/grocery1/DiscountSection";
import { getGrocery1Navigation } from "utils/api/grocery1-shop/navigation";
import Grocery1SideNav from "components/page-sidenav/Grocery1SideNav";
import SidenavContainer from "components/sidenav-container/SidenavContainer";
import { getGrocery1Services } from "utils/api/grocery1-shop/services";
import MobileNavigationBar2 from "components/mobile-navigation/MobileNavigationBar2";
import {
  getGrocery1Products,
  getPopularProducts,
  getTrendingProducts,
} from "utils/api/grocery1-shop/products";

const Grocery1 = (props) => {
  const {
    grocery1NavList,
    grocery1Services,
    grocery1ProductsList,
    popularProducts,
    trendingProducts,
  } = props;
  return (
    <GroceryLayout showNavbar={false}>
      <Box>
        <GrocerySection1 />
      </Box>
      <Box>
        <ServiceSection2 id={"grocery1Services"} services={grocery1Services} />
      </Box>

      <SidenavContainer
        navFixedComponentID={"grocery1Services"}
        SideNav={() => <Grocery1SideNav navList={grocery1NavList} />}
      >
        <Box mb={6} mt={3}>
          <PopularProducts productsData={popularProducts} />
        </Box>

        <Box mb={6} mt={3}>
          <TrendingProducts productsData={trendingProducts} />
        </Box>

        <Box mb={6} mt={3}>
          <AllProducts productsData={grocery1ProductsList} />
        </Box>

        <Box mb={6} mt={3}>
          <DiscountSection />
        </Box>

        <GroceryFooter />
      </SidenavContainer>
      <MobileNavigationBar2>
        <Grocery1SideNav navList={grocery1NavList} />
      </MobileNavigationBar2>
    </GroceryLayout>
  );
};

export async function getStaticProps() {
  const grocery1NavList = await getGrocery1Navigation();
  const grocery1Services = await getGrocery1Services();
  const grocery1ProductsList = await getGrocery1Products();
  const popularProducts = await getPopularProducts();
  const trendingProducts = await getTrendingProducts();
  return {
    props: {
      grocery1NavList,
      grocery1Services,
      grocery1ProductsList,
      popularProducts,
      trendingProducts,
    },
  };
}
export default Grocery1;
