import Box from "@material-ui/core/Box";
import Head from "components/Head";
import ScrollManager from "components/ScrollManager";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStore } from "store";
import { CLEAR_TERM } from "store/term";
import ProgrammeFilter from "./ProgrammeFilter";
import ProgrammeList from "./ProgrammeList";

const COLLEGE_NAME = "IGNOU";

const Home = () => {
  const { pathname, search } = useLocation();
  const [{ degree }, dispatch] = useStore();

  useEffect(() => dispatch({ type: CLEAR_TERM }), []);

  return (
    <div>
      <Head title={`${COLLEGE_NAME.toUpperCase()}`} />

      <ScrollManager scrollKey={`${pathname}${search}`} />

      <Box m={1} />

      <ProgrammeFilter degreesCount={8} selectedDegree={degree} />

      <Box m={1} />

      <ProgrammeList degree={degree} />
    </div>
  );
};

export default Home;
