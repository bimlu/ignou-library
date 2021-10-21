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

      <Assignment programme={programme} loading={loading} />
    </>
  );
};

export default ProgrammeInfo;
