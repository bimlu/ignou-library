import { useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Head from "components/Head";
import ScrollManager from "components/ScrollManager";
import { GET_PROGRAMME_STRUCTURE } from "graphql/programme";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CourseFilter from "./CourseFilter";
import CourseList from "./CourseList";
import ProgrammeInfo from "./ProgrammeInfo/index";

const CARD_COLORS = ["#203f52", "#4d137f", "#002244", "#004953"];

const Programme = () => {
  const { pathname, search, hash } = useLocation();

  const query = new URLSearchParams(search);
  const collegeId = query.get("collegeId");
  const collegeName = query.get("collegeName");
  const programmeId = query.get("programmeId");
  const programmeName = query.get("programmeName");
  const termType = parseInt(query.get("termType"));
  const termsCount = parseInt(query.get("termsCount"));

  const [term, setTerm] = useState(0);

  const { data, error } = useQuery(GET_PROGRAMME_STRUCTURE, {
    variables: {
      id: programmeId,
    },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <>
      <Head title={`${programmeName.toUpperCase()} | ${collegeName.toUpperCase()}`} />

      <ScrollManager scrollKey={`${pathname}${search}`} />

      <ProgrammeInfo collegeId={collegeId} programmeId={programmeId} />

      <CourseFilter termType={termType} termsCount={termsCount} selectedTerm={term} setTerm={setTerm} />

      <Box m={2} />

      <CourseList
        data={data}
        error={error}
        term={term}
        cardColors={CARD_COLORS}
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
