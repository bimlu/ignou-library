import Box from "@material-ui/core/Box";
import Head from "components/Head";
import ScrollManager from "components/ScrollManager";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProgrammeFilter from "./ProgrammeFilter";
import ProgrammeList from "./ProgrammeList";

const COLLEGE_NAME = "IGNOU";

const Home = () => {
  const { pathname, search } = useLocation();

  const [degree, setDegree] = useState("");

  return (
    <div>
      <Head title={`${COLLEGE_NAME.toUpperCase()}`} />

      <ScrollManager scrollKey={`${pathname}${search}`} />

      <ProgrammeFilter degreesCount={8} selectedDegree={degree} setDegree={setDegree} />

      <Box m={1} />

      <ProgrammeList degree={degree} />
    </div>
  );
};

export default Home;
