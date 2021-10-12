import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import HideOnScroll from "components/App/Header/HideOnScroll";
import BreadcrumbsNav from "components/BreadcrumbsNav";
import { HEADER_HEIGHT } from "constants/Layout";
import React from "react";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "sticky",
    top: HEADER_HEIGHT + 12,
    zIndex: theme.zIndex.appBar + 1,
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(0),
    background: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      background: theme.palette.background.paper,
    },
  },
}));

const ExploreHeader = () => {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <Box className={classes.box} px={0.4} py={2}>
        <BreadcrumbsNav />
      </Box>
    </HideOnScroll>
  );
};

export default ExploreHeader;
