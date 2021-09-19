import Programme from "../../models/Programme";
import { addCoursesField, getProgrammes, saveProgrammes } from "./programme";

export const createProgrammes = () => {
  const programmes = getProgrammes();
  const programmesFixed = addCoursesField(programmes);
  console.log(programmesFixed);
  const programmesJSON = JSON.stringify(programmesFixed);
  saveProgrammes(programmesJSON);

  Programme.insertMany(programmes, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Programmes created");
    }
  });
};
