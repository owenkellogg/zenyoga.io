/* eslint-disable react-hooks/exhaustive-deps */
import Image from "components/BazarImage";
import FlexBox from "components/FlexBox";
import Sidenav from "components/sidenav/Sidenav";
import Menu from "@mui/icons-material/Menu";
import { Button, Container, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/styled-engine";
import { Box } from "@mui/system";
import clsx from "clsx";
import debounce from "lodash/debounce";
import Link from "next/link";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
const headerHeight = 72;
const slideFromTop = keyframes`
from {
  top: -${headerHeight}px;
}
to {
  top: 0;
}
`;
const HeaderWrapper = styled("div")(({ theme }) => ({
  "& .link": {
    transition: "color 250ms ease-in-out",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  "& .fixedHeader": {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: "white",
    height: headerHeight,
    zIndex: 99,
    boxShadow: theme.shadows[2],
    "& .link": {
      color: "inherit",
    },
    animation: `${slideFromTop} 250ms ease-in-out`,
  },
  "& .menu": {
    display: "none",
  },
  "@media only screen and (max-width: 700px)": {
    "& .right-links": {
      display: "none",
    },
    "& .menu": {
      display: "unset",
    },
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isFixed, setFixed] = useState(false);

  const toggleSidenav = () => {
    setOpen((open) => !open);
  };

  const scrollListener = useCallback(
    debounce(() => {
      if (window?.pageYOffset >= headerHeight) setFixed(true);
      else setFixed(false);
    }, 50),
    []
  );
  useEffect(() => {
    if (!window) return null;
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);
  return (
    <Fragment>
      <HeaderWrapper>
        <Box
          className={clsx({
            fixedHeader: isFixed,
          })}
        >
          <Container>
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              height={headerHeight}
            >
              <Scroll to="top" duration={400} smooth={true} isDynamic>
                <Box
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Image
                    width="96px"
                    height="44px"
                    src="/assets/images/logo.svg"
                    alt="logo"
                  />
                </Box>
              </Scroll>

              <FlexBox className="right-links" alignItems="center">
                <Scroll
                  to="features"
                  duration={400}
                  offset={-headerHeight - 16}
                  smooth={true}
                >
                  <Typography
                    className="link"
                    color="grey.600"
                    p="0.25rem 1.25rem"
                  >
                    Features
                  </Typography>
                </Scroll>
                <Scroll
                  to="demos"
                  duration={400}
                  offset={-headerHeight - 16}
                  smooth={true}
                >
                  <Typography
                    className="link"
                    color="grey.600"
                    p="0.25rem 1.25rem"
                  >
                    Demos
                  </Typography>
                </Scroll>
                <Scroll
                  to="technologies"
                  duration={400}
                  offset={-headerHeight - 16}
                  smooth={true}
                >
                  <Typography
                    className="link"
                    color="grey.600"
                    p="0.25rem 1.25rem"
                  >
                    Technologies
                  </Typography>
                </Scroll>
                <Link
                  href="https://material-ui.com/store/items/bazar-pro-react-ecommerce-template/"
                  passHref={true}
                >
                  <Button variant="outlined" color="primary">
                    Purchase Now
                  </Button>
                </Link>
              </FlexBox>

              {/* mobile menu */}
              <Sidenav
                handle={
                  <IconButton className="menu">
                    <Menu />
                  </IconButton>
                }
                open={open}
                position="right"
                width={260}
                toggleSidenav={toggleSidenav}
              >
                <Box
                  p={2}
                  sx={{
                    "& .link": {
                      transition: "color 250ms ease-in-out",
                      cursor: "pointer",
                      "&:hover": {
                        color: "primary.main",
                      },
                    },
                  }}
                >
                  <Scroll
                    to="features"
                    duration={400}
                    offset={-headerHeight - 16}
                    smooth={true}
                  >
                    <Typography className="link" py={1} onClick={toggleSidenav}>
                      Features
                    </Typography>
                  </Scroll>
                  <Scroll
                    to="demos"
                    duration={400}
                    offset={-headerHeight - 16}
                    smooth={true}
                  >
                    <Typography className="link" py={1} onClick={toggleSidenav}>
                      Demos
                    </Typography>
                  </Scroll>
                  <Scroll
                    to="technologies"
                    duration={400}
                    offset={-headerHeight - 16}
                    smooth={true}
                  >
                    <Typography
                      className="link"
                      py={1}
                      mb={2}
                      onClick={toggleSidenav}
                    >
                      Technologies
                    </Typography>
                  </Scroll>

                  <Link
                    href="https://material-ui.com/store/items/bazar-pro-react-ecommerce-template/"
                    passHref={true}
                  >
                    <Button variant="outlined" color="primary">
                      Purchase Now
                    </Button>
                  </Link>
                </Box>
              </Sidenav>
            </FlexBox>
          </Container>
        </Box>
      </HeaderWrapper>

      {isFixed && <Box height={headerHeight} />}
    </Fragment>
  );
};

export default Header;
