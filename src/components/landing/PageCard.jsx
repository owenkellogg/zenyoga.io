import FlexBox from "components/FlexBox";
import LazyImage from "components/LazyImage";
import { H3, Span } from "components/Typography";
import Visibility from "@mui/icons-material/Visibility";
import { Card, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { Fragment } from "react"; // styled components

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: "0.5rem",
  position: "relative",
  cursor: "pointer",
  "& .overlay": {
    transition: "0.3s ease-in-out",
  },
  "&:hover": {
    ".overlay": {
      opacity: 1,
    },
  },
}));
const StatusChipBox = styled(Box)(({ theme }) => ({
  width: 42,
  height: 45,
  position: "absolute",
  fontSize: "12px",
  background: theme.palette.primary.main,
  top: "0px",
  right: "30px",
  zIndex: 11,
  "& .triangle-left": {
    width: 0,
    height: 0,
    borderTop: "0px solid transparent",
    borderLeft: `21px solid ${theme.palette.primary.main}`,
    borderBottom: "10px solid transparent",
  },
  "& .triangle-right": {
    width: 0,
    height: 0,
    borderTop: "0px solid transparent",
    borderRight: `21px solid ${theme.palette.primary.main}`,
    borderBottom: "10px solid transparent",
  },
}));
const StatusChip = styled(Span)(() => ({
  height: "100%",
  display: "flex",
  color: "#fff",
  fontSize: "13px",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledFlex = styled(FlexBox)(() => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  borderRadius: "8px",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0, 0.54)",
}));

const PageCard = (props) => {
  const { title, imgUrl, previewUrl, disabled, status } = props;
  return (
    <Fragment>
      <Wrapper mb={3} p="6% 6% 0px" overflow="hidden">
        <Card elevation={3}>
          <LazyImage
            width={470}
            height={397}
            src={imgUrl}
            objectFit="cover"
            layout="responsive"
            objectPosition="top center"
          />
        </Card>

        {status && (
          <StatusChipBox>
            <StatusChip>{status}</StatusChip>
            <Box width="100%" display="flex">
              <Box className="triangle-left" />
              <Box className="triangle-right" />
            </Box>
          </StatusChipBox>
        )}

        {!disabled && (
          <Link href={previewUrl}>
            <a target="_blank" rel="noopener noreferrer">
              <StyledFlex className="overlay">
                <IconButton
                  sx={{
                    bgcolor: "white",
                    "&:hover": {
                      bgcolor: "white",
                    },
                  }}
                >
                  <Visibility fontSize="small" />
                </IconButton>
              </StyledFlex>
            </a>
          </Link>
        )}
      </Wrapper>

      <H3 textAlign="center" lineHeight="1" fontSize="14px">
        {title}
      </H3>
    </Fragment>
  );
};

export default PageCard;
