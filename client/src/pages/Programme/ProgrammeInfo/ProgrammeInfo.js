import { useQuery } from "@apollo/client";
import { GET_PROGRAMME } from "graphql/programme";
import React from "react";
import Assignment from "./Assignment";
import Detail from "./Detail";
import Title from "./Title";

const ProgrammeInfo = ({ programmeId }) => {
  const { loading, data, error } = useQuery(GET_PROGRAMME, {
    variables: { id: programmeId },
  });

  if (error) return "";

  const programme = data && data.getProgramme;

  return (
    <>
      <Title programme={programme} loading={loading} />

      <Detail programme={programme} loading={loading} />

      {programme &&
        (programme.assignment.main ||
          programme.assignment.hindi ||
          programme.assignmentTermwise.main.length > 0 ||
          programme.assignmentTermwise.hindi.length > 0) && (
          <Assignment
            assignment={programme && programme.assignment}
            assignmentTermwise={programme && programme.assignmentTermwise}
            termType={programme && programme.termType}
            loading={loading}
          />
        )}
    </>
  );
};

export default ProgrammeInfo;
