import Programme from "../../models/Programme";

export const createProgrammes = () => {
  const programmes = [
    // --------------------------------------------------
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
      // removed from ignou website
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

    // --------------------------------------------------
    // M.Phil Programme, 11

    // page-1, 1-10
    {
      code: "MPHILCHEM",
      name: "MPHIL in Chemistry",
    },
    {
      code: "MPHILCOM",
      name: "Master of Philosophy in Commerce",
    },
    {
      code: "MPHILEC",
      name: "M.Phil in Economics",
    },
    {
      code: "MPHILGEOG",
      name: "M.Phil in Geography",
    },
    {
      code: "MPHILJMC",
      name: "Master of Philosophy in Journalism and Mass Communication",
    },
    {
      code: "MPHILTH",
      name: "Master of Philosophy in Theatre Arts",
    },
    {
      code: "MPHILPS",
      name: "Master of Philosophy in Political Science",
    },
    {
      code: "MPHILSO",
      name: "Master of Philosophy in Sociology",
    },
    {
      code: "MPHILSW",
      name: "Master of Philosophy in Social Work",
    },
    {
      code: "MPHIL",
      name: "M.Phil in Distance Education",
      // removed from ignou website
    },
    // page-2, 11-11
    {
      code: "MPHILTT",
      name: "Master of Philosophy in Translation Studies",
    },

    // --------------------------------------------------
    // Master's Degree, 44

    // page-1, 1-10
    {
      code: "MPB",
      name: "Master of Business Administration (Banking & Finance)",
    },
    {
      code: "MBA",
      name: "Master of Business Administration",
    },
    {
      code: "MCom",
      name: "Master of Commerce",
    },
    {
      code: "MCom (BP & CG)",
      name: "Master of Commerce in Business Policy and Corporate Governance",
    },
    {
      code: "MCA",
      name: "Master of Computer Applications (Jan 2005 to July 2020 admission cycle)",
    },
    {
      code: "MCA_NEW",
      name: "Master of Computer Applications (January 2021 admission cycle and Onward)",
    },
    {
      code: "MSCDFSM",
      name: "Master of Science (Food and Nutrition)",
    },
    {
      code: "MEC",
      name: "Master of Arts (Economics)",
    },
    {
      code: "MADE",
      name: "MA in Distance Education",
    },
    {
      code: "MEd",
      name: "Master of Education",
      // (As per NCTE Communication, 2014, M.Ed. programme ( in ODL) is not on offer at present)
    },
    // page-2, 11-20
    {
      code: "MAEDU",
      name: "Master of Arts (Education)",
    },
    {
      code: "MAAE",
      name: "Master of Arts in Adult Education",
    },
    {
      code: "MEG",
      name: "Master of Arts (English)",
    },
    {
      code: "MAEDS",
      name: "Master of Arts in Extension & Development Studies",
    },
    {
      code: "MADVS",
      name: "Master of Arts in Development Studies",
    },
    {
      code: "MCom (F&T)",
      name: "Master of Commerce in Finance & Taxation",
    },
    {
      code: "MAFCS",
      name: "Master of Arts (MA in Folklore and Culture Studies)",
    },
    {
      code: "MAGPS",
      name: "Master of Arts in Gandhi and Peace Studies",
    },
    {
      code: "MAGD",
      name: "MA in Gender and Development Studies",
    },
    {
      code: "MAWGS",
      name: "Master of Arts in Women's and Gender Studies",
    },
    // page-3, 21-30
    {
      code: "MHD",
      name: "Master of Arts (Hindi)",
    },
    {
      code: "MAH",
      name: "Master of Arts (History)",
    },
    {
      code: "MHA",
      name: "Master of Science (Hospitality Administration)",
    },
    {
      code: "MSK",
      name: "Master of Arts (Sanskrit)",
    },
    {
      code: "MUR",
      name: "Master of Arts (Urdu)",
      // removed from ignou website
    },
    {
      code: "MHD Online",
      name: "Master of Arts (Hindi) Online",
    },
    {
      code: "MSCENV",
      name: "Master of Science (Environmental Science)",
    },
    {
      code: "MAPY",
      name: "Master of Arts (Philosophy)",
    },
    {
      code: "MAJMC",
      name: "Master of Arts in Journalism and Mass Communication",
    },
    {
      code: "MLIS",
      name: "Master of Library and Information Science",
    },
    // page-4, 31-40
    {
      code: "MCom (MA & FS)",
      name: "Master of Commerce in Management Accounting & Financial Strategies",
    },
    {
      code: "MACS",
      name: "Mathematics with Applications in Computer Science",
    },
    {
      code: "MPS",
      name: "Master of Arts (Political Science)",
    },
    {
      code: "MAPC",
      name: "MA in Psychology",
    },
    {
      code: "MPA",
      name: "Master of Arts (Public Administration)",
    },
    {
      code: "MA(RD)",
      name: "Master of Arts (Rural Development)",
    },
    {
      code: "MSCCFT",
      name: "Master of Science (Counselling and Family Therapy)",
    },
    {
      code: "MAAN",
      name: "Masters in Anthropology",
    },
    {
      code: "MSW",
      name: "Master of Social Work",
    },
    {
      code: "MSWC",
      name: "Master of Social Work (Counselling)",
    },
    // page-5, 41-44
    {
      code: "MSO",
      name: "Master of Arts (Sociology)",
    },
    {
      code: "MADEdep",
      name: "MA in Distance Education",
      // removed from ignou website
    },
    {
      code: "MTTM",
      name: "Master of Tourism & Travel Management",
    },
    {
      code: "MATS",
      name: "MA in Translation Studies",
    },

    // --------------------------------------------------
    // Bachelor's Degree, 31

    // page-1, 1-10
  ];

  Programme.insertMany(schools, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Programmes created");
    }
  });
};
