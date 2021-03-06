import { useQuery } from "@apollo/client";
import { Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Error from "components/Error";
import NoItem from "components/NoItem";
import { DegreeType2 } from "constants/DegreeType";
import { GET_PROGRAMMES } from "graphql/programme";
import React from "react";
import { FixedSizeList as List } from "react-window";
import { ReactWindowScroller } from "react-window-scroller";
import * as Routes from "routes";
import ProgrammeCard from "./ProgrammeCard";

const ProgrammeList = ({ degree }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const { data, loading, error } = useQuery(GET_PROGRAMMES, {
    variables: {
      skip: 0,
      limit: 0,
    },
  });

  if (error) return <Error message={error.message} />;

  if (loading) {
    return (
      <div>
        {Array.from(new Array(parseInt(isDesktop ? 3 : 2))).map((_el, i) => (
          <div key={i}>
            <ProgrammeCard loading={true} url="#" />
            <Box mb={1.5} />
          </div>
        ))}
      </div>
    );
  }

  const { programmes, count } = data.getProgrammes;
  if (!programmes.length > 0) return <NoItem itemName="Programmes" />;
  const filteredProgrammes = programmes.filter(
    (programme) => degree === "" || programme.degree === DegreeType2.indexOf(degree)
  );

  const Row = ({ index, style }) => {
    const i = index;

    const programme = filteredProgrammes[i];
    const disciplinesCSV = programme.disciplines.join(",");
    return (
      <div style={style}>
        <ProgrammeCard
          key={programme.id}
          title={programme.code}
          subtitle={programme.title}
          image={programme.image}
          url={`${Routes.PROGRAMME}?programmeId=${programme.id}&programmeName=${programme.code}&termType=${programme.termType}&termsCount=${programme.termsCount}&cbcs=${programme.cbcs}&disciplinesCSV=${disciplinesCSV}`}
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
          height={window.innerHeight * 2}
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
