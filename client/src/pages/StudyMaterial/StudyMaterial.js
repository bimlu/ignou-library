import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import Head from "components/Head";
import ScrollManager from "components/ScrollManager";

import { useStore } from "store";
import { SET_EXPLORE_ROUTE } from "store/route";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { GET_COURSE } from "graphql/course";
import { Link } from "@material-ui/core";

const BLOCKS = [
  {
    blockName: "Basics of Computer Hardware",
    blockLink: "",
    units: [
      {
        unitName: "Computer their Origin and Applications",
        unitLink: "https://egyankosh.ac.in/bitstream/123456789/10950/1/Unit-1.pdf",
      },
      {
        unitName: "Functioning of a Computer",
        unitLink: "https://egyankosh.ac.in/bitstream/123456789/10954/1/Unit-2.pdf",
      },
      { unitName: "Memory System", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10955/1/Unit-3.pdf" },
      { unitName: "Input Output Devices", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10957/1/Unit-4.pdf" },
      { unitName: "My Personal Computer", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10959/1/Unit-5.pdf" },
    ],
  },
  {
    blockName: "Basics of Computer Software",
    blockLink: "",
    units: [
      { unitName: "Software Evolution", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10962/1/Unit-1.pdf" },
      { unitName: "Operating System", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10964/1/Unit-2.pdf" },
      {
        unitName: "Concept in Programming Language",
        unitLink: "https://egyankosh.ac.in/bitstream/123456789/10966/1/Unit-3.pdf",
      },
      { unitName: "Computer Applications", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10967/1/Unit-4.pdf" },
    ],
  },
  {
    blockName: "Internet Technologies",
    blockLink: "",
    units: [
      {
        unitName: "Networking and Internet",
        unitLink: "https://egyankosh.ac.in/bitstream/123456789/10968/1/Unit-1.pdf",
      },
      { unitName: "Web Applications-I", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10970/1/Unit-2.pdf" },
      { unitName: "Web Applications-II", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10972/1/Unit-3.pdf" },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 300,
    marginBottom: theme.spacing(1),
    background: theme.palette.background.default,
  },
  imageWrapper: {
    height: 160,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: theme.spacing(1),
  },

  checkIcon: {
    fontSize: theme.spacing(2),
    marginLeft: theme.spacing(0.6),
  },
  info: {
    marginBottom: theme.spacing(3),
  },
  infoPaper: {
    padding: theme.spacing(1.8),
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
  },
  infoHeading: {
    marginBottom: theme.spacing(1),
  },
  unitGroup: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

/**
 * Posts page
 */
const StudyMaterial = () => {
  const [, dispatch] = useStore();
  const { pathname, search, hash } = useLocation();
  const classes = useStyles();

  const query = new URLSearchParams(search);
  const collegeName = query.get("collegeName");
  const programmeName = query.get("programmeName");
  const courseId = query.get("courseId");
  const courseName = query.get("courseName");

  const { loading, data } = useQuery(GET_COURSE, {
    variables: { id: courseId },
  });

  useEffect(() => {
    dispatch({ type: SET_EXPLORE_ROUTE, payload: pathname + search + hash });
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <Paper className={classes.paper}>
          <Skeleton variant="rect" height={300} />
        </Paper>
      );
    }

    if (!data) {
      return <NotFound />;
    }

    const course = data.getCourse;

    return (
      <Paper className={classes.paper} elevation={0}>
        <span>
          <Typography display="inline" variant="h6">
            <b>@{course.name}</b>
          </Typography>
          <CheckCircleIcon color="primary" className={classes.checkIcon} />
        </span>

        <Typography variant="h5" gutterBottom color="textSecondary">
          <b>{course.fullName}</b>
        </Typography>

        <div className={classes.imageWrapper}>
          <img alt="course image" src={course.image} className={classes.image} />
        </div>

        <Box m={4} />

        {BLOCKS.map((block, index) => (
          <div className={classes.info}>
            <div className={classes.infoHeading}>
              <Typography variant="h6" color="textSecondary">
                <b>📖 Block {index + 1}</b>
              </Typography>

              <Typography color="textSecondary" variant="h6" style={{ marginLeft: 19 }}>
                ( {block.blockName} )
              </Typography>
            </div>

            <Paper className={classes.infoPaper} elevation={0}>
              {block.units.map((unit, index) => (
                <div className={classes.unitGroup}>
                  <Typography>
                    <b>📄 Unit {index + 1}</b>
                  </Typography>
                  <Link href={unit.unitLink} display="block" variant="body1" style={{ marginLeft: 24 }}>
                    {unit.unitName}
                  </Link>
                </div>
              ))}
            </Paper>
          </div>
        ))}
      </Paper>
    );
  };

  return (
    <>
      <Head title={`${courseName.toUpperCase()} | ${programmeName.toUpperCase()} | ${collegeName.toUpperCase()}`} />

      <ScrollManager scrollKey={`${pathname}${search}`} />

      {renderContent()}
    </>
  );
};

export default StudyMaterial;
