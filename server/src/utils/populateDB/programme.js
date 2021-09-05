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
    {
      code: "BA",
      name: "Bachelor of Arts",
    },
    {
      code: "BAG",
      name: "Bachelor of Arts (General)",
    },
    {
      code: "BAHIH",
      name: "B.A. Honours History",
    },
    {
      code: "BAPCH",
      name: "B.A. Honours Psychology",
    },
    {
      code: "BAPSH",
      name: "B.A. Honours Political Science",
    },
    {
      code: "BAPST",
      name: "B.A. Honours Sociology",
    },
    {
      code: "BSCANH",
      name: "B.Sc. Honours Anthropology",
    },
    {
      code: "BSCBCH",
      name: "Bachelor of Science (Honours) in Biochemistry",
    },
    {
      code: "BCOMAF",
      name: "Bachelor of Commerce with Major in Accountancy and Finance",
    },
    {
      code: "BCom (CA&A)",
      name: "BCom with Major in Corporate Affairs and Administration",
    },
    // page-2, 11-20
    {
      code: "BCom (F&CA)",
      name: "BCom with Major in Finance and Cost Affairs",
    },
    {
      code: "BCOMG",
      name: "B.Com General",
    },
    {
      code: "BBARL",
      name: "Bachelor of Business Administration in Retailing",
    },
    {
      code: "BCA",
      name: "Bachelor of Computer Applications",
    },
    {
      code: "BAECH",
      name: "B.A. Economics Honours",
    },
    {
      code: "B.Ed.",
      name: "Bachelor of Education",
    },
    {
      code: "BHM",
      name: "Bachelor of Science (Hospitality and Hotel Administration)",
    },
    {
      code: "BAG",
      name: "Bachelor of Arts (General)",
    },
    {
      code: "BAG Urdu",
      name: "Bachelor of Arts (General) in Urdu",
    },
    {
      code: "BAG Hindi",
      name: "Bachelor of Arts (General) in Hindi",
    },
    // page-3, 21-30
    {
      code: "BAG Sanskrit",
      name: "Bachelor of Arts (General) in Sanskrit",
    },
    {
      code: "BAEGH",
      name: "Bachelor's Honours Degree Programme (English)",
    },
    {
      code: "BAHDH",
      name: "Bachelor's Honours Degree Programme (Hindi)",
    },
    {
      code: "BLIS",
      name: "Bachelor of Library and Information Science",
    },
    {
      code: "BScN(PB)",
      name: "BSc Nursing (Post Basic)",
    },
    {
      code: "BAG Philosophy",
      name: "Bachelor of Arts (General) in Philosophy",
    },
    {
      code: "BSc (General)",
      name: "Bachelor of Science (General)",
    },
    {
      code: "UGC-CBCS",
      name: "Bachelor of Science",
    },
    {
      code: "BAVTM",
      name: "B.A. Vocational Studies Tourism Management",
    },
    // page-4, 31-31
    {
      code: "BTS",
      name: "B.A. in Tourism Studies",
    },

    // --------------------------------------------------
    // Diploma, 22

    // page-1, 1-10
    {
      code: "DAQ",
      name: "Diploma in Aquaculture",
    },
    {
      code: "DPLAD",
      name: "Diploma in Panchayat Level Administration & Development",
    },
    {
      code: "DEVMT",
      name: "Diploma in Event Management",
    },
    {
      code: "DDT",
      name: "Diploma in Dairy Technology",
    },
    {
      code: "DECE",
      name: "Diploma in Early Childhood Care and Education",
    },
    {
      code: "DWED",
      name: "Diploma in Women’s Empowerment and Development",
    },
    {
      code: "DCE",
      name: "Diploma in Creative Writing in English",
    },
    {
      code: "DPVE",
      name: "Diploma in Value Education",
    },
    {
      code: "DNHE",
      name: "Diploma in Nutrition and Health Education",
    },
    {
      code: "DVAPFV",
      name: "Diploma in Value Added Products from Fruits and Vegetables",
    },
    // page-2, 11-20
    {
      code: "DCCN",
      name: "Diploma in Critical Care Nursing",
    },
    {
      code: "DAFE",
      name: "Diploma in HIV and Family Education",
    },
    {
      code: "DMT",
      name: "Diploma in Meat Technology",
    },
    {
      code: "DNA",
      name: "Diploma in Nursing Administration",
    },
    {
      code: "DIPP",
      name: "Diploma in Paralegal Practice",
    },
    {
      code: "D.El.Ed.",
      name: "Diploma in Early Childhood Education",
      // D.El.Ed. is not on offer from July 2019 session
    },
    {
      code: "DTG",
      name: "Diploma in Teaching German as a Foreign Language",
    },
    {
      code: "DTS",
      name: "Diploma in Tourism Studies",
    },
    {
      code: "DUL",
      name: "Diploma in Urdu",
    },
    {
      code: "DBPOFA",
      name: "Diploma in BPO Finance & Accounting",
    },
    // page-3, 21-30
    {
      code: "DMOP",
      name: "Diploma in Modern Office Practice",
    },
    {
      code: "DWM",
      name: "Diploma in Watershed Management",
    },

    // --------------------------------------------------
    // PG Diploma, 11

    // page-1, 1-10
    {
      code: "PGDAPP",
      name: "Post-Graduate Diploma in Audio Programme Production",
    },
    {
      code: "PGDCA",
      name: "Post Graduate Diploma in Computer Applications",
      // Last Admission Cycle July 2020
    },
    {
      code: "PGDCA_NEW",
      name: "Post Graduate Diploma in Computer Application",
      // January 2021 Admission Cycle and Onwards
    },
    {
      code: "PGDFCS",
      name: "Post-Graduate Diploma in Folklore and Culture Studies",
    },
    {
      code: "PGDSS",
      name: "Post Graduate Diploma in Sustainability Science",
    },
    {
      code: "PGDEOH",
      name: "Post Graduate Diploma in Environmental and Occupational Health",
    },
    {
      code: "PGDHO",
      name: "Post Graduate Diploma in Hotel Operation",
    },
    {
      code: "PGJMC",
      name: "Post Graduate Diploma in Journalism and Mass Communication",
    },
    {
      code: "PGDDC",
      name: "Post Graduate Diploma in Development Communication",
    },
    {
      code: "PGDIDM",
      name: "Post Graduate Diploma in Digital Media",
    },
    // page-2, 11-11
    {
      code: "PGDCOUN",
      name: "Post Graduate Diploma in Social Work Counselling",
    },

    //-------------------------------------------------
    // PG and Advance Diploma, 38

    // page-1, 1-10
    {
      code: "PGDUPDL",
      name: "Post Graduate Diploma in Urban Planning and Development",
    },
    {
      code: "PGDAC",
      name: "Post-Graduate Diploma in Analytical Chemistry",
    },
    {
      code: "PGDAW",
      name: "PG Diploma in Animal Welfare",
    },
    {
      code: "PGDBP",
      name: "Post-Graduate Diploma in Book Publishing",
    },
    {
      code: "PGDCJ",
      name: "Post Graduate Diploma in Criminal Justice",
    },
    {
      code: "PGDDM",
      name: "Post Graduate Diploma in Disaster Management",
    },
    {
      code: "PGDAE",
      name: "Post-Graduate Diploma in Adult Education",
    },
    {
      code: "PGDET",
      name: "Post-Graduate Diploma in Education Technology ",
    },
    {
      code: "PGDESD",
      name: "Post-Graduate Diploma in Environment and Sustainable Development",
    },
    {
      code: "PGDEDS",
      name: "Post-Graduate Diploma in Extension and Development Studies",
    },
    // page-2, 11-20
    {
      code: "PGDDVS",
      name: "Post Graduate Diploma in Development Studies",
    },
    {
      code: "PGDCSR",
      name: "PG Diploma in Corporate Social Responsibility",
    },
    {
      code: "PGDFSQM",
      name: "Post-Graduate Diploma in Food Safety and Quality Management",
    },
    {
      code: "PGDGPS",
      name: "Post Graduate Diploma in Gandhi and Peace Studies",
    },
    {
      code: "PGDWGS",
      name: "Post Graduate Diploma in Women’s & Gender Studies",
    },
    {
      code: "PGDGM",
      name: "Post-Graduate Diploma in Geriatric Medicine",
    },
    {
      code: "PGDHIVM",
      name: "Post-Graduate Diploma in HIV Medicine",
    },
    {
      code: "PGDHHM",
      name: "Post-Graduate Diploma in Hospital and Health Management",
    },
    {
      code: "PGDHE",
      name: "Post Graduate Diploma in Higher Education",
    },
    {
      code: "PGDIPR",
      name: "Post-Graduate Diploma in Intellectual Property Rights",
    },
    // page-3, 21-30
    {
      code: "PGDLAN",
      name: "Post-Graduate Diploma in Library Automation and Networking",
    },
    {
      code: "PGDFM",
      name: "Post-Graduate Diploma in Financial Management",
    },
    {
      code: "PGDMM",
      name: "Post-Graduate Diploma in Marketing Management",
    },
    {
      code: "PGDOM",
      name: "Post-Graduate Diploma in Operations Management",
    },
    {
      code: "PGDIBO",
      name: "Post Graduate Diploma in International Business Operations",
    },
    {
      code: "PGDFMP",
      name: "Post Graduate Diploma in Financial Markets Practice",
    },
    {
      code: "PGDHRM",
      name: "Post Graduate Diploma in Human Resource Management",
    },
    {
      code: "PGDMCH",
      name: "Post-Graduate Diploma in Maternal and Child Health",
    },
    {
      code: "PGDPSM",
      name: "Post-Graduate Diploma in Pharmaceutical Sales Management",
    },
    {
      code: "PGDPPED",
      name: "Post Graduate Diploma in Pre-Primary Education",
    },
    // page-4, 31-38
    {
      code: "PGDEMA",
      name: "Post Graduate Diploma in Educational Management and Administration",
    },
    {
      code: "PGDMH",
      name: "PG Diploma in Mental Health",
    },
    {
      code: "PGDRD",
      name: "Post-Graduate Diploma in Rural Development",
    },
    {
      code: "PGDCFT",
      name: "Post Graduate Diploma in Counselling and Family Therapy",
    },
    {
      code: "PGDSLM",
      name: "Post-Graduate Diploma in School Leadership and Management",
    },
    {
      code: "PGDAST",
      name: "Post Graduate Diploma in Applied Statistics",
    },
    {
      code: "PGDT",
      name: "PG Diploma in Translation",
    },
    {
      code: "PGDIS",
      name: "Post Graduate Diploma in Information Security",
    },

    //-----------------------------------------------
    // PG and Advance Certificate,

    // page-1, 1-10
    {
      code: "PGCAP",
      name: "Post-Graduate Certificate in Agriculture Policy",
    },
    {
      code: "PGCBHT",
      name: "Post-Graduate Certificate in Bangla-Hindi Translation",
    },
    {
      code: "PGCCL",
      name: "Post Graduate Certificate in Cyber Law",
    },
    {
      code: "PGCAE",
      name: "Post-Graduate Certificate in Adult Education",
    },
    {
      code: "PGCEDS",
      name: "Post-Graduate Certificate in Extension and Development Studies",
    },
    {
      code: "PGCCC",
      name: "Post Graduate Certificate in Climate Change",
    },
    {
      code: "PGCGPS",
      name: "Post Graduate Certificate in Gandhi and Peace Studies",
    },
    {
      code: "PGCMHT",
      name: "Post-Graduate Certificate in Malayalam-Hindi Translation",
    },
    {
      code: "PGCPP",
      name: "Post-Graduate Certificate in Patent Practice",
    },
    {
      code: "PGCIATIVI",
      name: "Post Graduate Certificate in Information and Assistive Technologies for the Instructors of Visually Impaired",
    },
    // page-2, 11-13
    {
      code: "ACPDM",
      name: "Advanced Certificate in Power Distribution Management",
    },
    {
      code: "PGCGI",
      name: "Post Graduate Certificate in Geoinformatics",
    },
    {
      code: "ACISE",
      name: "Advanced Certificate in Information Security",
    },

    // ---------------------------------------------
    // Certificate, 67

    // page-1, 1-10
    {
      code: "CIB",
      name: "Certificate in Bee Keeping",
    },
    {
      code: "CBS",
      name: "Certificate in Business Skills",
    },
    {
      code: "CCR",
      name: "Certificate in Community Radio",
    },
    {
      code: "CCPD",
      name: "Certificate of Competency in Power Distribution (Technicians)",
    },
    {
      code: "CMAD",
      name: "Certificate in Mobile Application Development",
    },
    {
      code: "CCP",
      name: "Certificate in Consumer Protection",
    },
    {
      code: "CDM",
      name: "Certificate in Disaster Management",
    },
    {
      code: "CETM",
      name: "Certificate in Energy Technology and Management",
    },
    {
      code: "CTE",
      name: "Certificate in Teaching of English as a Second Language",
    },
    {
      code: "CFE",
      name: "Certificate Programme in Functional English (Basic level)",
    },
    // page-2, 11-20
    {
      code: "CES",
      name: "Certificate in Environmental Studies",
    },
    {
      code: "CPVE",
      name: "Certificate Programme In Value Education",
    },
    {
      code: "CFBO",
      name: "Certificate in Food & Beverage Service Operation",
    },
    {
      code: "CFN",
      name: "Certificate in Food and Nutrition",
    },
    {
      code: "CGL",
      name: "Certificate in German Language",
    },
    {
      code: "CPEL",
      name: "Certificate in Persian Language",
    },
    {
      code: "CFO",
      name: "Certificate in Front Office Operation",
    },
    {
      code: "CPSCM",
      name: "Certificate Programme in Peace Studies and Conflict Management",
    },
    {
      code: "CIG",
      name: "Certificate in Guidance",
    },
    {
      code: "CHCWM",
      name: "Certificate in Health Care Waste Management",
    },
    // page-3, 21-30
    {
      code: "CPY",
      name: "Certificate Programme in YOGA",
    },
    {
      code: "CGCA",
      name: "Certificate in Geriatric Care Assistance",
    },
    {
      code: "CHHA",
      name: "Certificate in Home Health Assistance",
    },
    {
      code: "CPHA",
      name: "Certificate in Phlebotomy Assistance",
    },
    {
      code: "CGDA",
      name: "Certificate in General Duty Assistance",
    },
    {
      code: "CFAID",
      name: "Certificate in First Aid",
    },
    {
      code: "CAFE",
      name: "Certificate in HIV and Family Education",
    },
    {
      code: "CHBHC",
      name: "Certificate in Home Based Health Care",
    },
    {
      code: "CHO",
      name: "Certificate in House Keeping Operation",
    },
    {
      code: "CIT",
      name: "Certificate in Information Technology",
    },
    // page-4, 31-40
    {
      code: "CPLT",
      name: "Certificate Programme in Laboratory Techniques",
    },
    {
      code: "CIHL",
      name: "Certificate in International Humanitarian Law",
    },
    {
      code: "CAHT",
      name: "Certificate in Anti Human Trafficking",
    },
    {
      code: "CCLBL",
      name: "Certificate in Co-operation, Co-operative Law",
    },
    {
      code: "CHR",
      name: "Certificate in Human Rights",
    },
    {
      code: "CLIS",
      name: "Certificate Programme in Library and Information Science",
    },
    {
      code: "CLTA",
      name: "Certificate Programme on Life and Thought of B.R. Ambedkar",
    },
    {
      code: "CNM",
      name: "Certificate in NGO Management",
    },
    {
      code: "CMCHN",
      name: "Certificate in Maternal and Child Health Nursing",
    },
    {
      code: "CNIN",
      name: "Certificate in Newborn & Infant Nursing",
    },
    // page-5, 41-50
    {
      code: "BPCCHN",
      name: "Certificate in Community Health",
    },
    {
      code: "CNCC",
      name: "Certificate in Nutrition and Childcare",
    },
    {
      code: "COF",
      name: "Certificate in Organic Farming",
    },
    {
      code: "CPABN",
      name: "Certificate in Performing Arts - Bharatnatyam",
    },
    {
      code: "CPAHM",
      name: "Certificate in Performing Arts - Hindustani Music",
    },
    {
      code: "CPAKM",
      name: "Certificate in Performing Arts - Karnatak Music",
    },
    {
      code: "CPATHA",
      name: "Certificate In Performing Arts -Theatre Arts",
    },
    {
      code: "CVAP",
      name: "Certificate in Visual Arts - Painting",
    },
    {
      code: "CVAA",
      name: "Certificate in Visual Arts - Applied Arts",
    },
    {
      code: "CPF",
      name: "Certificate in Poultry Farming",
    },
    // page-6, 51-60
    {
      code: "CRD",
      name: "Certificate Programme in Rural Development",
    },
    {
      code: "CFL",
      name: "Certificate in French Language",
    },
    {
      code: "CAL",
      name: "Certificate in Arabic Language",
    },
    {
      code: "CRUL",
      name: "Certificate in Russian Language",
    },
    {
      code: "CSLC",
      name: "Certificate in Spanish Language & Culture",
    },
    {
      code: "CKLC",
      name: "Certificate in Korean Language & Culture",
    },
    {
      code: "CJL",
      name: "Certificate in Japanese Language",
    },
    {
      code: "CIS",
      name: "Certificate in Sericulture",
    },
    {
      code: "CSWCJS",
      name: "Certificate in Social Work and Criminal Justice System",
    },
    {
      code: "CTRBS",
      name: "Certificate in Tribal Studies",
    },
    // page-7, 61-67
    {
      code: "CTPM",
      name: "Certificate Programme in Teaching of Primary School Mathematics",
    },
    {
      code: "CTS",
      name: "Certificate in Tourism Studies",
    },
    {
      code: "CUL",
      name: "Certificate in Urdu Language",
    },
    {
      code: "CCITSK",
      name: "Certificate in Communication and IT Skills",
    },
    {
      code: "CFDE",
      name: "Certificate in Fashion Design",
    },
    {
      code: "CSWM",
      name: "Certificate in Solid Waste Management",
    },
    {
      code: "CWHM",
      name: "Certificate in Water Harvesting and Management",
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
