import fs from "fs";
import path from "path";
import { bachelorsDegreeProgrammes } from "./bachelorsDegree";
import { bachelorsHonoursDegreeProgrammes } from "./bachelorsHonoursDegree";
import { mastersDegreeProgramme } from "./mastersDegree";

export const getProgrammes = () =>
  bachelorsDegreeProgrammes
    .concat(bachelorsHonoursDegreeProgrammes)
    .concat(mastersDegreeProgramme);

export const saveProgrammes = (programmes) => {
  const filePath = path.resolve(__dirname, "cleanedProgrammes.json");
  fs.writeFileSync(filePath, programmes, (err) => {
    if (err) return console.log(err);
    console.log("file saved");
  });
};
