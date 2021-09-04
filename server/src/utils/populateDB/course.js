import Course from "../../models/Course";

const createCourses = () => {
  const courses = [
    {
      code: "CSC101",
      title: "Introduction to Computer Science",
      category: "compulsory",
      creadits: 4,
      programmes: ["BSc", "MSc"],
    },
    {
      code: "CSC101",
      title: "Introduction to Computer Science",
      category: "compulsory",
      creadits: 4,
      programmes: ["BSc", "MSc"],
    },
    {
      code: "CSC101",
      title: "Introduction to Computer Science",
      category: "compulsory",
      creadits: 4,
      programmes: ["BSc", "MSc"],
    },
  ];
  Course.bulkCreate(courses);
};
