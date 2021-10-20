import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Skeleton from "@material-ui/lab/Skeleton";
import PLACEHOLDER_IMAGE from "assets/images/card_placeholder.png";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 200,
    marginBottom: theme.spacing(1),
    background: theme.palette.background.default,
  },
  imageWrapper: {
    height: 160,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.spacing(1),
  },
  checkIcon: {
    fontSize: theme.spacing(2),
    marginLeft: theme.spacing(0.6),
  },
}));

const Title = ({ programme, loading }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={0}>
      <span>
        <Typography display="inline" variant="h6">
          {loading ? <Skeleton width="20%" style={{ display: "inline-block" }} /> : <b>@{programme.code}</b>}
        </Typography>

        {loading ? (
          <Skeleton variant="circle" style={{ display: "inline-block", marginLeft: 8 }}>
            <CheckCircleIcon color="primary" className={classes.checkIcon} />
          </Skeleton>
        ) : (
          <CheckCircleIcon color="primary" className={classes.checkIcon} />
        )}
      </span>

      <Typography variant="h5" color="textSecondary">
        {loading ? (
          <>
            <Skeleton width="100%" />
            <Skeleton width="50%" />
          </>
        ) : (
          <b>{programme.title}</b>
        )}
      </Typography>

      <div className={classes.imageWrapper}>
        <img alt="programme image" src={loading ? PLACEHOLDER_IMAGE : programme.image} className={classes.image} />
      </div>
    </Paper>
  );
};

export default Title;
