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
import NotFound from "components/NotFound";
import { GET_COURSE } from "graphql/course";
import { Link } from "@material-ui/core";

// const BLOCKS = [
//   {
//     blockName: "Basics of Computer Hardware",
//     blockLink: "",
//     units: [
//       {
//         unitName: "Computer their Origin and Applications",
//         unitLink: "https://egyankosh.ac.in/bitstream/123456789/10950/1/Unit-1.pdf",
//       },
//       {
//         unitName: "Functioning of a Computer",
//         unitLink: "https://egyankosh.ac.in/bitstream/123456789/10954/1/Unit-2.pdf",
//       },
//       { unitName: "Memory System", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10955/1/Unit-3.pdf" },
//       { unitName: "Input Output Devices", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10957/1/Unit-4.pdf" },
//       { unitName: "My Personal Computer", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10959/1/Unit-5.pdf" },
//     ],
//   },
//   {
//     blockName: "Basics of Computer Software",
//     blockLink: "",
//     units: [
//       { unitName: "Software Evolution", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10962/1/Unit-1.pdf" },
//       { unitName: "Operating System", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10964/1/Unit-2.pdf" },
//       {
//         unitName: "Concept in Programming Language",
//         unitLink: "https://egyankosh.ac.in/bitstream/123456789/10966/1/Unit-3.pdf",
//       },
//       { unitName: "Computer Applications", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10967/1/Unit-4.pdf" },
//     ],
//   },
//   {
//     blockName: "Internet Technologies",
//     blockLink: "",
//     units: [
//       {
//         unitName: "Networking and Internet",
//         unitLink: "https://egyankosh.ac.in/bitstream/123456789/10968/1/Unit-1.pdf",
//       },
//       { unitName: "Web Applications-I", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10970/1/Unit-2.pdf" },
//       { unitName: "Web Applications-II", unitLink: "https://egyankosh.ac.in/bitstream/123456789/10972/1/Unit-3.pdf" },
//     ],
//   },
// ];

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
    const courseBlocks = course.courseBlocks;
    // console.log(courseBlocks);

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
                    // href={blockUnit.unitLink.replace("handle", "bitstream") + `/1/${blockUnit.unitCode}.pdf`}
                    // href={blockUnit.unitLink}
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
