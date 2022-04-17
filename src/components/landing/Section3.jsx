import { H2, H4, Paragraph } from "components/Typography";
import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import PageCard from "./PageCard";

const Section3 = () => {
  const pages = [
    ...demoPageList,
    ...shopPageList,
    ...vendorPageList,
    ...customerPageList,
  ];
  return (
    <Box
      mb={14}
      id="demos"
      sx={{
        background:
          "url(/assets/images/landing/landing-bg-2.svg) center/contain no-repeat",
      }}
    >
      <Container
        id="section-3"
        sx={{
          position: "relative",
        }}
      >
        <Box maxWidth="830px" mx="auto" mb="4rem" textAlign="center">
          <H4 color="primary.main" fontSize="58px" fontWeight="900">
            30+
          </H4>

          <Paragraph color="primary.main" fontSize="18px">
            Server side rendered
          </Paragraph>

          <H2 color="secondary.main" fontSize="40px" fontWeight="900" mb={4}>
            Demos & Pages
          </H2>
        </Box>

        <Grid container spacing={4}>
          {pages.map((item, i) => (
            <Grid item sm={6} xs={12} key={i}>
              <PageCard {...item} />
            </Grid>
          ))}
        </Grid>
        <Link
          href="https://material-ui.com/store/items/bazar-pro-react-ecommerce-template/"
          passHref
        >
          <a>
            <Button
              variant="contained"
              color="primary"
              sx={{
                display: "block",
                minWidth: "125px",
                mx: "auto",
                mt: "2.25rem",
              }}
            >
              Purchase Now
            </Button>
          </a>
        </Link>
      </Container>
    </Box>
  );
};

const demoPageList = [
  {
    imgUrl: "/assets/images/landing/page-1.png",
    previewUrl: "/superstore-shop",
    title: "Super Store",
  },
  {
    imgUrl: "/assets/images/landing/furniture.png",
    previewUrl: "/furniture-shop",
    title: "Furniture",
    status: "New",
  },
  {
    imgUrl: "/assets/images/landing/grocery1.png",
    previewUrl: "/grocery1",
    title: "Grocery-v1",
    status: "New",
  },
  {
    imgUrl: "/assets/images/landing/page-2.png",
    previewUrl: "/grocery2",
    title: "Grocery-v2",
  },
  {
    imgUrl: "/assets/images/landing/grocery3.png",
    previewUrl: "/grocery3",
    title: "Grocery-v3",
    status: "New",
  },
  {
    imgUrl: "/assets/images/landing/healthbeauty.png",
    previewUrl: "/healthbeauty-shop",
    title: "Health and Beauty",
    status: "New",
  },
  {
    imgUrl: "/assets/images/landing/page-3.png",
    previewUrl: "/fashion-shop",
    title: "Fashion",
  },
  {
    imgUrl: "/assets/images/landing/gift-shop.png",
    previewUrl: "/gift-shop",
    title: "Gift Store",
    status: "New",
  },
  {
    imgUrl: "/assets/images/landing/page-4.png",
    previewUrl: "/gadget-shop",
    title: "Gadget",
  },
];
const shopPageList = [
  {
    imgUrl: "/assets/images/landing/shop/page-7.png",
    previewUrl: "/sale-page-1",
    title: "Sale Page",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-8.png",
    previewUrl: "/sale-page-2",
    title: "Sale Page (Small Navigation)",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-2.png",
    previewUrl: "/shop/4345643",
    title: "Vendor Shop",
  },
  {
    imgUrl: "/assets/images/landing/shop/search-product.png",
    previewUrl: "/product/search/mobile%20phone",
    title: "Search",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-6.png",
    previewUrl: "/product/456346",
    title: "Product Details",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-3.png",
    previewUrl: "/cart",
    title: "Cart",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-4.png",
    previewUrl: "/checkout",
    title: "Checkout",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-5.png",
    previewUrl: "/checkout-alternative",
    title: "Checkout Alternative",
  },
  {
    imgUrl: "/assets/images/landing/shop/page-1.png",
    previewUrl: "/shops",
    title: "Shop List",
  },
];
const vendorPageList = [
  {
    imgUrl: "/assets/images/landing/vendor/page-1.png",
    previewUrl: "/vendor/dashboard",
    title: "Dashboard",
  },
  {
    imgUrl: "/assets/images/landing/vendor/page-2.png",
    previewUrl: "/vendor/account-settings",
    title: "Account Settings",
  },
  {
    imgUrl: "/assets/images/landing/vendor/page-3.png",
    previewUrl: "/vendor/products",
    title: "Products",
  },
  {
    imgUrl: "/assets/images/landing/vendor/page-4.png",
    previewUrl: "/vendor/add-product",
    title: "Add Product",
  },
  {
    imgUrl: "/assets/images/landing/vendor/page-5.png",
    previewUrl: "/vendor/orders",
    title: "Orders",
  },
  {
    imgUrl: "/assets/images/landing/vendor/page-6.png",
    previewUrl: "/orders/23234",
    title: "Order Details",
  },
];
const customerPageList = [
  {
    imgUrl: "/assets/images/landing/customer/page-5.png",
    previewUrl: "/profile",
    title: "Profile",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-6.png",
    previewUrl: "/profile/edit",
    title: "Edit Profile",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-2.png",
    previewUrl: "/orders",
    title: "My Orders",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-3.png",
    previewUrl: "/orders/23234",
    title: "Order Details",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-1.png",
    previewUrl: "/address",
    title: "My Addresses",
  },
  {
    imgUrl: "/assets/images/landing/customer/add-address.png",
    previewUrl: "/address/512474",
    title: "Add Addresses",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-4.png",
    previewUrl: "/payment-methods",
    title: "Payment Methods",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-7.png",
    previewUrl: "/support-tickets",
    title: "Support Tickets",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-8.png",
    previewUrl: "/support-tickets/32432423",
    title: "Ticket Details",
  },
  {
    imgUrl: "/assets/images/landing/customer/page-9.png",
    previewUrl: "/wish-list",
    title: "Wish List",
  },
];
export default Section3;
