import Section1 from "components/fashion-shop/Section1";
import Section2 from "components/fashion-shop/Section2";
import Section3 from "components/fashion-shop/Section3";
import Section4 from "components/fashion-shop/Section4";
import Section5 from "components/fashion-shop/Section5";
import Section6 from "components/fashion-shop/Section6";
import Section7 from "components/fashion-shop/Section7";
import Section8 from "components/fashion-shop/Section8";
import AppLayout from "components/layout/AppLayout";
import {
  getDealOfTheWeekList,
  getHotDealList,
} from "utils/api/fashion-shop/carousels";
import {
  getFlashDeals,
  getNewArrivals,
  getServiceList,
  getTrendingItems,
} from "utils/api/fashion-shop/sections";

const Home3 = (props) => {
  const {
    flashDealsData,
    newArrivalsData,
    dealOfTheWeek,
    hotDealList,
    trendingItems,
    serviceList,
  } = props;
  return (
    <AppLayout>
      <Section1 />
      <Section2 flashDeals={flashDealsData} />
      <Section3 newArrivals={newArrivalsData} />
      <Section4 dealOfTheWeek={dealOfTheWeek} />
      <Section5 hotDealList={hotDealList} />
      <Section6 trendingItems={trendingItems} />
      <Section7 serviceList={serviceList} />
      <Section8 />
    </AppLayout>
  );
};

export async function getStaticProps() {
  const flashDealsData = await getFlashDeals();
  const newArrivalsData = await getNewArrivals();
  const dealOfTheWeek = await getDealOfTheWeekList();
  const hotDealList = await getHotDealList();
  const trendingItems = await getTrendingItems();
  const serviceList = await getServiceList();
  return {
    props: {
      flashDealsData,
      newArrivalsData,
      dealOfTheWeek,
      hotDealList,
      trendingItems,
      serviceList,
    },
  };
}
export default Home3;
