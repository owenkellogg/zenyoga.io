import React from "react";
import { Container } from "@mui/material";
import { layoutConstant } from "utils/constants";
import { Box, styled, useTheme } from "@mui/system";
import PageFooter from "components/page-footer/PageFooter";
import GroceryLayout from "components/layout/GroceryLayout";
import { getFurnitureShopNavList } from "utils/api/furniture-shop/navigation";
import GiftFurnitureSideNav from "components/page-sidenav/GiftFurnitureSideNav";
import FurnitureShopSection1 from "components/furnitureshop/FurnitureShopSection1";
import FurnitureShopSection2 from "components/furnitureshop/FurnitureShopSection2";
import {
  getTopNewProducts,
  getTopSellingProducts,
  getFurnitureProducts,
} from "utils/api/furniture-shop/products";
import TopProductsSection from "components/furnitureshop/TopProductsSection";
import TopSellingProducts from "components/furnitureshop/TopSellingProducts";
import FurnitureShopAllProducts from "components/furnitureshop/FurnitureShopAllProducts";
import MobileNavigationBar2 from "components/mobile-navigation/MobileNavigationBar2";
const StyledContainer = styled(Container)(({ theme }) => ({
  padding: "0 !important",
  display: "flex",
  ".sidenav": {
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    position: "relative",
    top: 0,
    bottom: 0,
    height: `calc(100vh - ${layoutConstant.headerHeight}px)`,
    transition: "all 350ms ease-in-out",
    "& .MuiPaper-root": {
      borderRadius: 0,
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  ".pageContent": {
    position: "relative",
    left: "unset",
    width: `calc(100% - 2.5rem - ${layoutConstant.grocerySidenavWidth}px)`,
    marginLeft: "1.75rem",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
}));

const FurnitureShop = (props) => {
  const {
    furnitureShopNavList,
    topNewProducts,
    topSellingProducts,
    furnitureProducts,
  } = props;
  const { palette } = useTheme();
  return (
    <GroceryLayout showNavbar={false}>
      <FurnitureShopSection1 />
      <Container>
        <Box>
          <StyledContainer
            sx={{
              mb: 6,
            }}
          >
            <Box className="sidenav">
              <GiftFurnitureSideNav
                bgColor={palette.primary[50]}
                contentColor={palette.primary}
                navList={furnitureShopNavList}
                sidebarHeight="85vh"
              />
            </Box>
            <Box className="pageContent">
              <FurnitureShopSection2 />
            </Box>
          </StyledContainer>

          <Box my={6}>
            <TopProductsSection productsData={topNewProducts} />
          </Box>

          <Box mb={6} mt={3}>
            <TopSellingProducts productsData={topSellingProducts} />
          </Box>

          <Box mb={6} mt={3}>
            <FurnitureShopAllProducts productsData={furnitureProducts} />
          </Box>
        </Box>
      </Container>
      <PageFooter
        id="footer"
        sx={{
          borderRadius: "none",
        }}
        bgcolor={palette.primary.main}
      />

      <MobileNavigationBar2>
        <GiftFurnitureSideNav
          bgColor={palette.primary[50]}
          contentColor={palette.primary}
          navList={furnitureShopNavList}
          sidebarHeight="100%"
        />
      </MobileNavigationBar2>
    </GroceryLayout>
  );
};

export async function getStaticProps() {
  const furnitureShopNavList = await getFurnitureShopNavList();
  const topNewProducts = await getTopNewProducts();
  const topSellingProducts = await getTopSellingProducts();
  const furnitureProducts = await getFurnitureProducts();
  return {
    props: {
      furnitureShopNavList,
      topNewProducts,
      topSellingProducts,
      furnitureProducts,
    },
  };
}
export default FurnitureShop;
