import fs from "fs";
import path from "path";
import { bachelorsDegreeProgrammes } from "./bachelorsDegree";
// import { bachelorsHonoursDegreeProgrammes } from "./bachelorsHonoursDegree";
// import { mastersDegreeProgramme } from "./mastersDegree";

export const getProgrammes = () => bachelorsDegreeProgrammes;
// .concat(bachelorsHonoursDegreeProgrammes)
// .concat(mastersDegreeProgramme);

export const addCoursesField = (programmes) => {
  for (let programme of programmes) {
    programme.courses = [];
    const courseList = programme.courseList;
    for (let category in courseList) {
      programme.courses = programme.courses.concat(courseList[category]);
    }
  }

  return programmes;
};

export const saveProgrammes = (programmes) => {
  const filePath = path.resolve(__dirname, "cleanedProgrammes.json");
  fs.writeFileSync(filePath, programmes, (err) => {
    if (err) return console.log(err);
    console.log("file saved");
  });
};
