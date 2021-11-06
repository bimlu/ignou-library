import School from "../../models/School";

export const createSchools = () => {
  const schools = [
    // first column as per ignou website
    {
      // BPVI, BAPI, BLPI, BLP, NPV, NEX, MNR, MNRE, OLP, OLPI, OLPL, ONR, ONRL, MAM,
      // MAMP, MVP, MVPI, MVPL, BAPI, BAP, MVPP
      code: "SOA",
      name: "School of Agriculture",
      shortIntro:
        "Offering a large variety of job-related coursesin agriculture, like Dairy Technology, Plantation Management",
    },
    {
      // ES, MES, MESE, NES, BES,
      code: "SOE",
      name: "School of Education",
      shortIntro: "The first school of IGNOU, conducting courses in different realms of education and training",
    },
    {
      // BAL, DTG,
      code: "SOFL",
      name: "School of Foreign Languages",
      shortIntro: "Offering PhD to certificate courses in Arabic, German, Japanese, Spanish and Persian",
    },
    {
      // ATR, AFW, AWRE, BEG, BEGE, DCE, FEG, CTE, MEG, BHDE, BHDA, BHDF, EHD, FHD, BRPA, BSKF
      // MHD, FAS, FBG, FGT, FKD, FMT, FML, FOR, FPB, FTG, FTM, FUD, MBP,
      // BBHF, BULE
      code: "SOH",
      name: "School of Humanities",
      shortIntro: "Among the earliest schools, comprising the disciplines of English and Hindi and a Translation Cell",
    },
    {
      // MIR, CHR, MIRP, CPI, ACS, BLEP, BLE, MLE, MLEP, MIP,
      code: "SOL",
      name: "School of Law",
      shortIntro: "Providing insight into new-age legal issues: Patent pracitices, cyber law, human rights",
    },
    {
      // FST, OMT, CHE, LSE, ACE, BAQL, BLS, BAQ, LMT, LT, BPHE, BPHL, PHE, MED,
      // APM, AQR, MTE, NEV, AHE, AST, AEC, AMT, MMT, MESE, MCHL, MST, MSTE, MGY, MBI,
      // MCH, BLS, MSTL
      code: "SOS",
      name: "School of Science",
      shortIntro: "Offering doctoral to certificate programmes in various science disciplines",
    },
    {
      // MTM, TS, PTS
      code: "SOTHSM",
      name: "School of Tourism and Hospitality Servies Management",
      shortIntro: "Offering job-related courses",
    },

    // second column
    {
      // MCS, MCSL, MCSE, BCS, BCSL, CIT, CITL
      code: "SOCIS",
      name: "School of Computer and Information Sciences",
      shortIntro: "Disseminating computer sciences knowledge through innovative means",
    },
    {
      // ET, BME, BMEL, BMEP, BEE, OET, OETL, BCE, BET, NET, BNA, BETL, BCEE,
      // BNAL,
      code: "SOET",
      name: "School of Engineering & Technology",
      shortIntro: "With a range of programmes: From Civil Engineering toShoe Upper Cutting",
    },
    {
      // MWG, MWGP, MGS, MGSP, MGSE
      code: "SOGDS",
      name: "School of Gender and Development",
      shortIntro: "Sensitising learners about gender and related issues",
    },
    {
      // MFC, MPYE, MPY, BPY, BPYE,
      code: "SOITS",
      name: "School of Inter-Disciplinary and Trans-Disciplinary Studies",
      shortIntro: "Provides enabling space for interdisciplinary academic studies and research",
    },
    {
      // MS, IBO, AED, AMK, AOM, ASP, ECO, MCO, PCO, BCOA, BMS
      // CIE, BRL, BRLT
      code: "SOMS",
      name: "School of Management Studies",
      shortIntro:
        "The Management Programmes offered by the School currently consists of 65 courses. In the Commerce Discipline the School offers 46 courses.",
    },
    {
      // MRR, MRRE, MRRP, BLD, CLD, NGS, BWEE, PFM, ESO, MSO
      // MSOE, MLISE, MLI, MPS, MPSE, MPA, MLII, MLI, MPS, EPS, MHI, EHI, BECE,
      // EEC, EPA, BPAE, EPA, MEC, MECE, MLIE, BSHF, OSS, CDM, PFM, BPC, BPCE,
      // MPC, MPCL, MPCE, MECP, MPAP, MLIP, BPCL, MANI, MAN, MANE, BLI, BLIE,
      // BLII,
      code: "SOSS",
      name: "School of Social Sciences",
      shortIntro:
        "Offering programmes in disciplines like Economics, History, Political Science and Public Administration",
    },
    {
      // MTT, PGDT
      code: "SOTST",
      name: "School of Translation Studies and Training",
      shortIntro: "Fostering an environment of translation and enriching Indian literary tradition",
    },

    // third column
    {
      // MFN, MFNL, MFNP, JMC, RDD, BFN, MRD, CNCC, MRDE, MRDP, DNHE, DECE, BWEE,
      // RDD, ACC, AFE, BFEE, BFEP, CFN, DECE, ERD, NCD,
      code: "SOCE",
      name: "School of Continuing Education",
      shortIntro: "With focus on rural development, women and child development youth, disability, nutritionand health",
    },
    {
      // MEDS, MAE, MAEL, MEDSP, MAE, MEDSE, BEDS, MEDSP, MAEP, MAE, MAEE,
      code: "SOEDS",
      name: "School of Extension and Development Studies",
      shortIntro: "Enhancing learners’ understanding inlivelihoodand empowerment studies",
    },
    {
      // MCC, MCCL, MME, MMEL, BOS, BNS, BNSL, MDTL, MDT, BHM, CHEP, CHET, CRSI, PGDHHM, DNHE, BOS, BOSL, CPE, MHMI
      // MHM, CNSHC
      code: "SOHS",
      name: "School of Health Sciences",
      shortIntro:
        "Providing in-service training for medical, nursing, paramedical and allied personnel through distance mode",
    },
    {
      // MJM, MJME, CCR, JMC
      code: "SOJNMS",
      name: "School of Journalism and New Media",
      shortIntro: "Initiating journalism aspirants into the rigours ofprint, electronic media",
    },
    {
      // OVA, OMU, ODN, OTH, MFC
      code: "SOPVA",
      name: "School of Perfoming and Visual Arts",
      shortIntro: "Imparting aestheticsensitivity through Music, Dance, Theatre and Visual Arts",
    },
    {
      // BSWE, BSWL, MSW, MSWE, MSWL, MSWP, MVE, BFE, BFEE
      code: "SOSW",
      name: "School of Social Work",
      shortIntro:
        "Offering distance programmes, as well as a regular programme with focus on family education, HIV/ AIDS",
    },
    {
      // BPOI, MVE, MVEI
      code: "SOVET",
      name: "School of Vocational Education and Training",
      shortIntro: "Focusing on skill development of Indian youth through vocational programmes",
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
