import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ToggleThemeIcon from "@material-ui/icons/Brightness4";
import SiteInfo from "constants/SiteInfo.json";
import React from "react";
import HideOnScroll from "./HideOnScroll";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  toolBar: {
    [theme.breakpoints.up("sm")]: {
      width: theme.breakpoints.values.sm,
      margin: "0 auto",
    },
  },
  title: {
    color: theme.palette.action,
    fontWeight: "bold",
    fontFamily: "monospace",
    fontSize: "1.8rem",
  },
}));

const Header = ({ toggleThemeMode, showBackButton = false }) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <HideOnScroll>
        <AppBar position="fixed" color="inherit">
          <Toolbar className={classes.toolBar}>
            {showBackButton ? (
              <IconButton aria-label="go back" onClick={() => history.back()}>
                <ArrowBackIcon />
              </IconButton>
            ) : (
              <Typography className={classes.title} variant="h6" noWrap>
                {SiteInfo.name}
              </Typography>
            )}

            <div className={classes.grow} />

            <IconButton aria-label="toggle theme" onClick={toggleThemeMode} color="inherit">
              <ToggleThemeIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Toolbar />
    </div>
  );
};

export default Header;
