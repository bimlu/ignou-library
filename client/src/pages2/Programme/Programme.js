import { useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Head from "components/Head";
import ScrollManager from "components/ScrollManager";
import { GET_PROGRAMME_STRUCTURE } from "graphql/programme";
import CourseInfo from "pages/Course/CourseInfo";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useStore } from "store";
import { SET_EXPLORE_ROUTE } from "store/route";
import CourseFilter from "./CourseFilter";
import CourseList from "./CourseList";

const Programme = () => {
  const cardColors = ["#203f52", "#4d137f", "#002244", "#004953"];

  const [, dispatch] = useStore();
  const { pathname, search, hash } = useLocation();

  const query = new URLSearchParams(search);
  const collegeId = query.get("collegeId");
  const collegeName = query.get("collegeName");
  const programmeId = query.get("programmeId");
  const programmeName = query.get("programmeName");
  const termType = parseInt(query.get("termType"));
  const termsCount = parseInt(query.get("termsCount"));

  const [term, setTerm] = useState("all");

  const variables = {
    id: programmeId,
  };
  const { data, error } = useQuery(GET_PROGRAMME_STRUCTURE, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    hash && setTerm(hash.slice(6)); // slice '#term=1'
    dispatch({ type: SET_EXPLORE_ROUTE, payload: pathname + search + hash });
  }, [hash]);

  return (
    <>
      <Head title={`${programmeName.toUpperCase()} | ${collegeName.toUpperCase()}`} />

      <ScrollManager scrollKey={`${pathname}${search}`} />

      <CourseInfo collegeId={collegeId} programmeId={programmeId} />

      <CourseFilter termType={termType} termsCount={termsCount} selectedTerm={term} />

      <Box m={2} />

      <CourseList
        data={data}
        error={error}
        term={term}
        cardColors={cardColors}
        collegeId={collegeId}
        collegeName={collegeName}
        programmeId={programmeId}
        programmeName={programmeName}
        termType={termType}
        termsCount={termsCount}
      />
    </>
  );
};

export default Programme;
