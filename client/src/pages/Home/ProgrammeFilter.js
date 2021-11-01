import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { DegreeType3 } from "constants/DegreeType";
import React from "react";
import { useStore } from "store";
import { SET_DEGREE } from "store/degree";

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
      minWidth: "max-content",
    },
    "&::-webkit-scrollbar": {
      height: "0.32em",
    },
    position: "sticky",
    top: 0,
    zIndex: theme.zIndex.appBar - 1,
    background: theme.palette.background.default,
    [theme.breakpoints.up("sm")]: {
      top: theme.mixins.toolbar.minHeight + theme.spacing(1),
    },
  },
}));

export default function ProgrammeFilter({ degreesCount, selectedDegree }) {
  const classes = useStyles();
  const [, dispatch] = useStore();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const handleClick = (degree) => {
    dispatch({ type: SET_DEGREE, payload: degree });
    window.scrollTo({ top: isDesktop ? 0 : theme.mixins.toolbar.minHeight, behavior: "auto" });
  };

  return (
    <div className={classes.root}>
      <Button
        variant={selectedDegree === "" ? "contained" : "outlined"}
        size="small"
        color="primary"
        onClick={() => handleClick("")}
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
