import AppLayout from "components/layout/AppLayout";
import Section5 from "components/gadget-shop/Section3";
import Section1 from "components/gadget-shop/Section1";
import Section2 from "components/gadget-shop/Section2";
import Section3 from "components/gadget-shop/Section3";
import Section4 from "components/gadget-shop/Section4";
import Section6 from "components/gadget-shop/Section6";
import Section7 from "components/gadget-shop/Section7";
import { getNewArrivals } from "utils/api/fashion-shop/sections";
import {
  getTopPicksList,
  getMainCarousel,
  getMostViewedList,
} from "utils/api/gadget-shop/carousels";
import {
  getTwoBanner,
  getBlogLists,
  getFeaturedCategories,
} from "utils/api/gadget-shop/sections";

const Home4 = (props) => {
  const {
    mainCarousel,
    topPickList,
    featuredCategories,
    twoBanner,
    mostViewedList,
    newArrivalsData,
    blogLists,
  } = props;
  return (
    <AppLayout>
      <Section1 mainCarousel={mainCarousel} topPickList={topPickList} />
      <Section2 featuredCategories={featuredCategories} />
      <Section3 bannerData={twoBanner} />
      <Section4 mostViewedList={mostViewedList} />
      <Section5 bannerData={newArrivalsData} />
      <Section6 />
      <Section7 blogLists={blogLists} />
    </AppLayout>
  );
};

export async function getStaticProps() {
  const mainCarousel = await getMainCarousel();
  const topPickList = await getTopPicksList();
  const featuredCategories = await getFeaturedCategories();
  const twoBanner = await getTwoBanner();
  const mostViewedList = await getMostViewedList();
  const newArrivalsData = await getNewArrivals();
  const blogLists = await getBlogLists();
  return {
    props: {
      mainCarousel,
      topPickList,
      featuredCategories,
      twoBanner,
      mostViewedList,
      newArrivalsData,
      blogLists,
    },
  };
}
export default Home4;
