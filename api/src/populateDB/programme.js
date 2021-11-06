import programmeAssignments from "../data/assignment/programme2.json";
import { getProgrammes, saveProgrammes } from "../data/programme";
import Course from "../models/Course";
import Programme from "../models/Programme";

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
    }

    console.log(programme.programmeStructure);
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
  } else {
    programme = { ...programme, programmeStructure: [] };
  }

  let assignment = {};
  let assignmentTermwise = {};
  for (let programmeAssignment in programmeAssignments) {
    if (programme.code === programmeAssignment) {
      let assignmentInfo = programmeAssignments[programmeAssignment];
      if (Array.isArray(assignmentInfo)) {
        // assignment
        if (assignmentInfo.includes("main")) {
          assignment.main = `https://ignou-app-1.s3.ap-south-1.amazonaws.com/assignment/jul-2021/programme/${programme.code}.pdf`;
        }
        if (assignmentInfo.includes("hindi")) {
          assignment.hindi = `https://ignou-app-1.s3.ap-south-1.amazonaws.com/assignment/jul-2021/programme/${programme.code}_H.pdf`;
        }
      } else {
        // termwise assignment
        if ("main" in assignmentInfo) {
          assignmentTermwise.main = [];
          for (let term of assignmentInfo.main) {
            assignmentTermwise.main.push({
              term: term,
              url: `https://ignou-app-1.s3.ap-south-1.amazonaws.com/assignment/jul-2021/programme/${programme.code}__${term}.pdf`,
            });
          }
        }
        if ("hindi" in assignmentInfo) {
          assignmentTermwise.hindi = [];
          for (let term of assignmentInfo.hindi) {
            assignmentTermwise.hindi.push({
              term: term,
              url: `https://ignou-app-1.s3.ap-south-1.amazonaws.com/assignment/jul-2021/programme/${programme.code}__${term}_H.pdf`,
            });
          }
        }
      }
    }
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
    coursesCount: programme.programmeStructure.length,
    cbcs: programme.cbcs || false,
    disciplines: programme.disciplines || [],
    assignment: assignment,
    assignmentTermwise: assignmentTermwise,
    present: {
      assignment:
        assignment.main ||
        assignment.hindi ||
        (assignmentTermwise.main && assignmentTermwise.main.length > 0) ||
        (assignmentTermwise.hindi && assignmentTermwise.hindi.length > 0)
          ? true
          : false,
    },
  }).save();
};
