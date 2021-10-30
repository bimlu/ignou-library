import { Link } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
    padding: `${theme.spacing(1.4)}px ${theme.spacing(2)}px`,
    fontSize: theme.spacing(1.6),
    marginBottom: theme.spacing(1),
    textTransform: "none",
    width: "52%",
    justifyContent: "space-between",
  },

  downloadLinks: {
    padding: theme.spacing(1.8),
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
  link: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "fit-content",
    marginLeft: 24,
  },
}));

const Assignment = ({ assignment, loading }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        disabled={loading}
      >
        Assignment
      </Button>

      {!loading && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Paper className={classes.downloadLinks} elevation={0}>
            <Typography variant="body1" color="textSecondary" gutterBottom={true}>
              <b>⦿ June 2021 (current)</b>
            </Typography>

            {assignment.main && (
              <Box className={classes.link}>
                {"⦾ "}
                <Link target="blank" href={assignment.main} variant="body1">
                  English
                </Link>
              </Box>
            )}

            {assignment.hindi && (
              <Box className={classes.link}>
                {"⦾ "}
                <Link target="blank" href={assignment.hindi} variant="body1">
                  Hindi
                </Link>
              </Box>
            )}
          </Paper>
        </Collapse>
      )}

      <Box m={1} />
    </Paper>
  );
};

export default Assignment;
