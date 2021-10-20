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
  courseBlock: {
    marginBottom: theme.spacing(3),
  },
  blockUnits: {
    padding: theme.spacing(1.8),
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
  },
  blockCodeName: {
    marginBottom: theme.spacing(1),
  },
  unitCodeName: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
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
}));

const StudyMaterial = ({ courseBlocks, loading }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);

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
        Study Material
      </Button>

      {!loading && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {courseBlocks.map((courseBlock) => (
            <div className={classes.courseBlock} key={courseBlock.blockLink}>
              <div className={classes.blockCodeName}>
                <Typography variant="h6" color="textSecondary">
                  <b>📖 {courseBlock.blockCode}</b>
                </Typography>

                <Typography color="textSecondary" variant="h6" style={{ marginLeft: 19 }}>
                  ( {courseBlock.blockName} )
                </Typography>
              </div>

              <Paper className={classes.blockUnits} elevation={0}>
                {courseBlock.blockUnits.map((blockUnit) => (
                  <div className={classes.unitCodeName} key={blockUnit.unitLink}>
                    <Typography>
                      <b>📄 {blockUnit.unitCode}</b>
                    </Typography>

                    <Link
                      target="blank"
                      href={blockUnit.unitDownloadLink}
                      display="block"
                      variant="body1"
                      style={{ marginLeft: 24 }}
                    >
                      {blockUnit.unitName}
                    </Link>
                  </div>
                ))}
              </Paper>
            </div>
          ))}
        </Collapse>
      )}

      <Box m={1} />
    </Paper>
  );
};

export default StudyMaterial;
