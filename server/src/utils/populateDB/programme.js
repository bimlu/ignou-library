import Programme from "../../models/Programme";

export const createProgrammes = () => {
  const programmes = [
    // Doctoral Degree, 41
    // page-1, 1-10
    {
      code: "PHDDR",
      name: "Ph.D in Dairy Science and Technology",
    },
    {
      code: "PHDAN",
      name: "Doctor of Philosophy in Anthropology",
    },
    {
      code: "PHDBC",
      name: "Doctor of Philosophy in Biochemistry",
    },
    {
      code: "PHDCHE",
      name: "Doctor of Philosophy in Chemistry",
    },
    {
      code: "PHDCOM",
      name: "Doctor of Philosophy in Commerce",
    },
    {
      code: "PHDCS",
      name: "Doctor of Philosophy Computer Science",
    },
    {
      code: "PHDEC",
      name: "Doctor of Philosophy in Economics",
    },
    {
      code: "PHDENG",
      name: "Doctor of Philosophy in English",
    },
    {
      code: "PHDDV",
      name: "Doctor of Philosophy in Development Studies",
    },
    {
      code: "PHDFN",
      name: "Doctor of Philosophy in Food & Nutrition",
    },
    // page-2, 11-20
    {
      code: "PHDGD",
      name: "PhD in Gender and Development Studies",
    },
    {
      code: "PHDWS",
      name: "PhD in Women's Studies",
    },
    {
      code: "PHDGEOG",
      name: "Doctor of Philosophy in Geography",
    },
    {
      code: "PHDHIN",
      name: "Doctor of Philosophy in Hindi",
    },
    {
      code: "PHDHIS",
      name: "Doctor of Philosophy in History",
    },
    {
      code: "PHDEV",
      name: "Doctor of Philosophy in Environmental Studies",
    },
    {
      code: "PHDITS",
      name: "Doctor of Philosophy in Inter-disciplinary and Trans-disciplinary Studies",
    },
    {
      code: "PHDJMC",
      name: "Doctor of Philosophy in Journalism & Mass Communication",
    },
    {
      code: "PHDLIS",
      name: "Doctor of Philosophy in Library & Information Science",
    },
    {
      code: "PHDMGMT",
      name: "Doctor of Philosophy in Management",
    },
    // page-3, 21-30
    {
      code: "PHDMT",
      name: "Doctor of Philosophy in Mathematics",
    },
    {
      code: "PHDNS",
      name: "Doctor of Philosophy in Nursing",
    },
    {
      code: "PHDVPA",
      name: "Doctor of Philosophy Performing and Visual Arts with specialization in Fine Arts, Theatre Arts and Music",
    },
    {
      code: "PHDLE",
      name: "Doctor of Philosophy in Law",
    },
    {
      code: "PHDLS",
      name: "Doctor of Philosophy in Life Sciences",
    },
    {
      code: "PHDPH",
      name: "Doctor of Philosophy in Physics",
    },
    {
      code: "PHDPS",
      name: "Doctor of Philosophy in Political Science",
    },
    {
      code: "PHDES",
      name: "Doctor of Philosophy in Education",
    },
    {
      code: "PHDPC",
      name: "Doctor of Philosophy in Psychology",
    },
    {
      code: "PHDPA",
      name: "Doctor of Philosophy in Public Administration",
    },
    // page-4, 31-40
    {
      code: "PHDRD",
      name: "Doctor of Philosophy in Rural Development",
    },
    {
      code: "PHDAL",
      name: "Ph D in Arabic",
    },
    {
      code: "PHDFL",
      name: "Ph D in French",
    },
    {
      code: "PHDGY",
      name: "Doctor of Philosophy in Geology",
    },
    {
      code: "PHDSW",
      name: "Doctor of Philosophy in Social Work",
    },
    {
      code: "PHDSOC",
      name: "Doctor of Philosophy in Sociology",
    },
    {
      code: "PHD",
      name: "Ph.D in Distance Education",
      // missing from ignou website
    },
    {
      code: "PHDSTAT",
      name: "Doctor of Philosophy in Statistics",
    },
    {
      code: "PHDTS",
      name: "Doctor of Philosophy in Tourism and Hospitality",
    },
    {
      code: "PHDTT",
      name: "Doctor of Philosophy in Translation Studies",
    },
    // page-5, 41-41
    {
      code: "PHDVET",
      name: "Doctor of Philosophy in Vocational Education",
    },
  ];

  Programme.insertMany(schools, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Programmes created");
    }
  });
};
