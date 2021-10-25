import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { DisciplineType } from "constants/DisciplineType";
import React from "react";
import { useStore } from "store";
import { SET_DISCIPLINE } from "store/discipline";

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

export default function DisciplineFilter({ disciplines, selectedDiscipline }) {
  const classes = useStyles();
  const [, dispatch] = useStore();

  const handleClick = (discipline) => {
    dispatch({ type: SET_DISCIPLINE, payload: discipline });
  };

  return (
    <div className={classes.root}>
      <Button
        variant={selectedDiscipline === "" ? "contained" : "outlined"}
        size="small"
        color="primary"
        onClick={() => handleClick("")}
      >
        All
      </Button>

      {disciplines.map((discipline) => (
        <Button
          variant={selectedDiscipline === discipline ? "contained" : "outlined"}
          size="small"
          color="primary"
          key={discipline}
          onClick={() => handleClick(discipline)}
        >
          {DisciplineType[discipline][1]}
        </Button>
      ))}
    </div>
  );
}
