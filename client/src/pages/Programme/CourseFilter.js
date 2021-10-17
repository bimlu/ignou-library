import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { TermType } from "constants/TermType";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    whiteSpace: "nowrap",
    overflow: "auto",
    "& > *": {
      marginRight: theme.spacing(1),
      textTransform: "none",
      fontSize: theme.spacing(1.5),
      padding: theme.spacing(0.8),
      borderRadius: theme.spacing(3),
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
    },
    "&::-webkit-scrollbar": {
      height: "0.32em",
    },
    position: "sticky",
    top: 0,
    zIndex: theme.zIndex.appBar - 1,
    background: theme.palette.background.default,
  },
}));

export default function CourseFilter({ termType, termsCount, selectedTerm }) {
  const classes = useStyles();

  const handleClick = (hashValue) => {
    window.location.hash = `term=${hashValue}`;
  };

  return (
    <>
      <Typography variant="h4" color="textSecondary">
        <b>📖 Courses</b>
      </Typography>

      <div className={classes.root}>
        <Button
          variant={selectedTerm === "all" ? "contained" : "outlined"}
          size="small"
          color="primary"
          onClick={() => handleClick("all")}
        >
          All
        </Button>

        {Array.from(new Array(termsCount))
          .map((_el, idx) => idx + 1)
          .map((num) => (
            <Button
              variant={selectedTerm === String(num) ? "contained" : "outlined"}
              size="small"
              color="primary"
              key={num}
              onClick={() => handleClick(num)}
            >
              {`${TermType[termType]}-${num}`}
            </Button>
          ))}
      </div>
    </>
  );
}
