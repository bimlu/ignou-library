import fs from "fs";
import path from "path";
import { awarenessAndAppreciationProgrammes } from "./awarenessAndAppreciation";
import { bachelorsDegreeProgrammes } from "./bachelorsDegree";
import { bachelorsHonoursDegreeProgrammes } from "./bachelorsHonoursDegree";
import { diplomaProgrammes } from "./diploma";
import { mastersDegreeProgrammes } from "./mastersDegree";
import { pgCertificateProgrammes } from "./pgCertificate";
import { pgGraduateCertificateProgrammes } from "./pgGraduateCertificate";
import { pgGraduateDiplomaProgrammes } from "./pgGraduateDiploma";

export const getProgrammes = () =>
  bachelorsDegreeProgrammes
    .concat(bachelorsHonoursDegreeProgrammes)
    .concat(mastersDegreeProgrammes)
    .concat(diplomaProgrammes)
    .concat(pgGraduateDiplomaProgrammes)
    .concat(pgCertificateProgrammes)
    .concat(pgGraduateCertificateProgrammes)
    .concat(awarenessAndAppreciationProgrammes);

export const addCoursesField = (programmes) => {
  for (let programme of programmes) {
    programme.courses = [];
    const courseList = programme.courseList;
    for (let category in courseList) {
      programme.courses = programme.courses.concat(courseList[category]);
    }
    // if courses are in programmeDetail field, extract them
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
