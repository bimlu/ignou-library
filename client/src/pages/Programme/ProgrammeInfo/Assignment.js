import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Skeleton from "@material-ui/lab/Skeleton";
import clsx from "clsx";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 50,
    marginBottom: theme.spacing(1),
    background: theme.palette.background.default,
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

const Assignment = ({ programme, loading }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (loading) {
    return (
      <Paper className={classes.paper}>
        <Skeleton variant="rect" height={50} />
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper} elevation={0}>
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
        Assignments
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

export default Assignment;
