import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { Box, styled } from "@mui/system";
import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
import { Container, Grid, Card, Button } from "@mui/material";
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  boxShadow: "none",
  alignItems: "center",
  padding: "20px 50px",
  justifyContent: "center",
  background: theme.palette.paste[50],
  [theme.breakpoints.down("sm")]: {
    padding: "20px 30px",
    "& h3": {
      fontSize: 20,
    },
  },
}));

const DiscountProducts = ({ offerProducts }) => {
  const router = useRouter();
  return (
    <Container
      sx={{
        padding: "0px !important",
      }}
    >
      <Grid mt={-1} mb={8} container spacing={3}>
        {offerProducts.map((item, ind) => (
          <Grid key={ind} item md={6} sm={12} xs={12}>
            <Link href="/sale-page-1">
              <a>
                <StyledCard>
                  <Box width="60%">
                    <Paragraph fontWeight={600}>{item.title}</Paragraph>
                    <H3 fontSize={25} lineHeight={1.35}>
                      {item.discountOffer}
                    </H3>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{
                        mt: 2,
                      }}
                      onClick={() => router.push("/sale-page-1")}
                    >
                      {item.buttonText}
                    </Button>
                  </Box>
                  <Box width="40%">
                    <LazyImage
                      src={item.imgUrl}
                      width={100}
                      height={100}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </Box>
                </StyledCard>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DiscountProducts;
