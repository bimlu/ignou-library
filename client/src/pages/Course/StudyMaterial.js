import { Link } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

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
}));

const StudyMaterial = ({ course }) => {
  const classes = useStyles();
  const courseBlocks = course.courseBlocks;

  return (
    <>
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
    </>
  );
};

export default StudyMaterial;
