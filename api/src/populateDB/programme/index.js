import { Discipline } from "../../constants/types";
// import Course from "../../models/Course";
// import Programme from "../../models/Programme";
import { getProgrammes, saveProgrammes } from "./programme";

const getImage = (programme) =>
  `https://ignou-app-1.s3.ap-south-1.amazonaws.com/images/programme/${programme.code.toLowerCase()}.jpeg`;

export const createProgrammes = () => {
  const programmes = getProgrammes();
  for (let programme of programmes) {
    if (!programme.code || !programme.title) {
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
  if (programme.programmeStructure && programme.cbcs) {
    const courses1 = programme.programmeStructure;
    const courses2 = programme.courses2;
    for (let course1 of courses1) {
      for (let course2 of courses2) {
        if (course1.courseCode === course2.courseCode) {
          course1.discipline = course2.discipline;
          break;
        }
      }
      if (!course1.discipline) {
        course1.discipline = Discipline.None;
      }
    }

    // console.log(programme.programmeStructure);
  }

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
