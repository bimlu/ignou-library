import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}));

const StyledTooltip = ({ children, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Tooltip className={classes.root} arrow interactive {...otherProps}>
      <div>{children}</div>
    </Tooltip>
  );
};

export default StyledTooltip;
