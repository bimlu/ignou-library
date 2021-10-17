import { useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Skeleton from "@material-ui/lab/Skeleton";
import Head from "components/Head";
import NotFound from "components/NotFound";
import ScrollManager from "components/ScrollManager";
import { GET_COURSE } from "graphql/course";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStore } from "store";
import { SET_EXPLORE_ROUTE } from "store/route";
import QuestionPaper from "./QuestionPaper";
import StudyMaterial from "./StudyMaterial";

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
}));

/**
 * Posts page
 */
const Course = () => {
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

        <Box m={2} />

        <QuestionPaper />

        <StudyMaterial course={course} />
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

export default Course;
