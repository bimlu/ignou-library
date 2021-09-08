import { courses } from "./course_list";

export const createCourses = () => {
  Course.insertMany(courses, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Courses created");
    }
  });
};
