import fs from "fs";
import path from "path";
import { bachelorsDegreeCourses } from "./bachelors-degree";
import { bachelorsHonoursDegreeCourses } from "./bachelors-honours-degree";
import { mastersDegreeCourse } from "./masters-degree";

const isDuplicate = (outCourses, course) => {
  if (outCourses.length === 0) {
    return false;
  }

  for (let crs of outCourses) {
    if (crs.code === course.code) {
      return true;
    }
  }

  return false;
};

export const getCourses = () => {
  const inCourses = bachelorsDegreeCourses
    .concat(bachelorsHonoursDegreeCourses)
    .concat(mastersDegreeCourse);
  const outCourses = [];

  // console.log("bachelorsDegreeCourses: ", bachelorsDegreeCourses.length);
  // console.log(
  //   "bachelorsHonoursDegreeCourses: ",
  //   bachelorsHonoursDegreeCourses.length
  // );
  // console.log("mastersDegreeCourse: ", mastersDegreeCourse.length);

  for (let course of inCourses) {
    if (!isDuplicate(outCourses, course)) {
      outCourses.push(course);
    }
  }

  return outCourses;
};

export const saveCourses = (cleanedCourses) => {
  const filePath = path.resolve(__dirname, "cleanedCourses.json");
  fs.writeFileSync(filePath, cleanedCourses, (err) => {
    if (err) return console.log(err);
    console.log("file saved!");
  });
};
