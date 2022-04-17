import React from "react";
import { Container } from "@mui/material";
import { layoutConstant } from "utils/constants";
import { Box, styled, useTheme } from "@mui/system";
import GroceryLayout from "components/layout/GroceryLayout";
import PageFooter from "components/page-footer/PageFooter";
import GiftShopSection1 from "components/giftshop/GiftShopSection1";
import GiftShopServices from "components/giftshop/GiftShopServices";
import GiftShopSection3 from "components/giftshop/GiftShopSection3";
import GiftShopTopSales from "components/giftshop/GiftShopTopSales";
import { getGiftShopNavigation } from "utils/api/gift-shop/navigation";
import TopCategorySection from "components/giftshop/TopCategorySection";
import GiftShopAllProducts from "components/giftshop/GiftShopAllProducts";
import GiftShopPopularItems from "components/giftshop/GiftShopPopularItems";
import GiftFurnitureSideNav from "components/page-sidenav/GiftFurnitureSideNav";
import {
  getGiftShopProducts,
  getPopularProducts,
  getTopSailedProducts,
} from "utils/api/gift-shop/products";
import {
  getGiftShopServiceList,
  getGiftShopTopCategories,
} from "utils/api/gift-shop/servicesAndCategories";
import MobileNavigationBar2 from "components/mobile-navigation/MobileNavigationBar2";
const StyledContainer = styled(Container)(({ theme }) => ({
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
      "& .MuiGrid-item": {
        paddingLeft: 0,
      },
    },
  },
}));

const HealthAndBeauty = (props) => {
  const {
    giftShopNavList,
    giftShopProducts,
    popularProducts,
    topSailedProducts,
    giftShopServicesList,
    giftShopTopCategories,
  } = props;
  const { palette, breakpoints } = useTheme();
  return (
    <GroceryLayout showNavbar={false}>
      <Box id="groceryMain">
        <GiftShopSection1 />
      </Box>
      <Container>
        <Box>
          <StyledContainer
            sx={{
              mb: 8,
            }}
          >
            <Box className="sidenav">
              <GiftFurnitureSideNav
                bgColor={palette.primary[100]}
                contentColor={palette.primary}
                navList={giftShopNavList}
                sidebarHeight="85vh"
              />
            </Box>
            <Box className="pageContent">
              <GiftShopServices serviceData={giftShopServicesList} />
              <GiftShopSection3 />
              <Box
                my={6}
                sx={{
                  [breakpoints.down("md")]: {
                    ml: "-1.75rem",
                  },
                }}
              >
                <TopCategorySection categoryList={giftShopTopCategories} />
              </Box>
            </Box>
          </StyledContainer>

          <Box mb={6} mt={3}>
            <GiftShopPopularItems productsData={popularProducts} />
          </Box>

          <Box mb={6} mt={3}>
            <GiftShopTopSales productsData={topSailedProducts} />
          </Box>

          <Box mb={6} mt={3}>
            <GiftShopAllProducts productsData={giftShopProducts} />
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
          bgColor={palette.primary[100]}
          contentColor={palette.primary}
          navList={giftShopNavList}
          sidebarHeight="100%"
        />
      </MobileNavigationBar2>
    </GroceryLayout>
  );
};

export async function getStaticProps() {
  const popularProducts = await getPopularProducts();
  const topSailedProducts = await getTopSailedProducts();
  const giftShopProducts = await getGiftShopProducts();
  const giftShopNavList = await getGiftShopNavigation();
  const giftShopServicesList = await getGiftShopServiceList();
  const giftShopTopCategories = await getGiftShopTopCategories();
  return {
    props: {
      giftShopNavList,
      giftShopProducts,
      popularProducts,
      topSailedProducts,
      giftShopServicesList,
      giftShopTopCategories,
    },
  };
}
export default HealthAndBeauty;
