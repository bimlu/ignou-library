import { useQuery } from "@apollo/client";
import { Box } from "@material-ui/core";
import Empty from "components/Empty";
import NoInternet from "components/NoInternet";
import { GET_PROGRAMME_STRUCTURE } from "graphql/programme";
import React from "react";
import { FixedSizeList as List } from "react-window";
import { ReactWindowScroller } from "react-window-scroller";
import * as Routes from "routes";
import CourseCard from "./CourseCard";

const CourseList = ({ term, programmeId, programmeName }) => {
  const { data, loading, error } = useQuery(GET_PROGRAMME_STRUCTURE, {
    variables: {
      id: programmeId,
    },
  });

  if (error) return <NoInternet />;

  if (loading) {
    return (
      <div>
        {Array.from(new Array(parseInt(1))).map((_el, i) => (
          <div key={i}>
            <CourseCard loading={true} url="#" />
            <Box mb={1.5} />
          </div>
        ))}
      </div>
    );
  }

  const programme = data.getProgrammeStructure;
  if (!programme) return null;
  if (!programme.programmeStructure) return <Empty text="No courses yet." />;
  if (!programme.programmeStructure > 0) return <Empty text="No courses yet." />;
  const courses = programme.programmeStructure;
  const filteredCourses = courses.filter((course) => term === 0 || course.term === parseInt(term));

  const Row = ({ index, style }) => {
    const i = index;

    const course = filteredCourses[i];
    return (
      <div style={style}>
        <CourseCard
          key={course.course.id}
          title={course.course.code}
          subtitle={course.course.title}
          image={course.course.image}
          url={`${Routes.COURSE}?programmeName=${programmeName}&courseId=${course.course.id}&courseName=${course.course.code}`}
          credit={course.credit}
        />
      </div>
    );
  };

  return (
    <ReactWindowScroller>
      {({ ref, outerRef, style, onScroll }) => (
        <List
          ref={ref}
          outerRef={outerRef}
          style={style}
          height={window.innerHeight}
          itemCount={filteredCourses.length}
          itemSize={220}
          onScroll={onScroll}
        >
          {Row}
        </List>
      )}
    </ReactWindowScroller>
  );
};

export default CourseList;
