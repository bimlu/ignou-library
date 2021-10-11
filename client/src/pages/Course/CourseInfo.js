import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { GET_PROGRAMME } from "graphql/programme";
import NotFound from "components/NotFound";

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 300,
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
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  button: {
    borderRadius: theme.spacing(1.2),
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    fontSize: theme.spacing(1.6),
    marginBottom: theme.spacing(1),
    textTransform: "none",
  },
  checkIcon: {
    fontSize: theme.spacing(2),
    marginLeft: theme.spacing(0.6),
  },
  info: {
    marginBottom: theme.spacing(1.8),
  },
  infoPaper: {
    padding: theme.spacing(1.8),
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
  },
  infoHeading: {
    marginBottom: theme.spacing(0.6),
  },
}));

const CourseInfo = ({ programmeId }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { loading, data } = useQuery(GET_PROGRAMME, {
    variables: { id: programmeId },
  });

  if (loading) {
    return (
      <Paper className={classes.paper}>
        <Skeleton variant="rect" height={300} />
      </Paper>
    );
  }

  if (!data) {
    return <NotFound />;
  }

  const programme = data.getProgramme;
  // console.log(programme);

  return (
    <Paper className={classes.paper} elevation={0}>
      <span>
        <Typography display="inline" variant="h6">
          <b>@{programme.name}</b>
        </Typography>
        <CheckCircleIcon color="primary" className={classes.checkIcon} />
      </span>

      <Typography variant="h5" color="textSecondary">
        <b>{programme.fullName}</b>
      </Typography>

      <div className={classes.imageWrapper}>
        <img alt="programme image" src={programme.image} className={classes.image} />
      </div>

      <Button
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        endIcon={
          <ExpandMoreIcon
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
          />
        }
        variant="outlined"
        size="small"
        color="secondary"
        className={classes.button}
      >
        See {expanded ? "less" : "more"}
      </Button>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className={classes.info}>
          <Typography color="textSecondary" variant="h5" className={classes.infoHeading}>
            <b>Medium of Instruction</b>
          </Typography>
          <Paper className={classes.infoPaper} elevation={0}>
            <Typography>{programme.mediumOfInstruction}</Typography>
          </Paper>
        </div>

        <div className={classes.info}>
          <Typography color="textSecondary" variant="h5" className={classes.infoHeading}>
            <b>Duration</b>
          </Typography>
          <Paper className={classes.infoPaper} elevation={0}>
            <Typography>{programme.duration} </Typography>
          </Paper>
        </div>

        <div className={classes.info}>
          <Typography color="textSecondary" variant="h5" className={classes.infoHeading}>
            <b>Fee Structure</b>
          </Typography>
          <Paper className={classes.infoPaper} elevation={0}>
            <Typography>{programme.feeStructure}</Typography>
          </Paper>
        </div>

        <div className={classes.info}>
          <Typography color="textSecondary" variant="h5" className={classes.infoHeading}>
            <b>Eligibility</b>
          </Typography>
          <Paper className={classes.infoPaper} elevation={0}>
            <Typography>{programme.eligibility}</Typography>
          </Paper>
        </div>
      </Collapse>

      <Box m={1} />
    </Paper>
  );
};

export default CourseInfo;
