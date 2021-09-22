import College from "../../models/College";
import Programme from "../../models/Programme";
import { getProgrammes, saveProgrammes } from "./programme";

export const createProgrammes = () => {
  const programmes = getProgrammes();
  // const programmesFixed = addCoursesField(programmes);
  // console.log(programmesFixed);

  // Programme.insertMany(programmes, (err, docs) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Programmes created");
  //   }
  // });

  for (let programme of programmes) {
    if (!programme.name || !programme.fullName) {
      console.log("Bad Programme: ", programme);
      continue;
    }
    createProgramme(programme);
  }

  console.log("length of programmes: ", programmes.length);

  const programmesSTR = JSON.stringify(programmes);
  saveProgrammes(programmesSTR);
};

export const createProgramme = async (programme) => {
  console.log(programme);
  const college = await College.findOne({ code: programme.collegeCode });
  const newProgramme = await new Programme({
    ...programme,
    college: college.id,
  }).save();
  await College.findOneAndUpdate(
    { code: programme.collegeCode },
    { $push: { programmes: newProgramme.id }, $inc: { programmesCount: 1 } }
  );
};
