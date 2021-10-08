import { exit } from "process";
import College from "../../models/College";
import Course from "../../models/Course";
// import Programme from "../../models/Programme";
import { getCourses, saveCourses } from "./courses";
import coursesData from "./organized_units.json";

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
    if (!course.name || !course.fullName) {
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
  const courses = coursesData;
  // console.log(courses);
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
    console.log(courseCode, allDupCourses, "No courseName found!");
    return;
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
      };
      blockUnits.push(blockUnit);
    }
    courseBlock["blockUnits"] = blockUnits;
    courseBlocks.push(courseBlock);
  }
  // console.log(courseBlocks);

  const newCourse = {
    college: college.id,
    image: "https://ignou-app-1.s3.ap-south-1.amazonaws.com/demo-images/street.jpg",
    collegeCode: "IGNOU",
    programmeCode: "BAG",
    term: 1,
    code: courseCode,
    name: courseCode,
    title: courseName,
    fullName: courseName,
    courseLink: courseLink,
    courseBlocks: courseBlocks,
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
