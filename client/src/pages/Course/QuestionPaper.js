import { Link } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
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
  },
}));

const QuestionPaper = ({ questionPapers, loading }) => {
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
        Question Papers
      </Button>

      {!loading && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Paper className={classes.downloadLinks} elevation={0}>
            {questionPapers.map((questionPaper) => {
              const items = questionPaper.split("/");
              return (
                <Link key={questionPaper} target="blank" href={questionPaper} variant="body1" className={classes.link}>
                  ✳️ {items[items.length - 2]}
                </Link>
              );
            })}
          </Paper>
        </Collapse>
      )}

      <Box m={1} />
    </Paper>
  );
};

export default QuestionPaper;
