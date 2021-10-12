import { useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import ExploreHeader from "components/App/Header/ExploreHeader";
import CardsContainer from "components/Cards/CardsContainer";
import Empty from "components/Empty";
import Head from "components/Head";
import ScrollManager from "components/ScrollManager";
import { EXPLORE_PAGE_CARDS_LIMIT } from "constants/DataLimit";
import { GET_PROGRAMME_STRUCTURE } from "graphql/programme";
import CourseInfo from "pages/Course/CourseInfo";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Routes from "routes";
import { useStore } from "store";
import { SET_EXPLORE_ROUTE } from "store/route";
import SolidCard from "./Card";
import CourseFilter from "./CourseFilter";

/**
 * Courses page
 */
const Courses = () => {
  const cardColors = ["#203f52", "#4d137f", "#002244", "#004953"];

  const [, dispatch] = useStore();
  const { pathname, search, hash } = useLocation();

  const query = new URLSearchParams(search);
  const collegeId = query.get("collegeId");
  const collegeName = query.get("collegeName");
  const programmeId = query.get("programmeId");
  const programmeName = query.get("programmeName");
  const termType = parseInt(query.get("termType"));
  const termsCount = parseInt(query.get("termsCount"));

  const [term, setTerm] = useState("all");

  const variables = {
    // collegeId: collegeId,
    // programmeId: programmeId,
    // skip: 0,
    // limit: EXPLORE_PAGE_CARDS_LIMIT,
    id: programmeId,
  };
  const { data, loading, error, networkStatus } = useQuery(GET_PROGRAMME_STRUCTURE, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    hash && setTerm(hash.slice(6)); // slice '#term=1'
    dispatch({ type: SET_EXPLORE_ROUTE, payload: pathname + search + hash });
  }, [hash]);

  const renderContent = () => {
    if (loading && networkStatus === 1) {
      return (
        <CardsContainer>
          {Array.from(new Array(parseInt(EXPLORE_PAGE_CARDS_LIMIT / 2))).map((_el, i) => (
            <SolidCard key={i} loading={true} />
          ))}
        </CardsContainer>
      );
    }

    if (error) return "Please check your internet connection";

    // console.log('data: ', data)

    const programme = data.getProgrammeStructure;
    if (!programme) return null;
    if (!programme.programmeStructure) return <Empty text="No courses yet." />;
    if (!programme.programmeStructure > 0) return <Empty text="No courses yet." />;
    const courses = programme.programmeStructure;

    return (
      <CardsContainer>
        {courses
          // show all course if term === 'all', filter otherwise
          .filter((course) => term === "all" || course.term === parseInt(term))
          .map((course, i) => (
            <SolidCard
              key={course.courseCode}
              title={course.course.name}
              subtitle={course.course.fullName}
              image={course.course.image}
              color={cardColors[i % cardColors.length]}
              url={`${Routes.POSTS}?collegeId=${collegeId}&collegeName=${collegeName}&programmeId=${programmeId}&programmeName=${programmeName}&termType=${termType}&termsCount=${termsCount}&term=${course.term}&courseId=${course.course.id}&courseName=${course.course.name}`}
              studentData={`Students: ${course.course.studentsCount}`}
              otherData={`Posts: ${course.course.postsCount}`}
              postsCount={course.course.postsCount}
            />
          ))}
      </CardsContainer>
    );
  };

  return (
    <>
      <Head title={`${programmeName.toUpperCase()} | ${collegeName.toUpperCase()}`} />

      <ScrollManager scrollKey={`${pathname}${search}`} />

      <ExploreHeader />

      <CourseInfo collegeId={collegeId} programmeId={programmeId} />

      <CourseFilter termType={termType} termsCount={termsCount} selectedTerm={term} />

      <Box m={1} mb={2}>
        <Divider />
      </Box>

      {renderContent()}
    </>
  );
};

export default Courses;
