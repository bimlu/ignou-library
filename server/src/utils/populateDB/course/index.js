// import Course from "../../../models/Course";
import { getCourses } from "./courses";

export const createCourses = () => {
  const courses = getCourses();

  console.log(courses);

  // Course.insertMany(courses, (err, docs) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Courses created");
  //   }
  // });
};
