import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Grid, Button, Card } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "components/BazarImage";
import { Paragraph, H4 } from "components/Typography";
const ContentBox = styled(Card)(() => ({
  height: 220,
  display: "flex",
  alignItems: "center",
  "& .content": {
    width: "50%",
  },
}));
const RightContent = styled(Box)(({ theme }) => ({
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.primary[200],
  borderRadius: "0px 50% 50% 0px",
  "& p": {
    fontSize: 13,
    lineHeight: 1.4,
  },
}));
const LeftContent = styled(Box)(({ theme }) => ({
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  "& img": {
    width: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    "& img": {
      width: "100%",
    },
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "12px",
  marginTop: "16px",
  padding: "4px 12px",
  background: theme.palette.primary.main,
  "&:hover": {
    background: theme.palette.primary[400],
  },
}));

const HealthBeautySection2 = () => {
  const router = useRouter();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6}>
        <Link href="/shop/123">
          <a>
            <ContentBox>
              <RightContent px="20px">
                <Image
                  width="40px"
                  src="/assets/images/Health Shop/Vector (1).png"
                  alt=""
                />
                <Paragraph
                  sx={{
                    mt: 2,
                  }}
                >
                  Our Pharmaciests are
                </Paragraph>
                <Paragraph>here to Help People</Paragraph>
              </RightContent>
              <LeftContent px="10px">
                <Image src="/assets/images/Health Shop/Doctor.png" alt="" />
              </LeftContent>
            </ContentBox>
          </a>
        </Link>
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <Link href="/shop/123">
          <a>
            <ContentBox
              sx={{
                px: "20px",
              }}
            >
              <Box className="content">
                <Paragraph
                  sx={{
                    fontSize: 12,
                  }}
                >
                  BEAUTY PACK
                </Paragraph>
                <H4 fontWeight="700">CREAM BRIGHT</H4>
                <H4 fontWeight="700">UP TO 25%</H4>
                <StyledButton onClick={() => router.push("/shop/123")}>
                  Shop Now
                </StyledButton>
              </Box>
              <Box className="content">
                <Image
                  width="100%"
                  src="/assets/images/Health Shop/Product (4).png"
                  alt=""
                />
              </Box>
            </ContentBox>
          </a>
        </Link>
      </Grid>
    </Grid>
  );
};

export default HealthBeautySection2;
