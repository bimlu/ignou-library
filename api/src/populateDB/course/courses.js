import fs from "fs";
import path from "path";
import { awarenessAndAppreciationCourses } from "./awarenessAndAppreciation";
import { bachelorsDegreeCourses } from "./bachelorsDegree";
import { bachelorsHonoursDegreeCourses } from "./bachelorsHonoursDegree";
import { certificateCourses } from "./certificate";
import { diplomaCourses } from "./diploma";
import { mastersDegreeCourses } from "./mastersDegree";
import { missingCourses } from "./missingCourses";
import { pgGraduateCertificateCourses } from "./pgGraduateCertificate";
import { pgGraduateDiplomaCourses } from "./pgGraduateDiploma";

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
    .concat(mastersDegreeCourses)
    .concat(certificateCourses)
    .concat(diplomaCourses)
    .concat(pgGraduateCertificateCourses)
    .concat(pgGraduateDiplomaCourses)
    .concat(awarenessAndAppreciationCourses)
    .concat(missingCourses);
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
