import React from "react";
import { Box, useTheme } from "@mui/system";
import PageFooter from "components/page-footer/PageFooter";
import GroceryLayout from "components/layout/GroceryLayout";
import HealthBeautySidenav from "components/page-sidenav/HealthBeautySideNav";
import HealthBeautySection1 from "components/health-beauty/HealthBeautySection1";
import HealthBeautySection2 from "components/health-beauty/HealthBeautySection2";
import HealthBeautySection3 from "components/health-beauty/HealthBeautySection3";
import HealthBeautySection4 from "components/health-beauty/HealthBeautySection4";
import HealthBeautyServices from "components/health-beauty/HealthBeautyServices";
import { getHealthBeautyNavigation } from "utils/api/healthbeauty-shop/navigation";
import { getHealthBeautyServices } from "utils/api/healthbeauty-shop/services";
import SidenavContainer from "components/sidenav-container/SidenavContainer";
import MobileNavigationBar2 from "components/mobile-navigation/MobileNavigationBar2";
import {
  getTopNewProducts,
  getHealthBeautyProducts,
} from "utils/api/healthbeauty-shop/products";

const HealthAndBeauty = (props) => {
  const {
    healthBeautyServices,
    healthBeautyNavList,
    topNewProducts,
    healthBeautyProducts,
  } = props;
  const { palette } = useTheme();
  return (
    <GroceryLayout>
      <Box pb="60px" id="healthBeautySection1">
        <HealthBeautySection1 />
      </Box>

      <SidenavContainer
        navFixedComponentID={"healthBeautySection1"}
        SideNav={() => <HealthBeautySidenav navList={healthBeautyNavList} />}
      >
        <Box mb={6}>
          <HealthBeautySection2 />
        </Box>

        <Box mb={6} mt={3}>
          <HealthBeautySection3 productsData={topNewProducts} />
        </Box>

        <Box mb={6} mt={3}>
          <HealthBeautySection4 productsData={healthBeautyProducts} />
        </Box>

        <Box mb={6} mt={3}>
          <HealthBeautyServices serviceData={healthBeautyServices} />
        </Box>

        <PageFooter
          id="footer"
          sx={{
            borderRadius: "8px",
          }}
          bgcolor={palette.primary[800]}
        />
      </SidenavContainer>

      <MobileNavigationBar2>
        <HealthBeautySidenav navList={healthBeautyNavList} />
      </MobileNavigationBar2>
    </GroceryLayout>
  );
};

export async function getStaticProps() {
  const healthBeautyServices = await getHealthBeautyServices();
  const healthBeautyNavList = await getHealthBeautyNavigation();
  const topNewProducts = await getTopNewProducts();
  const healthBeautyProducts = await getHealthBeautyProducts();
  return {
    props: {
      healthBeautyNavList,
      healthBeautyServices,
      topNewProducts,
      healthBeautyProducts,
    },
  };
}
export default HealthAndBeauty;
