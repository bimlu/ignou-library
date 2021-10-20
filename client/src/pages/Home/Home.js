import { useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Head from "components/Head";
import ScrollManager from "components/ScrollManager";
import { GET_PROGRAMMES } from "graphql/programme";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProgrammeFilter from "./ProgrammeFilter";
import ProgrammeList from "./ProgrammeList";

const COLLEGE_NAME = "IGNOU";
const CARD_COLORS = ["#203f52", "#4d137f", "#002244", "#004953"];

const Home = () => {
  const { pathname, search } = useLocation();

  const [degree, setDegree] = useState("");

  const { data, error } = useQuery(GET_PROGRAMMES, {
    variables: {
      skip: 0,
      limit: 0,
    },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <div>
      <Head title={`${COLLEGE_NAME.toUpperCase()}`} />

      <ScrollManager scrollKey={`${pathname}${search}`} />

      <ProgrammeFilter degreesCount={8} selectedDegree={degree} setDegree={setDegree} />

      <Box m={1} />

      <ProgrammeList data={data} error={error} cardColors={CARD_COLORS} degree={degree} />
    </div>
  );
};

export default Home;
