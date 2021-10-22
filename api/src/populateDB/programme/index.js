import Course from "../../models/Course";
import Programme from "../../models/Programme";
import { getProgrammes, saveProgrammes } from "./programme";

const getImage = (programme) =>
  `https://ignou-app-1.s3.ap-south-1.amazonaws.com/images/programme/${programme.code.toLowerCase()}.jpeg`;

export const createProgrammes = () => {
  const programmes = getProgrammes();
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
  // console.log(programme);
  if (programme.programmeStructure) {
    const newProgrammeStructure = [];

    for (let crs of programme.programmeStructure) {
      // avoid duplicates by converting BCS-001 ---> BCS-1
      const newCourseCode = crs.courseCode.replace(/([A-Z]+-)(0+)([1-9]+)/, "$1$3");

      const course = await Course.findOne({ code: newCourseCode });
      if (!course) {
        console.log("Error: couldn't find course with code:", newCourseCode, "\tAborting programme:", programme.code);
        continue;
      }
      newProgrammeStructure.push({ ...{ ...crs, courseCode: newCourseCode }, course: course.id });
    }

    programme = { ...programme, programmeStructure: newProgrammeStructure };
    // console.log("finalProgramme: ", programme);
  }

  const newProgramme = await new Programme({
    code: programme.code,
    title: programme.title,
    totalCredits: programme.totalCredits,
    programmeStructure: programme.programmeStructure,
    eligibility: programme.eligibility,
    mediumOfInstruction: programme.mediumOfInstruction,
    duration: programme.duration,
    feeStructure: programme.feeStructure,
    degree: programme.degree,
    termType: programme.termType,
    termsCount: programme.termsCount,
    image: getImage(programme),
  }).save();
};
