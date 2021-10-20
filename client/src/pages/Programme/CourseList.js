import CardsContainer from "components/Cards/CardsContainer";
import Empty from "components/Empty";
import { EXPLORE_PAGE_CARDS_LIMIT } from "constants/DataLimit";
import React from "react";
import { FixedSizeList as List } from "react-window";
import { ReactWindowScroller } from "react-window-scroller";
import * as Routes from "routes";
import Card from "./Card";

const CourseList = ({ data, error, term, cardColors, programmeName }) => {
  if (!data) {
    return (
      <CardsContainer>
        {Array.from(new Array(parseInt(EXPLORE_PAGE_CARDS_LIMIT / 2))).map((_el, i) => (
          <Card key={i} loading={true} />
        ))}
      </CardsContainer>
    );
  }

  if (error) return "Please check your internet connection";

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
        <Card
          key={course.course.id}
          title={course.course.code}
          subtitle={course.course.title}
          image={course.course.image}
          color={cardColors[i % cardColors.length]}
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
