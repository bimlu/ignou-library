import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Skeleton from "@material-ui/lab/Skeleton";
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

  if (loading) {
    return (
      <Paper className={classes.paper}>
        <Skeleton variant="rect" height={300} />
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper} elevation={0}>
      <span>
        <Typography display="inline" variant="h6">
          <b>@{programme.code}</b>
        </Typography>
        <CheckCircleIcon color="primary" className={classes.checkIcon} />
      </span>

      <Typography variant="h5" color="textSecondary">
        <b>{programme.title}</b>
      </Typography>

      <div className={classes.imageWrapper}>
        <img alt="programme image" src={programme.image} className={classes.image} />
      </div>
    </Paper>
  );
};

export default Title;
