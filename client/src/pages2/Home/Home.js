import { useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Head from "components/Head";
import ScrollManager from "components/ScrollManager";
import { GET_COLLEGE_PROGRAMMES } from "graphql/programme";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useStore } from "store";
import { SET_EXPLORE_ROUTE } from "store/route";
import ProgrammeFilter from "./ProgrammeFilter";
import ProgrammeList from "./ProgrammeList";

const Home = () => {
  const cardColors = ["#203f52", "#4d137f", "#002244", "#004953"];

  const [{ datatree }, dispatch] = useStore();
  const { pathname, search, hash } = useLocation();

  if (!datatree.colleges) return "";
  const colleges = datatree.colleges;
  // console.log(colleges);
  const ignou = colleges[0];

  // const query = new URLSearchParams(search);
  const collegeId = ignou.id;
  const collegeName = ignou.name;

  const [degree, setDegree] = useState("all");
  // console.log(degree);

  const variables = {
    collegeId: collegeId,
    skip: 0,
    // limit: EXPLORE_PAGE_CARDS_LIMIT,
  };
  const { data, error } = useQuery(GET_COLLEGE_PROGRAMMES, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    hash && setDegree(hash.slice(8)); // slice '#degree=bachelors'
    dispatch({ type: SET_EXPLORE_ROUTE, payload: pathname + search + hash });
  }, [hash]);

  useEffect(() => {
    dispatch({ type: SET_EXPLORE_ROUTE, payload: pathname + search + hash });
  }, []);

  return (
    <div>
      <Head title={`${collegeName.toUpperCase()}`} />

      <ScrollManager scrollKey={`${pathname}${search}${hash}`} />

      <ProgrammeFilter degreesCount={8} selectedDegree={degree} />

      <Box m={1} />

      <ProgrammeList
        data={data}
        error={error}
        cardColors={cardColors}
        collegeId={collegeId}
        collegeName={collegeName}
        degree={degree}
      />
    </div>
  );
};

export default Home;
