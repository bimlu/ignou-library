import Box from "@material-ui/core/Box";
import AssignmentTreeView from "components/AssignmentTreeView";
import Head from "components/Head";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useStore } from "store";
import { CLEAR_TERM } from "store/term";
import ProgrammeFilter from "./ProgrammeFilter";
import ProgrammeList from "./ProgrammeList";

const COLLEGE_NAME = "IGNOU";

const Home = () => {
  const { pathname } = useLocation();
  const [{ degree }, dispatch] = useStore();
  const [selectedNodeValue, setSelectedNodeValue] = useState("");

  useEffect(() => dispatch({ type: CLEAR_TERM }), []);

  return (
    <div>
      <Head title={`${COLLEGE_NAME.toUpperCase()}`} />

      <Box m={1} />

      <Box mt={2} mb={8}>
        <AssignmentTreeView selectedNodeValue={selectedNodeValue} setSelectedNodeValue={setSelectedNodeValue} />
      </Box>

      <ProgrammeFilter degreesCount={8} selectedDegree={degree} />

      <Box m={1} />

      <ProgrammeList degree={degree} />
    </div>
  );
};

export default Home;
