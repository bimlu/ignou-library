// import Course from "../../../models/Course";
import { getCourses, saveCourses } from "./courses";

export const createCourses = () => {
  const courses = getCourses();
  console.log(courses);
  const coursesJSON = JSON.stringify(courses);
  saveCourses(coursesJSON);
  // saveCourses(new Buffer(courses.toString()));
  // Course.insertMany(courses, (err, docs) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Courses created");
  //   }
  // });
};
