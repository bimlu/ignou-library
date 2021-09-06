import Course from "../../models/Course";

const createCourses = () => {
  const courses = [
    // ------------------------------------------
    // School of Management Studies, 99

    {
      // 1
      code: "MS-1",
      title: "Management Functions and Behaviour",
    },
    {
      // 2
      code: "MS-2",
      title: "Management of Human Resources",
    },
    {
      // 3
      code: "MS-3",
      title: "Economic and Social Environment",
    },
    {
      // 4
      code: "MS-4",
      title: "Accounting and Finance for Managers",
    },
    {
      // 5
      code: "MS-5",
      title: "Management of Machines and Materials",
    },
    {
      // 6
      code: "MS-6",
      title: "Marketing for Managers",
    },
    {
      // 7
      code: "MS-7",
      title: "Information Systems for Managers",
    },
    {
      // 8
      code: "MS-8",
      title: "QuantitativeAnalysis for ManagerialApplications",
    },
    {
      // 9
      code: "MS-9",
      title: "Managerial Economics",
    },
    {
      // 10
      code: "MS-10",
      title: "Organization Design, Development and Change",
    },
    {
      // 11
      code: "MS-11",
      title: "Strategic Management",
    },
    {
      // 12
      code: "MS-21",
      title: "Social Processes and Behavioural Issues",
    },
    {
      // 13
      code: "MS-22",
      title: "Human Resource Development",
    },
    {
      // 14
      code: "MS-24",
      title: "Human Resource Planning",
    },
    {
      // 15
      code: "MS-",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
    {
      //
      code: "",
      title: "",
    },
  ];

  Course.insertMany(courses, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Courses created");
    }
  });
};
