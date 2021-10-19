import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { DegreeType3 } from "constants/DegreeType";
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

export default function ProgrammeFilter({ degreesCount, selectedDegree }) {
  const classes = useStyles();

  const handleClick = (hashValue) => {
    window.location.hash = `degree=${hashValue}`;
  };

  return (
    <div className={classes.root}>
      <Button
        variant={selectedDegree === "all" ? "contained" : "outlined"}
        size="small"
        color="primary"
        onClick={() => handleClick("all")}
      >
        All
      </Button>

      {Array.from(new Array(degreesCount))
        .map((_el, idx) => idx)
        .map((num) => (
          <Button
            variant={selectedDegree === DegreeType3[num][0] ? "contained" : "outlined"}
            size="small"
            color="primary"
            key={num}
            onClick={() => handleClick(DegreeType3[num][0])}
          >
            {DegreeType3[num][2]}
          </Button>
        ))}
    </div>
  );
}