import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { DisciplineType } from "constants/DisciplineType";
import { TermType } from "constants/TermType";
import React from "react";
import { useStore } from "store";
import { CLEAR_DISCIPLINE, SET_DISCIPLINE } from "store/discipline";
import { CLEAR_TERM, SET_TERM } from "store/term";

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

export default function CourseFilter({ termType, termsCount, selectedTerm, cbcs, disciplines, selectedDiscipline }) {
  const classes = useStyles();
  const [, dispatch] = useStore();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const handleClick = (value, type) => {
    if (type === "term") {
      dispatch({ type: SET_TERM, payload: value });
      dispatch({ type: CLEAR_DISCIPLINE });
    }
    if (type === "discipline") {
      dispatch({ type: SET_DISCIPLINE, payload: value });
      dispatch({ type: CLEAR_TERM });
    }
    window.scrollTo({
      top: isDesktop ? 8 + 232 + 16 + 50 : theme.mixins.toolbar.minHeight + 8 + 232 + 16 + 50,
      behavior: "auto",
    });
  };

  return (
    <div className={classes.root}>
      <Button
        variant={selectedTerm === 0 && selectedDiscipline === "" ? "contained" : "outlined"}
        size="small"
        color="primary"
        onClick={() => handleClick(0, "term")}
      >
        All
      </Button>

      {cbcs &&
        disciplines.map((discipline) => (
          <Button
            variant={selectedDiscipline === discipline ? "contained" : "outlined"}
            size="small"
            color="primary"
            key={discipline}
            onClick={() => handleClick(discipline, "discipline")}
          >
            {DisciplineType[discipline][1]}
          </Button>
        ))}

      {Array.from(new Array(termsCount))
        .map((_el, idx) => idx + 1)
        .map((term) => (
          <Button
            variant={selectedTerm === term ? "contained" : "outlined"}
            size="small"
            color={cbcs ? "secondary" : "primary"}
            key={term}
            onClick={() => handleClick(term, "term")}
          >
            {`${TermType[termType]}-${term}`}
          </Button>
        ))}
    </div>
  );
}
