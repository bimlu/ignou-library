import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import TreeView from "@material-ui/lab/TreeView";
import { CourseIcon, ProgrammeIcon } from "components/icons";
import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import * as Routes from "routes";
import { useStore } from "store";
import { SET_COLLEGE_TREE } from "store/collegeTree";
import StyledTreeItem from "./StyledTreeItem";

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.main,
  },
}));

// keep track of expanded nodes and save to store before this component unmounts
let expanded = [];

export default function AssignmentTreeView({ selectedNodeValue, setSelectedNodeValue }) {
  const classes = useStyles();
  const [{ datatree }, dispatch] = useStore();

  useLayoutEffect(() => {
    return () => {
      dispatch({ type: SET_COLLEGE_TREE, payload: expanded });
    };
  }, []);

  if (!datatree.programmes) return "";

  const programmes = datatree.programmes;

  // console.log(programmes);

  return (
    <TreeView
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      onNodeToggle={(_e, nodeIds) => (expanded = nodeIds)}
      onNodeSelect={(_e, value) => {
        setSelectedNodeValue(value);
      }}
    >
      {/* ************PROGRAMME-LIST*********** */}
      {programmes.map((programme) => {
        const programmeStructure = programme.programmeStructure;
        return (
          <StyledTreeItem
            key={programme.id}
            nodeId={programme.id}
            labelText={
              <Link to={`${Routes.PROGRAMME}`} className={classes.link}>
                {programme.code}
              </Link>
            }
            labelIcon={() => <ProgrammeIcon width="20" />}
            labelInfo={"hi"}
            color="#e3742f"
            bgColor="#fcefe3"
          >
            {/* ************COURSE-LIST*********** */}
            {programmeStructure.map((crs) => {
              const course = crs.course;
              return (
                <StyledTreeItem
                  key={course.id}
                  nodeId={course.id}
                  labelText={
                    <Link to={`${Routes.COURSE}`} className={classes.link}>
                      {course.code}
                    </Link>
                  }
                  labelIcon={() => <CourseIcon width="20" />}
                  labelInfo={"hi"}
                  color="#e3742f"
                  bgColor="#fcefe3"
                />
              );
            })}
          </StyledTreeItem>
        );
      })}
    </TreeView>
  );
}
