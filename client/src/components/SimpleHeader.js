import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";
import HideOnScroll from "./App/Header/HideOnScroll";

const useStyles = makeStyles((theme) => ({
  header: {
    height: theme.mixins.toolbar.minHeight,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: theme.zIndex.appBar + 1,
    background: theme.palette.background.paper,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "flex",
    alignItems: "center",
  },
  heading: {
    fontSize: theme.spacing(3.6),
    fontWeight: "bold",
    display: "inline",
    marginLeft: theme.spacing(2),
  },
}));

const SimpleHeader = ({ heading, loading }) => {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <div className={classes.header}>
        <IconButton aria-label="go back" onClick={() => history.back()}>
          <ArrowBackIcon />
        </IconButton>

        <Typography className={classes.heading}>{heading}</Typography>

        {loading && <LinearProgress color="primary" />}
      </div>
    </HideOnScroll>
  );
};

export default SimpleHeader;
