import { IconButton } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { TermType } from "constants/TermType";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import * as Routes from "routes";

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const BreadcrumbsNav = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const collegeId = query.get("collegeId");
  const collegeName = query.get("collegeName");
  const programmeId = query.get("programmeId");
  const programmeName = query.get("programmeName");
  const termType = query.get("termType");
  const termsCount = query.get("termsCount");
  const courseId = query.get("courseId");
  const courseName = query.get("courseName");

  const [term, setTerm] = useState(query.get("term"));
  const [degree, setDegree] = useState(query.get("degree"));

  useEffect(() => {
    const hash = window.location.hash;
    hash.includes("term") && setTerm(hash.slice(6)); // slice '#term=1'
    hash.includes("degree") && setDegree(hash.slice(8)); // slice '#degree=bachelors'
  }, [window.location.hash]);

  let last;
  if (courseId) {
    last = "course";
  } else if (!courseId && term) {
    last = "term";
  } else if (!courseId && degree) {
    last = "degree";
  } else if (!term && programmeId) {
    last = "programme";
  } else if (!programmeId && collegeId) {
    last = "college";
  }

  return (
    <Breadcrumbs separator={"›"} maxItems={3} itemsBeforeCollapse={1} itemsAfterCollapse={1} aria-label="breadcrumb">
      <IconButton aria-label="go back" onClick={() => history.back()}>
        <ArrowBackIcon />
      </IconButton>

      <LinkRouter color="inherit" to={`${Routes.PROGRAMMES}#degree=all`}>
        Programmes
      </LinkRouter>

      {programmeId &&
        (last === "programme" ? (
          <Typography color="textPrimary">{programmeName}</Typography>
        ) : (
          <LinkRouter
            color="inherit"
            to={`${Routes.COURSES}?collegeId=${collegeId}&collegeName=${collegeName}&programmeId=${programmeId}&programmeName=${programmeName}&termType=${termType}&termsCount=${termsCount}#term=all`}
          >
            {programmeName}
          </LinkRouter>
        ))}

      {term &&
        term !== "all" &&
        (last === "term" ? (
          <Typography color="textPrimary">{`${TermType[termType]}-${term}`}</Typography>
        ) : (
          <LinkRouter
            color="inherit"
            to={`${Routes.COURSES}?collegeId=${collegeId}&collegeName=${collegeName}&programmeId=${programmeId}&programmeName=${programmeName}&termType=${termType}&termsCount=${termsCount}#term=${term}`}
          >
            {`${TermType[termType]}-${term}`}
          </LinkRouter>
        ))}

      {courseId &&
        (last === "course" ? (
          <Typography color="textPrimary">{courseName}</Typography>
        ) : (
          <LinkRouter
            color="inherit"
            to={`${Routes.POSTS}?collegeId=${collegeId}&collegeName=${collegeName}&programmeId=${programmeId}&programmeName=${programmeName}&termType=${termType}&termsCount=${termsCount}&term=${term}&courseId=${courseId}&courseName=${courseName}`}
          >
            {courseName}
          </LinkRouter>
        ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
