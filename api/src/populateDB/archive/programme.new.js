import Programme from "../../models/Programme";

export const createProgrammes = () => {
  const programmes = [
    {
      code: "BAG",
      name: "Bachelor of Arts",
      school: "",
      level: "bachelorsDegree",
      disciplines: [
        "Anthropology",
        "Economics",
        "History",
        "Politicalscience",
        "Psychology",
        "Public administration",
        "Sociology",
        "Mathematics",
        "Hindi",
        "Urdu",
        "English",
        "Sanskrit",
        "Education",
        "Philosophy",
      ],
      objectives: [
        `The Bachelors of Arts programme is a broad based programme with a mix of disciplinary,
        interdisciplinary and skill based courses. It has the following objectives:`,

        `Introduce the learners to the main themes and topics of disciplines in humanities, social sciences and
        sciences,`,

        `Provide the learners with the information and skills necessary to understand and analyse their world`,

        `Enable the learners to work towards ability and skill enhancement through exposure to appropriate courses`,

        `Impart reading and writing skills through assignments and exercises of such kind at an undergraduate level`,

        `Expose the learner to the importance of interdisciplinarity`,
      ],
      eligibility: "10+2 or its equivalent",
      mediumOfInstruction: "English & Hindi",
      duration: "Minimum 3 years and Maximum 6 years; offered in both January and July cycle of admission.",
      feeStructure: `For B.A. Rs. 9,900/- for full programme to be paid year wise @ Rs. 3,300/- per year. Fee to be
        paid in 1st year, including Registration Fee of Rs.200/- Is Rs.3,500/- `,
      categories: [
        ["CC", "Core Courses"],
        ["DSE", "Discipline Specific Electives"],
        ["AECC", "Ability Enhancement Compulsory Courses"],
        ["SEC", "Skill Enhancement Courses"],
        ["GE", "Generic Electives"],
      ],
      courses: [
        // [courseCode, courseTitle, discipline, category, credit]
        // --------------------------------
        // CC, Core Courses, 72
        ["BANC 131", "Anthropology and Research Methods", "Anthropology", "CC", "6"],
        ["BANC 132", "Fundamentals of Biological Anthropology", "Anthropology", "CC", "6"],
        ["BANC 133", "Fundamentals of Social and Cultural Anthropology", "Anthropology", "CC", "6"],
        ["BANC 134", "Fundamentals of Archaeological Anthropology", "Anthropology", "CC", "6"],

        ["BECC 131", "Principles of Microeconomics-I ", "Economics", "CC", "6"],
        ["BECC 132", "Principles of Microeconomics-II", "Economics", "CC", "6"],
        ["BECC 133", "Principles of Macroeconomics-I", "Economics", "CC", "6"],
        ["BECC 134", "Principles of Macroeconomics-II", "Economics", "CC", "6"],

        ["BHIC 131", "History of India from the Earliest Times upto c. 300 CE", "History", "CC", "6"],
        ["BHIC 132", "History of India from c.300 to 1206", "History", "CC", "6"],
        ["BHIC 134", "History of India from c.1206 to 1707", "History", "CC", "6"],
        ["BHIC 134", "History of India from c. 1707 to 1950", "History", "CC", "6"],

        ["BPSC 131", "Introduction to Political Theory", "Political Science", "CC", "6"],
        ["BPSC 132", "Indian Government and Politics", "Political Science", "CC", "6"],
        ["BPSC 133", "Comparative Government and Politics", "Political Science", "CC", "6"],
        ["BPSC 134", "Introduction to International Relations", "Political Science", "CC", "6"],

        ["BPCC 131", "Foundations of Psychology", "Psychology", "CC", "6"],
        ["BPCC 132", "Introduction to Social Psychology", "Psychology", "CC", "6"],
        ["BPCC 133", "Psychological Disorders", "Psychology", "CC", "6"],
        ["BPCC 134", "Statistical Methods and Psychological Research", "Psychology", "CC", "6"],

        ["BPAC 131", "Perspectives on Public Administration", "Public Administration", "CC", "6"],
        ["BPAC 132", "Administrative Thinkers", "Public Administration", "CC", "6"],
        ["BPAC 133", "Administrative system at Union Level", "Public Administration", "CC", "6"],
        ["BPAC 134", "Administrative system at State and District Levels", "Public Administration", "CC", "6"],

        ["BSOC 131", "Introduction to Sociology", "Sociology", "CC", "6"],
        ["BSOC 132", "Sociology of India", "Sociology", "CC", "6"],
        ["BSOC 133", "Sociological Theories", "Sociology", "CC", "6"],
        ["BSOC 134", "Methods of Sociological Enquiry", "Sociology", "CC", "6"],

        ["BHDC 131", "�हंद�सा�हत्यकाइ�तहास", "Hindi", "CC", "6"],
        ["BHDC 132", "मध्यकाल�न�हंद�क�वता", "Hindi", "CC", "6"],
        ["BHDC 133", "आधु�नक�हंद�क�वता", "Hindi", "CC", "6"],
        ["BHDC 134", "�हंद�गद्यसा�हत्य", "Hindi", "CC", "6"],
        ["BHDLA 135", "�हंद�भाषा : �व�वधप्रयोग", "Hindi", "CC", "6"],
        ["BHDLA 136", "�हंद�भाषा : लेखनकौशल", "Hindi", "CC", "6"],
        ["BHDLA 137", "�हंद�भाषा : संप्रेषाकौशल", "Hindi", "CC", "6"],
        ["BHDLA 138", "�हंद�सा�हत्य : �व�वध�वधाएँ", "Hindi", "CC", "6"],

        ["BUDC 131", "Study of Prose & Poetic Form in Urdu", "Urdu", "CC", "6"],
        ["BUDC 132", "Study of Urdu Classical Ghazal ", "Urdu", "CC", "6"],
        ["BUDC 133", "Origin & Development of Urdu Language", "Urdu", "CC", "6"],
        ["BUDC 134", "Study of Urdu Nazm", "Urdu", "CC", "6"],
        ["BUDLA 135", "Study of Modern Urdu Prose & Poetry", "Urdu", "CC", "6"],

        ["BEGC 131", "Individual & Society", "English", "CC", "6"],
        ["BEGC 132", "Selections From Indian Writing: Cultural Diversity", "English", "CC", "6"],
        ["BEGC 133", "British Literature", "English", "CC", "6"],
        ["BEGC 134", "Reading The Novel", "English", "CC", "6"],
        ["BEGLA 135", "English In Daily Life", "English", "CC", "6"],
        ["BEGLA 136", "English At The Work Place", "English", "CC", "6"],
        ["BEGLA 137", "Language Through Literature", "English", "CC", "6"],
        ["BEGLA 138", "Reading and Speaking Skills", "English", "CC", "6"],

        ["BSKC 131", "संस्कृत पद्य सा�हत्य", "Sanskrit", "CC", "6"],
        ["BSKC 132", "संस्कृत गद्य सा�हत्य", "Sanskrit", "CC", "6"],
        ["BSKC 133", "संस्कृत नाटक", "Sanskrit", "CC", "6"],
        ["BSKC 134", "संस्कृत व्याकरण", "Sanskrit", "CC", "6"],
        ["BSKLA 135", "संस्कृत सा�हत्य एवं व्याकरण", "Sanskrit", "CC", "6"],

        ["BODLA 135", "Modern Indian Language: Odia", "Odia", "CC", "6"],

        ["BGULA 135", "Modern Indian Language: Gujarati", "Gujrati", "CC", "6"],

        ["BMYLA 135", "Modern Indian Language: Malayalam", "Malayalam", "CC", "6"],

        ["BPBLA", "Modern Indian Language: Punjabi", "Punjabi", "CC", "6"],

        ["BMTC 131", "Calculus", "Mathematics", "CC", "6"],
        ["BMTC 132", "Differential Equations", "Mathematics", "CC", "6"],
        ["BMTC 133", "Real Analysis", "Mathematics", "CC", "6"],
        ["BMTC 134", "Algebra", "Mathematics", "CC", "6"],

        ["BESC 131", "Education: Concept, Nature and Perspectives", "Education", "CC", "6"],
        ["BESC 132", "Structure and Management of Education", "Education", "CC", "6"],
        ["BESC 133", "Curriculum, Teaching-Learning and Assessment", "Education", "CC", "6"],
        ["BESC 134", "Education as a Practice", "Education", "CC", "6"],

        ["BPYC 131", "Indian Philosophy", "Philosophy", "CC", "6"],
        ["BPYC 132", "Ethics", "Philosophy", "CC", "6"],
        ["BPYC 133", "Logic", "Philosophy", "CC", "6"],
        ["BPYC 134", "Western Philosophy: Modern", "Philosophy", "CC", "6"],

        // ------------------------------
        // DSE, Discipline Specific Electives
        ["BANE 145", "Applied Anthropology ", "Anthropology", "DSE", "6"],
        ["BANE 146", "Anthropology of Indigenous People", "Anthropology", "DSE", "6"],

        ["BECE 145", "Indian Economy – I", "Economics", "DSE", "6"],
        ["BECE 146", "Indian Economy – II", "Economics", "DSE", "6"],

        ["BHIE 141", "History of China: C. 1840-1978", "History", "DSE", "6"],
        ["BHIE 142", "History of Modern East Asia: Japan (1868-1945)", "History", "DSE", "6"],
        ["BHIE 143", "History of Environment", "History", "DSE", "6"],
        ["BHIE 144", "Traditions of History Writing in India", "History", "DSE", "6"],
        ["BHIE 145", "Some aspects of European History: C. 1789 – 1945", "History", "DSE", "6"],

        ["BPSE 141", "Gandhi and the Contemporary World", "Political Science", "DSE", "6"],
        ["BPSE 142", "India’s Foreign Policy in a Changing World", "Political Science", "DSE", "6"],
        ["BPSE 143", "State Politics in India", "Political Science", "DSE", "6"],
        ["BPSE 144", "Introduction to South Asia", "Political Science", "DSE", "6"],
        ["BPSE 145", "Democracy and Development in Northeast India", "Political Science", "DSE", "6"],
        ["BPSE 146", "Conflict Resolution and Peace building", "Political Science", "DSE", "6"],

        ["BPCE 145", "Counselling Psychology", "Psychology", "DSE", "6"],
        ["BPCE 146", "Industrial/ Organisational Psychology", "Psychology", "DSE", "6"],

        ["BPAE 141", "Right to Information", "Public Administration", "DSE", "6"],
        ["BPAE 142", "Organisational Behaviour", "Public Administration", "DSE", "6"],
        ["BPAE 143", "Administrative System in BRICS", "Public Administration", "DSE", "6"],
        ["BPAE 144", "Social Policies and Administration", "Public Administration", "DSE", "6"],

        ["BSOE 145", "Religion and Society", "Sociology", "DSE", "6"],
        ["BSOE 146", "Marriage, Family and Kinship", "Sociology", "DSE", "6"],
        ["BSOE 148", "Social Stratification", "Sociology", "DSE", "6"],

        ["BHDE 141", "अिस्मतामूलक �वमशर् और �हंद� सा�हत्य", "Hindi", "DSE", "6"],
        ["BHDE 142", "राष्ट्र�य काव्यधारा", "Hindi", "DSE", "6"],
        ["BHDE 143", "प्रेमचंद", "Hindi", "DSE", "6"],
        ["BHDE 144", "छायावाद", "Hindi", "DSE", "6"],

        ["BUDE 141", "Study of Poet Mirza Ghalib", "Urdu", "DSE", "6"],
        ["BUDE 142", "Study of Prose Writer Meer Amman Dehlawi", "Urdu", "DSE", "6"],

        ["BEGE 141", "Understanding Prose", "English", "DSE", "6"],
        ["BEGE 142", "Understanding Drama", "English", "DSE", "6"],
        ["BEGE 143", "Understanding Poetry", "English", "DSE", "6"],
        ["BEGE 144", "Soft Skills", "English", "DSE", "6"],

        ["BSKE 141", "आयुव�द के मूल आधार", "Sanskrit", "DSE", "6"],
        ["BSKE 142", "रंगमंच और नाट्य कला", "Sanskrit", "DSE", "6"],

        ["BMTE 141", "Linear Algebra", "Mathematics", "DSE", "6"],
        ["BMTE 144", "Numerical Analysis", "Mathematics", "DSE", "6"],

        ["BESE 141", "ICT in Education", "Education", "DSE", "6"],
        ["BESE 142", "Lifelong Learning", "Education", "DSE", "6"],

        ["BPYE 141", "Metaphysics", "Philosophy", "DSE", "6"],
        ["BPYE 142", "Social and Political Philosophy", "Philosophy", "DSE", "6"],

        // ---------------------------------
        // AECC, Ability Enhancement Compulsory Course, 3
        ["BEVAE 181", "Environmental Studies", "", "AECC", "4"],
        ["BEGAE 182", "English Communication Skills", "", "AECC", "4"],
        ["BHDAE 182", "�हंद� भाषा और संप्रेषण", "", "AECC", "4"],

        // ---------------------------------
        // SEC, Skill Enhancement Courses
        ["BANS 183", "Tourism Anthropology", "Anthropology", "SEC", "4"],
        ["BANS 184", "Public Health and Epidemiology", "Anthropology", "SEC", "4"],

        ["BECS 184", "Data Analysis", "Economics", "SEC", "4"],

        ["BPCS 183", "Emotional Intelligence", "Psychology", "SEC", "4"],
        ["BPCS 184", "School Psychology", "Psychology", "SEC", "4"],
        ["BPCS 185", "Developing Emotional Competence", "Psychology", "SEC", "4"],
        ["BPCS 186", "Managing Stress", "Psychology", "SEC", "4"],
        ["BPCS 187", "Managing Human Resources", "Psychology", "SEC", "4"],
        ["BPCS 188", "Application of Social Psychology", "Psychology", "SEC", "4"],

        ["BPAS 184", "Logistics Management", "Public Administration", "SEC", "4"],
        ["BPAS 186", "Stress and Time Management", "Public Administration", "SEC", "4"],

        ["BSOS 184", "Techniques of Ethnographic Film Making", "Sociology", "SEC", "4"],
        ["BSOS 185", "Society through the Visual", "Sociology", "SEC", "4"],

        ["BHDS 183", "अनुवाद �सद्धांत और प्र�व�ध", "Hindi", "SEC", "4"],
        ["BHDS 184", "रे�डयो लेखन", "Hindi", "SEC", "4"],

        ["BEGS 183", "Writing And Study Skills", "English", "SEC", "4"],
        ["BEGS 185", "English Language Teaching", "English", "SEC", "4"],
        ["BEGS 186", "Business Communication", "English", "SEC", "4"],

        // -----------------------------------
        // GE, General Electives
        ["BGDG 172", "Gender Sensitization: Society and Culture", "Gender and Development", "GE", "6"],

        ["BPCG 171", "General Psychology", "Psychology", "GE", "6"],
        ["BPCG 172", "Youth, Gender and Identity", "Psychology", "GE", "6"],
        ["BPCG 173", "Psychology for Health andWell-being", "Psychology", "GE", "6"],
        ["BPCG 174", "Psychology and Media", "Psychology", "GE", "6"],
        ["BPCG 175", "Psychology for Living", "Psychology", "GE", "6"],
        ["BPCG 176", "Psychology of Gender", "Psychology", "GE", "6"],

        ["BPAG 171", "Disaster Management", "Public Administration", "GE", "6"],
        ["BPAG 172", "Governance: Issues and Challenges", "Public Administration", "GE", "6"],
        ["BPAG 173", "E-Governance", "Public Administration", "GE", "6"],
        ["BPAG 174", "Sustainable Development", "Public Administration", "GE", "6"],

        ["BSOG 171", "Indian Society: Images and Realities", "Sociology", "GE", "6"],
        ["BSOG 173", "Rethinking Development", "Sociology", "GE", "6"],
        ["BSOG 176", "Economy and Society", "Sociology", "GE", "6"],

        ["BHDG 173", "समाचार पत्र और फ�चर लेखन", "Hindi", "GE", "6"],

        ["BEGG 171", "Media and Communication Skills", "English", "GE", "6"],
        ["BEGG 172", "Language and Linguistics", "English", "GE", "6"],
        ["BEGG 173", "Academic Writing & Composition", "English", "GE", "6"],
        ["BEGG 174", "Creative Writing", "English", "GE", "6"],

        ["BABG 171", "Understanding Ambedkar", "Social Sciences", "GE", "6"],

        ["BPYG 171", "Applied Ethics", "Philosophy", "GE", "6"],
        ["BPYG 172", "Philosophy of Religion", "Philosophy", "GE", "6"],
      ],
    },
    {
      code: "BCOMG",
      name: "Bachelor of Commerce",
      school: "SOMS",
      level: "bachelorsDegree",
      objectives: [
        `The University offers Bachelor of Commerce Degree with the following Structure:`,

        `The main objective of the programme is to inculcate knowledge, skills and attitude amongst the learners to meet
        the challenges of various dimensions of business and commerce.`,

        `The programme focuses on the development of skills in the commerce domain areas and facilitates the employ ability as well as self-employ ability of the learners.`,

        `The programme aims at providing commerce education to the large number of learners located at different parts of the country including the far-flung areas and selected abroad centres. Commerce education is provided to the
        masses as well as the disadvantagedandmarginal groups of the society.`,

        `The multimedia and interactive teaching-learning system provides opportunity to acquire education at the door step, flexible time and space of the learner. Accessibility and flexibility are very important features of the programme which provide opportunity to large number of heterogeneous groups to acquire education through
        open and distance mode.`,

        `The programme aims at the development of analytical skills, financial and accounting skills as well as managerial skills.`,
      ],
      eligibility: "10+2 or its equivalent",
      mediumOfInstruction: " English & Hindi",
      duration: "Minimum 3 years and Maximum 6 years; offered in both January and July cycle of admission.",
      feeStructure: `Rs. 9,900/- for full programme to be paid year wise @Rs. 3,300/- per year. Fee to be paid in
        1st year, including Registration Fee of Rs.200/-is Rs.3,500/-. `,
      courses: [
        // [courseCode, courseTitle, credits, category]

        // --------------------------------------------
        // CC, Core Courses
        ["BCOC 131", "Financial Accounting", "6", "CC"],
        ["BCOC 132", "Business Organization and Management", "6", "CC"],
        ["BCOC 133", "Business Law", "6", "CC"],
        ["BCOC 134", "Business Mathematics and Statistics", "6", "CC"],
        ["BCOC 135", "Company Law", "6", "CC"],
        ["BCOC 136", "Income Tax Law and Practice", "6", "CC"],
        ["BCOC 137", "Corporate Accounting", "6", "CC"],

        // ---------------------------------------------
        // DSE, Discipline Specific Electives
        ["BCOE 141", "Principles of Marketing", "6", "DSE"],
        ["BCOE 142", "Management Accounting", "6", "DSE"],
        ["BCOE 143", "Fundamentals of Financial Management", "6", "DSE"],
        ["BCOE 144", "Office Management and Secretarial Practice ", "6", "DSE"],

        // ---------------------------------------------
        // SEC, Skill Enhancement Courses
        ["BCOS 183", "Computer Application in Business", "4", "SEC"],
        ["BCOS 184", "E-Commerce", "4", "SEC"],
        ["BCOS 185", "Entrepreneurship", "4", "SEC"],
        ["BCOS 186", "Personal Selling and Salesmanship", "4", "SEC"],

        // ---------------------------------------------
        // GE, General Elective
        ["BCOG 171", "Principles of Micro Economics", "6", "GE"],
        ["BCOG 172", "Indian Economy", "6", "GE"],

        // ---------------------------------------------
        // AECC, Ability Enhancement Compulsory Course
        ["BEGAE 182", "English Communication Skills", "4", "AECC"],
        ["BHDAE 182", "�हंद� भाषा और संप्रेषण", "4", "AECC"],

        // ---------------------------------------------
        // LC, Language Courses
        ["BEGLA 135", "English In Daily Life", "6", "LC"],
        ["BEGLA 136", "English At The Work Place", "6", "LC"],
        ["BEGLA 137", "Language Through Literature", "6", "LC"],
        ["BCOLA 138", "Business Communication", "6", "LC"],
        ["BHDLA 136", "�हंद� भाषा: लेखन कौशल", "6", "LC"],
        ["BHDLA 137", "�हंद� भाषा: सम्प्रेषण कौशल", "6", "LC"],
      ],
      programmeCoordinators: [
        // [profName, profEmail, profPhone]
        ["Prof. Nawal Kishor", "nkishor@ignou.ac.in", "011-29573026"],
        ["Dr. Subodh Kesharwani", "skesharwani@ignou.ac.in", "011-29573018"],
      ],
    },
    {
      code: "BSCG",
      name: "Bachelor of Science",
      school: "SOS",
      level: "bachelorsDegree",
      objectives: [
        `To provide higher education required for a B.Sc. degree in conformity with the UGC-CBCS to
        aspirants (including learners from the deprived sections and those living in remote and rural areas)
        seeking the degree for employment, further higher education, promotion in career and professional
        development.`,
      ],
      eligibility: ":10+2 with science subjects or its equivalent qualification.",
      mediumOfInstruction: "English & Hindi",
      duration: "Minimum 3 years and Maximum 6 years; offered in both January and July cycle of admission",
      feeStructure: `Rs. 14,700/- for full programme to be paid year wise @ Rs.4,900/- per year. Fee to be paid in first
        year, including Registration Fee of Rs.200/- is Rs.5,100/- `,
      categories: [
        ["DSC", "Discipline Specific Core Courses"],
        ["DSE", "Discipline Specific Electives"],
        ["AECC", "Ability Enhancement Compulsory Courses"],
        ["SEC", "Skill Enhancement Courses"],
      ],
      courses: [
        // ['courseCode', 'courseTitle', 'credits', 'category', 'discipline']
        ["", "", ""],
      ],
    },
  ];

  Programme.insertMany(programmes, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Programmes created");
    }
  });
};
