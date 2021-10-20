import CardsContainer from "components/Cards/CardsContainer";
import SolidCard from "components/Cards/SolidCard";
import Empty from "components/Empty";
import { EXPLORE_PAGE_CARDS_LIMIT } from "constants/DataLimit";
import { DegreeType2 } from "constants/DegreeType";
import React from "react";
import { FixedSizeList as List } from "react-window";
import { ReactWindowScroller } from "react-window-scroller";
import * as Routes from "routes";

const ProgrammeList = ({ data, error, cardColors, collegeId, collegeName, degree }) => {
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
    (programme) => degree === "" || programme.degree === DegreeType2.indexOf(degree)
  );

  const Row = ({ index, style }) => {
    const i = index;

    const programme = filteredProgrammes[i];
    // console.log(programme);
    return (
      <div style={style}>
        <SolidCard
          key={programme.id}
          title={programme.code}
          subtitle={programme.title}
          image={programme.image}
          thumbnail={programme.thumbnail}
          color={cardColors[i % cardColors.length]}
          url={`${Routes.PROGRAMME}?collegeId=${collegeId}&collegeName=${collegeName}&programmeId=${programme.id}&programmeName=${programme.code}&termType=${programme.termType}&termsCount=${programme.termsCount}`}
          termType={programme.termType}
          termsCount={programme.termsCount}
          totalCredits={programme.totalCredits}
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
          itemCount={filteredProgrammes.length || count}
          itemSize={280}
          onScroll={onScroll}
        >
          {Row}
        </List>
      )}
    </ReactWindowScroller>
  );
};

export default ProgrammeList;
