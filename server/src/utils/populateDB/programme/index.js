// import Programme from "../../../models/Programme";
import { getProgrammes, saveProgrammes } from "./programme";

export const createProgrammes = () => {
  const programmes = getProgrammes();
  console.log(programmes);
  const programmesJSON = JSON.stringify(programmes);
  saveProgrammes(programmesJSON);

  // Programme.insertMany(programmes, (err, docs) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Programmes created");
  //   }
  // });
};
