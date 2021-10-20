import { useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Head from "components/Head";
import ScrollManager from "components/ScrollManager";
import { GET_COLLEGE_PROGRAMMES } from "graphql/programme";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProgrammeFilter from "./ProgrammeFilter";
import ProgrammeList from "./ProgrammeList";

const COLLEGE_ID = "616f78e4b0d653edbab111ef";
const COLLEGE_NAME = "IGNOU";
const CARD_COLORS = ["#203f52", "#4d137f", "#002244", "#004953"];

const Home = () => {
  const { pathname, search, hash } = useLocation();

  const [degree, setDegree] = useState("");

  const { data, error } = useQuery(GET_COLLEGE_PROGRAMMES, {
    variables: {
      collegeId: COLLEGE_ID,
      skip: 0,
    },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <div>
      <Head title={`${COLLEGE_NAME.toUpperCase()}`} />

      <ScrollManager scrollKey={`${pathname}${search}${hash}`} />

      <ProgrammeFilter degreesCount={8} selectedDegree={degree} setDegree={setDegree} />

      <Box m={1} />

      <ProgrammeList
        data={data}
        error={error}
        cardColors={CARD_COLORS}
        collegeId={COLLEGE_ID}
        collegeName={COLLEGE_NAME}
        degree={degree}
      />
    </div>
  );
};

export default Home;
