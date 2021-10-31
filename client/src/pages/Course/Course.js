import { useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Skeleton from "@material-ui/lab/Skeleton";
import PLACEHOLDER_IMAGE from "assets/images/card_placeholder.png";
import Error from "components/Error";
import Head from "components/Head";
import { GET_COURSE } from "graphql/course";
import React from "react";
import { useLocation } from "react-router-dom";
import Assignment from "./Assignment";
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

const Course = () => {
  const { search } = useLocation();
  const classes = useStyles();

  const query = new URLSearchParams(search);
  const programmeName = query.get("programmeName");
  const courseId = query.get("courseId");
  const courseName = query.get("courseName");

  const { loading, data, error } = useQuery(GET_COURSE, {
    variables: { id: courseId },
  });

  if (error) return <Error message={error.message} />;

  const renderContent = () => {
    const course = data && data.getCourse;

    return (
      <Paper className={classes.paper} elevation={0}>
        <span>
          <Typography display="inline" variant="h6">
            {loading ? <Skeleton width="20%" style={{ display: "inline-block" }} /> : <b>@{course.code}</b>}
          </Typography>

          {loading ? (
            <Skeleton variant="circle" style={{ display: "inline-block", marginLeft: 8 }}>
              <CheckCircleIcon color="primary" className={classes.checkIcon} />
            </Skeleton>
          ) : (
            <CheckCircleIcon color="primary" className={classes.checkIcon} />
          )}
        </span>

        <Typography variant="h5" color="textSecondary">
          {loading ? (
            <>
              <Skeleton width="100%" />
              <Skeleton width="50%" />
            </>
          ) : (
            <b>{course.title}</b>
          )}
        </Typography>

        <div className={classes.imageWrapper}>
          {loading ? (
            <img alt="programme image" src={PLACEHOLDER_IMAGE} className={classes.image} />
          ) : (
            <img alt="programme image" src={course.image} className={classes.image} />
          )}
        </div>

        <Box m={2} />

        <QuestionPaper loading={loading} questionPapers={course && course.questionPapers} />

        {course && (course.assignment.main || course.assignment.hindi) && (
          <Assignment loading={loading} assignment={course && course.assignment} />
        )}

        <StudyMaterial loading={loading} courseBlocks={course && course.courseBlocks} />
      </Paper>
    );
  };

  return (
    <>
      <Head title={`${courseName.toUpperCase()} | ${programmeName.toUpperCase()}`} />

      <Box m={1} />

      {renderContent()}
    </>
  );
};

export default Course;
