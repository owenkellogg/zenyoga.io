import Link from "next/link";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import Image from "components/BazarImage";
import { Button, Card, Grid } from "@mui/material";
import { H1, Paragraph } from "components/Typography";
import React from "react";
const Container = styled(Card)(({ theme }) => ({
  padding: "50px",
  background: "#efefef",
  transition: "all 0.3s",
  [theme.breakpoints.down("sm")]: {
    padding: "30px 20px",
    margin: "auto",
    "& .content": {
      textAlign: "center",
      marginBottom: 30,
      "& h1": {
        fontSize: 25,
      },
    },
  },
}));

const DiscountSection = () => {
  const router = useRouter();
  return (
    <Container>
      <Link href="/sale-page-1">
        <a>
          <Grid container>
            <Grid className="content" item sm={7} xs={12}>
              <Paragraph>Till 10 Dec, 2021</Paragraph>
              <H1>25% Special Off Today</H1>
              <H1>Only for Vegetables</H1>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mt: 5,
                  fontSize: "12px",
                }}
                onClick={() => router.push("/sale-page-1")}
              >
                Shop Now
              </Button>
            </Grid>
            <Grid item sm={5}>
              <Image
                width="100%"
                src="/assets/images/Groceries Shop/vagitable.png"
                alt=""
              />
            </Grid>
          </Grid>
        </a>
      </Link>
    </Container>
  );
};

export default DiscountSection;
