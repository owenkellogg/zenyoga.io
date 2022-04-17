import React from "react";
import { H1 } from "../Typography";
import { TextField } from "@mui/material";
import { Box, styled } from "@mui/system";
import BazarButton from "components/BazarButton";
import { SearchOutlinedIcon } from "components/search-box/SearchBox";
const leftImg = "/assets/images/headers/Header BG1.png";
const rightImg = "/assets/images/headers/Header BG2.png";
const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 650,
  padding: 20,
  paddingTop: 160,
  backgroundColor: theme.palette.grey[100],
  backgroundImage: `url('${leftImg}'), url('${rightImg}')`,
  backgroundSize: "40%, 40%",
  backgroundPosition: "left bottom, right bottom",
  backgroundRepeat: "no-repeat, no-repeat",
  transition: "all .3s",
  "& h1": {
    fontSize: 42,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 1.3,
  },
  "& .searchBox": {
    margin: "auto",
    maxWidth: "600px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: theme.shadows[2],
  },
  [theme.breakpoints.up("md")]: {
    backgroundSize: "450px, 450px",
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: 130,
    height: 550,
    "& h1": {
      fontSize: 38,
      textAlign: "center",
    },
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: 100,
    height: 480,
    "& h1": {
      fontSize: 30,
    },
    "& .searchBox": {
      margin: 0,
    },
  },
}));

const GrocerySection1 = () => {
  return (
    <Container>
      <H1>
        Buy groceries and feed yourself,
        <br /> Even on the road.
      </H1>
      <Box className="searchBox">
        <TextField
          placeholder="Searching for..."
          fullWidth
          InputProps={{
            sx: {
              height: 50,
              paddingRight: 0,
              color: "grey.700",
              background: "#fff",
              "& fieldset": {
                border: "none",
              },
            },
            endAdornment: (
              <BazarButton
                color="primary"
                variant="contained"
                disableElevation
                sx={{
                  px: "2rem",
                  height: "100%",
                  borderRadius: "0 8px 8px 0",
                }}
              >
                Search
              </BazarButton>
            ),
            startAdornment: <SearchOutlinedIcon fontSize="small" />,
          }}
        />
      </Box>
    </Container>
  );
};

export default GrocerySection1;
