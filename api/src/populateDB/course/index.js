import College from "../../models/College";
import Course from "../../models/Course";
// import Programme from "../../models/Programme";
import { getCourses, getCourses2, saveCourses } from "./courses";

export const createCourses = () => {
  const courses = getCourses();
  // console.log(courses);

  // Course.insertMany(courses, (err, docs) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Courses created");
  //   }
  // });

  for (let course of courses) {
    if (!course.code || !course.title) {
      console.log("Bad course: ", course);
      continue;
    }
    createCourse(course);
  }

  console.log("Number of courses: ", courses.length);

  const coursesSTR = JSON.stringify(courses);
  saveCourses(coursesSTR);
};

export const createCourses2 = () => {
  const courses = getCourses2();

  for (let courseCode in courses) {
    // console.log("creating", courseCode, "...");
    createCourse2(courseCode, courses);
  }
  console.log("Number of courses: ", Object.keys(courses).length);
};

export const createCourse2 = async (courseCode, courses) => {
  const college = await College.findOne({ code: "IGNOU" });
  const allDupCourses = courses[courseCode];
  const firstCourse = allDupCourses[0];
  // if (!firstCourse) {
  //   console.log("not firstCourse");
  //   return;
  // }
  const [courseName, courseLink, blocks] = firstCourse;
  if (!courseName) {
    console.log("No courseName found for", courseCode, "using '?' as default");
  }
  // if (!courseName || !courseLink || !blocks) {
  //   console.log("not course(name|link|blocks)");
  //   return;
  // }

  const courseBlocks = [];
  for (let block of blocks) {
    const courseBlock = {
      blockCode: block[0],
      blockName: block[1],
      blockLink: block[2],
    };
    const units = block[3];
    const blockUnits = [];
    for (let unit of units) {
      const blockUnit = {
        unitCode: unit[0],
        unitName: unit[1],
        unitLink: unit[2],
        unitDownloadLink: unit[3],
      };
      blockUnits.push(blockUnit);
    }
    courseBlock["blockUnits"] = blockUnits;
    courseBlocks.push(courseBlock);
  }
  // console.log(courseBlocks);

  const oldQuestionPapers = [
    `https://ignou-app-1.s3.ap-south-1.amazonaws.com/question-paper/dec-2020/${courseCode}.pdf`,
    `https://ignou-app-1.s3.ap-south-1.amazonaws.com/question-paper/jun-2020/${courseCode}.pdf`,
    `https://ignou-app-1.s3.ap-south-1.amazonaws.com/question-paper/dec-2019/${courseCode}.pdf`,
    `https://ignou-app-1.s3.ap-south-1.amazonaws.com/question-paper/jun-2019/${courseCode}.pdf`,
  ];

  const newCourse = {
    code: courseCode,
    title: courseName || "?",
    courseLink: courseLink,
    courseBlocks: courseBlocks,
    questionPapers: oldQuestionPapers,
    image: "https://ignou-app-1.s3.ap-south-1.amazonaws.com/demo-images/street.jpg",
    college: college.id,
    blocksCount: courseBlocks.length,
  };

  // console.log(newCourse);

  await new Course(newCourse).save();
};

export const createCourse = async (course) => {
  // console.log(course);
  const college = await College.findOne({ code: course.collegeCode });
  // const programme = await Programme.findOne({ code: course.programmeCode });
  // if (!college || !programme) {
  //   console.log(course);
  //   return;
  // }
  const newCourse = await new Course({
    ...course,
    college: college.id,
    image: "https://ignou-app-1.s3.ap-south-1.amazonaws.com/demo-images/street.jpg",
    // programme: programme.id,
  }).save();
  // await Programme.findOneAndUpdate(
  //   { code: course.programmeCode },
  //   { $push: { courses: newCourse.id }, $inc: { coursesCount: 1 } }
  // );
};
