import College from "../../models/College";
import Course from "../../models/Course";
import Programme from "../../models/Programme";
import { getCourses, saveCourses } from "./courses";

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

export const createCourse = async (course) => {
  // console.log(course);
  const college = await College.findOne({ code: course.collegeCode });
  const programme = await Programme.findOne({ code: course.programmeCode });
  // if (!college || !programme) {
  //   console.log(course);
  //   return;
  // }
  const newCourse = await new Course({
    ...course,
    college: college.id,
    programme: programme.id,
  }).save();
  await Programme.findOneAndUpdate(
    { code: course.programmeCode },
    { $push: { courses: newCourse.id }, $inc: { coursesCount: 1 } }
  );
};
