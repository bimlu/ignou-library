import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";

import { GET_COLLEGE_PROGRAMMES } from "graphql/programme";

import CardsContainer from "components/Cards/CardsContainer";
import Empty from "components/Empty";
import Head from "components/Head";
import SolidCard from "components/Cards/SolidCard";
import ScrollManager from "components/ScrollManager";
import Box from "@material-ui/core/Box";
// import Divider from "@material-ui/core/Divider";
import ProgrammeFilter from "./ProgrammeFilter";

import { EXPLORE_PAGE_CARDS_LIMIT } from "constants/DataLimit";

import { useStore } from "store";
import { SET_EXPLORE_ROUTE } from "store/route";
import * as Routes from "routes";
import { FixedSizeList as List } from "react-window";
import { DegreeType2 } from "constants/DegreeType";
import { BOTTOM_NAV_HEIGHT, HEADER_HEIGHT } from "constants/Layout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "0.25em",
    },
  },
  row: {
    paddingRight: theme.spacing(0.6),
  },
}));
/**
 * Programmes page
 */
const Programmes = () => {
  const classes = useStyles();
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

  const renderContent = () => {
    if (!data) {
      return (
        <CardsContainer>
          {Array.from(new Array(parseInt(EXPLORE_PAGE_CARDS_LIMIT / 2))).map((_el, i) => (
            <SolidCard key={i} loading={true} />
          ))}
        </CardsContainer>
      );
    }

    if (error) return "Please check your internet connection";

    const { programmes, count } = data.getCollegeProgrammes;
    if (!programmes.length > 0) return <Empty text="No programmes yet." />;
    const filteredProgrammes = programmes.filter(
      (programme) => degree === "all" || programme.degree === DegreeType2.indexOf(degree)
    );

    const Row = ({ index, style }) => {
      const i = index;

      const programme = filteredProgrammes[i];
      // console.log(programme);
      return (
        <div style={style} className={classes.row}>
          <SolidCard
            key={programme.id}
            title={programme.name}
            subtitle={programme.fullName}
            image={programme.image}
            color={cardColors[i % cardColors.length]}
            url={`${Routes.COURSES}?collegeId=${collegeId}&collegeName=${collegeName}&programmeId=${programme.id}&programmeName=${programme.name}&termType=${programme.termType}&termsCount=${programme.termsCount}#term=all`}
            studentData={`Students: ${programme.studentsCount}`}
            otherData={`Courses: ${programme.coursesCount}`}
            termType={programme.termType}
            termsCount={programme.termsCount}
          />
        </div>
      );
    };

    return (
      <div>
        <ScrollManager scrollKey={`${pathname}${search}${hash}`}>
          {({ connectScrollTarget }) => (
            <List
              height={window.innerHeight - HEADER_HEIGHT - BOTTOM_NAV_HEIGHT - 28}
              itemCount={filteredProgrammes.length || count}
              itemSize={280}
              width="100%"
              className={classes.list}
              ref={connectScrollTarget}
            >
              {Row}
            </List>
          )}
        </ScrollManager>
      </div>
    );
  };

  return (
    <div>
      <Head title={`${collegeName.toUpperCase()}`} />

      <ScrollManager scrollKey={`${pathname}${search}${hash}`} />

      <ProgrammeFilter degreesCount={8} selectedDegree={degree} />

      <Box m={1} />

      {renderContent()}
    </div>
  );
};

export default Programmes;
