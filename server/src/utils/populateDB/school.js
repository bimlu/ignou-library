import School from "../../models/School";

export const createSchools = () => {
  const schools = [
    // first column as per ignou website
    {
      code: "SOA",
      name: "School of Agriculture",
      shortIntro:
        "Offering a large variety of job-related coursesin agriculture, like Dairy Technology, Plantation Management",
    },
    {
      code: "SOE",
      name: "School of Education",
      shortIntro:
        "The first school of IGNOU, conducting courses in different realms of education and training",
    },
    {
      code: "SOFL",
      name: "School of Foreign Languages",
      shortIntro:
        "Offering PhD to certificate courses in Arabic, German, Japanese, Spanish and Persian",
    },
    {
      code: "SOH",
      name: "School of Humanities",
      shortIntro:
        "Among the earliest schools, comprising the disciplines of English and Hindi and a Translation Cell",
    },
    {
      code: "SOL",
      name: "School of Law",
      shortIntro:
        "Providing insight into new-age legal issues: Patent pracitices, cyber law, human rights",
    },
    {
      code: "SOS",
      name: "School of Science",
      shortIntro:
        "Offering doctoral to certificate programmes in various science disciplines",
    },
    {
      code: "SOTHSM",
      name: "School of Tourism and Hospitality Servies Management",
      shortIntro: "Offering job-related courses",
    },

    // second column
    {
      code: "SOCIS",
      name: "School of Computer and Information Sciences",
      shortIntro:
        "Disseminating computer sciences knowledge through innovative means",
    },
    {
      code: "SOET",
      name: "School of Engineering & Technology",
      shortIntro:
        "With a range of programmes: From Civil Engineering toShoe Upper Cutting",
    },
    {
      code: "SOGDS",
      name: "School of Gender and Development",
      shortIntro: "Sensitising learners about gender and related issues",
    },
    {
      code: "SOITS",
      name: "School of Inter-Disciplinary and Trans-Disciplinary Studies",
      shortIntro:
        "Provides enabling space for interdisciplinary academic studies and research",
    },
    {
      code: "SOMS",
      name: "School of Management Studies",
      shortIntro:
        "The Management Programmes offered by the School currently consists of 65 courses. In the Commerce Discipline the School offers 46 courses.",
    },
    {
      code: "SOSS",
      name: "School of Social Sciences",
      shortIntro:
        "Offering programmes in disciplines like Economics, History, Political Science and Public Administration",
    },
    {
      code: "SOTST",
      name: "School of Translation Studies and Training",
      shortIntro:
        "Fostering an environment of translation and enriching Indian literary tradition",
    },

    // third column
    {
      code: "SOCE",
      name: "School of Continuing Education",
      shortIntro:
        "With focus on rural development, women and child development youth, disability, nutritionand health",
    },
    {
      code: "SOEDS",
      name: "School of Extension and Development Studies",
      shortIntro:
        "Enhancing learners’ understanding inlivelihoodand empowerment studies",
    },
    {
      code: "SOHS",
      name: "School of Health Sciences",
      shortIntro:
        "Providing in-service training for medical, nursing, paramedical and allied personnel through distance mode",
    },
    {
      code: "SOJNMS",
      name: "School of Journalism and New Media",
      shortIntro:
        "Initiating journalism aspirants into the rigours ofprint, electronic media",
    },
    {
      code: "SOPVA",
      name: "School of Perfoming and Visual Arts",
      shortIntro:
        "Imparting aestheticsensitivity through Music, Dance, Theatre and Visual Arts",
    },
    {
      code: "SOSW",
      name: "School of Social Work",
      shortIntro:
        "Offering distance programmes, as well as a regular programme with focus on family education, HIV/ AIDS",
    },
    {
      code: "SOVET",
      name: "School of Vocational Education and Training",
      shortIntro:
        "Focusing on skill development of Indian youth through vocational programmes",
    },
  ];

  School.insertMany(schools, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Schools created");
    }
  });
};
