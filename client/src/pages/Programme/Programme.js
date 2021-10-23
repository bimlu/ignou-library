import Box from "@material-ui/core/Box";
import Head from "components/Head";
import ScrollManager from "components/ScrollManager";
import React from "react";
import { useLocation } from "react-router-dom";
import { useStore } from "store";
import CourseFilter from "./CourseFilter";
import CourseList from "./CourseList";
import ProgrammeInfo from "./ProgrammeInfo/index";

const Programme = () => {
  const [{ term }] = useStore();
  const { pathname, search } = useLocation();

  const query = new URLSearchParams(search);
  const programmeId = query.get("programmeId");
  const programmeName = query.get("programmeName");
  const termType = parseInt(query.get("termType"));
  const termsCount = parseInt(query.get("termsCount"));

  return (
    <>
      <Head title={programmeName.toUpperCase()} />

      <ScrollManager scrollKey={`${pathname}${search}`} />

      <Box m={1} />

      <ProgrammeInfo programmeId={programmeId} />

      <CourseFilter termType={termType} termsCount={termsCount} selectedTerm={term} />

      <Box m={2} />

      <CourseList term={term} programmeId={programmeId} programmeName={programmeName} />
    </>
  );
};

export default Programme;
