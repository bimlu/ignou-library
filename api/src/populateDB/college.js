import College from "../models/College";

export const createCollege = () => {
  const college = {
    code: "IGNOU",
    title: "Indira Gandhi National Open University",
    recognition: `
      IGNOU is a NATIONAL OPEN UNIVERSITY established by an Act of Parliament in 1985 (Act No. 50 of 1985).
      The Degrees/ Diplomas/ Certificates issued by IGNOU are recognised by all the member institutions of the
      Association of Indian Universities (AIU) and are at par with the corresponding Degrees/ Diplomas/
      Certificates issued by all Indian Universities/ Deemed Universities/ Institutions etc. 
      It is the First Open University in the Country to have been accredited with the highest A++ Grade by NAAC.
    `,

    importantLinks: [
      ["Admission Portal for ODL Programmes", "https://ignouadmission.samarth.edu.in/"],
      ["Admission Portal for Online Programmes", "https://ignouiop.samarth.edu.in/"],
      ["Admission Portal for Fixed Learner Intake Programmes", "https://ignouflip.samarth.edu.in/"],
      ["Student Portal (after admission)", "https://ignou.samarth.edu.in/"],
    ],

    notes: [
      `All students are advised to register on the Student Portal after confirmation of
       their admission and create their own Student Account`,
    ],

    theUniversity: {
      introduction: [
        "The Indira Gandhi National Open University was established by an Act of Parliament in 1985 to achieve the following objectives:",

        "democratising higher education by taking it to the doorsteps of the learners,",

        "providing access to high quality education to all those who seek it irrespective of age, region, religion and gender,",

        "offering need-based academic programmes by giving professional and vocational orientation to the courses, and",

        "promoting and developing distance education in India.",
      ],
      prominentFeatures: [
        "IGNOU has certain unique features such as:",

        "national jurisdiction with international presence",

        "flexible admission rules",

        "individualised study: flexibility in terms of place, pace and duration of study",

        "use of latest information and communication technologies",

        "nationwide student support services network",

        "cost-effective programmes",

        "modular approach to programmes",

        "resource sharing, collaboration and networking with conventional universities, open universities and other institutions/organisations",

        "socially and academically relevant programmes based on students’ need analysis, and",

        "convergence of open and conventional education systems",
      ],
      importantAchievements: [
        "Emergence of IGNOU as the largest Open University in the world.",

        "Recognition as Centre of Excellence in Distance Education by the Commonwealth of Learning (1993).",

        "Award of Excellence for Distance Education Material by Commonwealth of Learning (1999). Launch of a series of 24 hour Educational Channels ‘Gyan Darshan’. IGNOU is the nodal agency for these channels and regular transmissions are done from the studios at Electronic Media Production Centre (EMPC), IGNOU. Regular educational broadcast with facility for live interaction",

        "Student enrolment has reached 3 million.",

        "UNESCO has declared IGNOU as the largest institution of higher learning in the world in 2010.",

        "Largest network of learning support system.",

        "Declaration of Term-end result within 45 days.",
      ],
      theSchoolsOfStudies: [
        `With a view to develop interdisciplinary programmes, the University operates through its Schools of Studies.
        Each School is headed by a Director who arranges to organise its academic programmes and courses in
        coordination with the School faculty and staff, and different academic, administrative and service divisions of
        the University. The emphasis is on providing a wide choice of courses atdifferent levels.
        The following Schools of Studies are in operation currently:`,

        "School of Humanities (SOH)",

        "School of Social Sciences (SOSS)",

        "School of Sciences (SOS)",

        "School of Education (SOE)",

        "School of Continuing Education (SOCE)",

        "School of Engineering and Technology (SOET)",

        "School of Management Studies (SOMS)",

        "School of Health Sciences (SOHS)",

        "School of Computer and Information Sciences (SOCIS)",

        "School of Agriculture (SOA)",

        "School of Law (SOL)",

        "School of Journalism and New Media Studies (SOJNMS)",

        "School of Gender and Development Studies (SOGDS)",

        "School of Tourism and Hospitality Service Management (SOTHSM)",

        "School of Interdisciplinary and Trans-disciplinary Studies (SOITS)",

        "School of Social Work (SOSW)",

        "School of Vocational Education and Training (SOVET)",

        "School of Extension and Development Studies (SOEDS)",

        "School of Foreign Languages (SOFL)",

        "School of Translation Studies and Training (SOTST)",

        "School of Performing and Visual Arts (SOPVA)",
      ],
      academicProgrammes: [
        `The University offers Certificates, Diplomas, Advance Diplomas, Post Graduate Diplomas and Degrees, which are
        conventional as well as innovative. Most of these programmes have been developed after an initial survey of the
        need for such programmes. They are launched with a view to fulfilling the learners’ needs for:`,
        "certification",

        "improvement of skills",

        "acquisition of professional qualifications",

        "continuing education and professional development at workplace",

        "self-enrichment",

        "diversification and updating of knowledge",

        "empowerment",
      ],
      coursePreparation: `Learning material is specially prepared by teams of experts drawn from different universities and specialized
      institutions in the area spread throughout the country as well as in-house faculty. The material is scrutinized by the
      content experts, in -house faculty and edited by the language experts at IGNOU before these are finally sent for
      printing. Similarly, audio and video materials are produced in consultation with the course writers, in- house faculty
      and producers. The material is previewed and reviewed by the faculty as well as outside experts and
      edited/modified, wherever necessary, before they are finally dispatched to the students, Study Centres and Telecast
      through Gyan Darshan.`,
      creditSystem: [
        [
          "Defining Credit in ODL",

          `The University follows the ‘Credit System’ for most of its programmes. Each credit in our system is equivalent
          to 30 hours of learner study comprisingall learning activities (i.e., reading and comprehending
          the print material, listening to audio, watching video, attending counselling sessions, teleconference and
          writing assignment responses). Thus, a 4-credit course involves 120 hours of study and a 6-credit course
          involves 180 hours of study. This helps the learner to know the academic effort he/she has to put in, to
          successfully complete a course. Completion of an academic programme (Degree or Diploma) requires
          successful completion of the assignments, practical, projects and the Term-End Examination as per
          requirement of each course in a programme.`,
        ],
        [
          "Choice Based Credit System (CBCS)",

          `The Bachelor’s Degree Programmes offered through this prospectus follow the Choice Based Credit System
          (CBCS) introduced by UGC. The CBCS provides the learner with flexibility to study the subjects/courses at
          their own pace; greater choice of inter-disciplinary, intra-disciplinary and skill-based courses; and mobility to
          different institutions for studies. The system has the following advantages:`,

          `Allows learners to choose a combination of inter-disciplinary, intra-disciplinary courses, skill oriented
          courses (even from other disciplines according to their learning needs, interests and aptitude).`,
          `Makes education broad-based and at par with global standards.`,

          `Offers flexibility for learners to study at different times and at different institutions to complete the
          programme. Credits earned at one institution can be transferred to another institution.`,
        ],
      ],
      supportServices: [
        `In order to provide individualized support to its learners, the University has a large number of Study Centres,
        spread across the country. These Study Centres are coordinated by 67 Regional Centres and Recognised Regional
        Centres. At the Study Centres, the learners interact with the Academic Counselors and other learners, refer to
        books in the Library, watch/listen to video/audio programmes and interact with the Coordinator on administrative
        and academic matters. The list of Regional Centres is given in this Prospectus. Support services are also provided
        through Work Centres, Programme Study Centres, Skill Development Centres and Special Study Centres.`,

        `In case the number of students enrolled in a program is small, the University shall provide
        Technology Enabled Learner Support (TELS) through Gyan Darshan / Gyan Vani / Swayam Prabha/
        Web based support.`,
      ],
      programmeDelivery: [
        `The methodology of instruction in this University is different from that of the conventional Universities. The Open
        University system is more learner-oriented and the learner is an active participant in the pedagogical (teaching
        and learning) process. Most of the instructions are imparted through distance education methodology as per the
        requirement.
        The University follows a multimedia approach for instruction, which comprises:`,

        [
          "Self Instructional Printed Material:",

          `The printed study material (written in self-instructional style) for
          both theory and practical components of the programmes is provided to the learners in the form of a single
          print book and/or e-book, comprising blocks and units or in the form of separate printed blocks for every
          course (on an average 1 block per credit). A block which comes in theform of a booklet usually comprises
          3 to 5 units.`,
        ],
        [
          "Audio-Visual Material Aids:",
          `The learning package contains audio and video programmes which have been
          produced by the University for better clarification and enhancement of understanding of the course material
          given to the learners. A video programme is normally of 25-30 minutes duration`,
        ],
        [
          `The Video content is available on eGyan kosh (www.egyankosh.ac.in) – the digital learning repository of the
          University.`,
          `The video programmes are also telecast on National Network of Gyan Darshan and
          Swayamprabha channels. All Gyan Vani stations broadcast curriculum-based audio programmes as per
          their schedule that is notified in advance. In addition, some selected stations of All India Radio also
          broadcast the audio programmes. Learners can confirm the dates for the programmes from their study
          centres. The information is also provided through the university website`,
        ],
        [
          `Counselling Sessions:`,
          `Normally counselling sessions are held as per schedule drawn by the Study
          Centres. These are mostly held outside the regular working hours of the host institutions where the study
          centres arelocated. However, in case the number of students in a programme is small, face-toface counselling shall not be organized. In such cases the University shall provide Web
          Enabled Academic Support to the learners.`,
        ],
        [
          "Tele conferences:",
          ` Live sessions are conducted via satellite through interactive Gyan Darshan Channel as
          well as simultaneously webcaste athttp://ignouonline.ac.in/and via Facebook Live sessions.`,
        ],
        [
          "Practicals/Project Work:",
          `Some Programmes have practical/project component also depending upon the
          learning requirements. Practical sessions are held at designated institutions for which schedule is provided
          by the Study Centres. Attendance at practical sessions is compulsory. For project work, comprehensive
          project guide, in the form of a booklet, is provided to the learner along with the study material.`,
        ],
      ],
      webEnabledAcademicSupport: `To provide technology based academic support to the learners of the distance mode programmes, IGNOU has
        initiated a scheme of Web Enabled Academic Support (WEAS) for various ODL programmes of IGNOU. WEAS is a
        Single Window Platform providing various kinds of academic support including the study material, audio-video,
        quiz, discussion forum, calendar of activities, web-based video counselling, links of various web-based resources
        to the distance learners by using simple and easily available ICT tools. The students enrolled in programmes being
        offered through WEAS are given access to their programme specific portal in which they are provided with course
        material in digital format, video and learning resources. The portal enables online peer-to-peer interaction and
        discussion, it also gives an opportunity to the students to learn online and interact virtually with teachers and
        experts. To access WEAS click the link - https://sites.google.com/ignou.ac.in/weas`,
      evaluationSystem: [
        `The system of evaluation followed by the University also is different from that of conventional universities.
        IGNOU has a multitier system of evaluation.`,

        `Self-assessment exercises within each unit of study material.`,

        `Continuous evaluation mainly through assignments which are tutor-marked, practical assignments
        and seminar/ workshops/extended contact programmes, etc.`,

        `Term-End Examinations (TEE).`,

        `Project / Term-end Practical examination.`,

        `The evaluation of learners depends upon various instructional activities undertaken by them. A learner has to
        write assignment responses compulsorily before taking Term-End Examinations from time to time to complete an
        academic programme. A learner has to submit Tutor Marked Assignments (TMA) responses to the Coordinator
        of the Study Centre to which s/he is attached. Term-end examination is conducted at various examination
        centres spread all over the country and abroad in June and December every year.`,
      ],
      TEEAndPaymentOfExamFee: [
        `The University conducts Term-end Examination (TEE) twice a year in the months of June & December. A learner
        is permitted to appear in TEE subject to the following conditions: - `,

        `Registration for the courses is valid and not time barred.`,

        `Required number of assignments in the courses have been submitted by due date wherever applicable.`,

        `Minimum time to pursue these courses as per the provision of the programme has been completed.`,

        `Examination fee for all the courses the learner is appearing in the examination has been paid.`,
      ],
      internationalStudentsResidingInIndia: `The foreign nationals are advised to visit the page of Intenational Division of the University
        (http://ignou.ac.in/ignou/aboutignou/division/id/introduction ) for the programmes on offer for them; programme
        fee and other fees applicable for them. They may also contact International Division of the University at the
        Headquarters for more details.`,
      onlineAdmissionSystem: `The Admission Forms can be submitted online (except for International Students) through Online Admission
        System at http://onlineadmission.ignou.ac.in. Currently, the facility is available for the programmes offered
        through Common Prospectus except merit-based and entrance test based programmes. The prospective learners
        are required to create their user ID and password for logging in the system and upload the required documents
        along with the submission of the Admission Form. There is no need to send the printed copy of the Admission Form
        to the Regional Centre. The programme fee can be paid online using payment Gateway through net banking,
        debit/credit card or UPI. Once the admission form is submitted online, the students can track the progress of their
        admission. A message is sent on the mobile number and email ID registered with the System once admission is
        confirmed. In case of any discrepancy in the Admission Form, the prospective students are advised to remove the
        discrepancy within a stipulated time. Failing to do so will lead to rejection of admission form.
        The prospective learners submitting the Admission Form through this System can download the Prospectus free
        from IGNOU website http://www.ignou.ac.in. However, an amount of Rs.200/- is charged as registration fee
        along with the programme fee.`,
      eGyanKosh: `The IGNOU eGyan Kosh (http://egyankosh.ac.in/) one of the world’s largest repositories of educational resources
        in higher education-is available for the learners and teachers, and public at large for free. The eGyan Kosh
        currently houses the self-learning material of over 2500 courses and an equal number of video programmes of
        IGNOU. The IGNOU learners are encouraged to make use of these resources for their learning. `,
      IGNOUeContentMobileApp: `IGNOU-e-Content Mobile App is an official mobile app of Indira Gandhi National Open University (IGNOU), New
        Delhi. This app is an ICT initiative of IGNOU to provide Digital Learning Environment to IGNOU learners and
        extending Technology Enhanced Learner Support Services to them. The aim of this initiative is to disseminate the
        digitised course material to IGNOU Learners.IGNOU learners canuse this app to access their course material through
        their hand held devices such as Mobile Phones and Tablets.`,
      vidyaLakshmiPortal: `Vidya Lakshmi Portal is a first of its kind portal for students seeking Education Loan. Set up in August 2015, it is a
        single window electronic platform for students to access information and prepare applications for Educational Loans
        and Government Scholarships. The Portal has the facility of tracking the students right from the inception of loan
        application until the completion of sanction of loan or otherwise. Students can view, apply and track their
        education loan applications to banks anytime, anywhere through the Portal. The portal has been developed and
        being maintained by NSDL e-Governance Infrastructure Limited.
        Nearly 40 Banks have registered for over 70 Educational Loan Schemes on the Vidya Lakshmi Portal and
        integrated their system with the Portal for providing loan processing status to students.`,
    },
    image: "https://ignou-app-1.s3.ap-south-1.amazonaws.com/demo-images/ignou.jpg",
  };

  College.create(college, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("College created");
    }
  });
};
