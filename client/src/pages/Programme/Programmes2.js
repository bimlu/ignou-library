import { useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import CardsContainer from "components/Cards/CardsContainer";
import SolidCard from "components/Cards/SolidCard";
import Empty from "components/Empty";
import Head from "components/Head";
import ScrollManager from "components/ScrollManager";
import { EXPLORE_PAGE_CARDS_LIMIT } from "constants/DataLimit";
import { DegreeType2 } from "constants/DegreeType";
import { GET_COLLEGE_PROGRAMMES } from "graphql/programme";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import { ReactWindowScroller } from "react-window-scroller";
import * as Routes from "routes";
import { useStore } from "store";
import { SET_EXPLORE_ROUTE } from "store/route";
import ProgrammeFilter from "./ProgrammeFilter";

/**
 * Programmes page
 */
const Programmes = () => {
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
        <div style={style}>
          <SolidCard
            key={programme.id}
            title={programme.name}
            subtitle={programme.fullName}
            image={programme.image}
            thumbnail={programme.thumbnail}
            color={cardColors[i % cardColors.length]}
            url={`${Routes.COURSES}?collegeId=${collegeId}&collegeName=${collegeName}&programmeId=${programme.id}&programmeName=${programme.name}&termType=${programme.termType}&termsCount=${programme.termsCount}#term=all`}
            studentData={`Students: ${programme.studentsCount}`}
            otherData={`Courses: ${programme.coursesCount}`}
            termType={programme.termType}
            termsCount={programme.termsCount}
            totalCredits={programme.totalCredits}
          />
        </div>
      );
    };

    return (
      <div>
        <ReactWindowScroller>
          {({ ref, outerRef, style, onScroll }) => (
            <List
              ref={ref}
              outerRef={outerRef}
              style={style}
              height={window.innerHeight}
              itemCount={filteredProgrammes.length || count}
              itemSize={280}
              onScroll={onScroll}
            >
              {Row}
            </List>
          )}
        </ReactWindowScroller>
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
