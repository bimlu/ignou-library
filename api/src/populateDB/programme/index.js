import College from "../../models/College";
import Course from "../../models/Course";
import Programme from "../../models/Programme";
import { getProgrammes, saveProgrammes } from "./programme";

const IMAGES = [
  "https://ignou-app-1.s3.ap-south-1.amazonaws.com/demo-images/girl.jpg",
  "https://ignou-app-1.s3.ap-south-1.amazonaws.com/demo-images/monstar.jpg",
  "https://ignou-app-1.s3.ap-south-1.amazonaws.com/demo-images/robot.jpg",
  "https://ignou-app-1.s3.ap-south-1.amazonaws.com/demo-images/pubg.jpg",
];

const getRandomImage = () => IMAGES[Math.floor(Math.random() * IMAGES.length)];

const getImage = (programme) =>
  `https://ignou-app-1.s3.ap-south-1.amazonaws.com/images/programme/${programme.code.toLowerCase()}.jpeg`;

const getThumbnail = (programme) =>
  `https://ignou-app-1.s3.ap-south-1.amazonaws.com/images/programme_thumbnails/${programme.code.toLowerCase()}.jpeg`;

export const createProgrammes = () => {
  const programmes = getProgrammes();
  // const programmesFixed = addCoursesField(programmes);
  // console.log(programmesFixed);

  // Programme.insertMany(programmes, (err, docs) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Programmes created");
  //   }
  // });

  for (let programme of programmes) {
    if (!programme.name || !programme.fullName) {
      console.log("Bad Programme: ", programme);
      continue;
    }
    createProgramme(programme);
  }

  console.log("length of programmes: ", programmes.length);

  const programmesSTR = JSON.stringify(programmes);
  saveProgrammes(programmesSTR);
};

export const createProgramme = async (programme) => {
  // console.log(programme);
  const college = await College.findOne({ code: programme.collegeCode });

  if (programme.programmeStructure) {
    const newProgrammeStructure = [];

    for (let crs of programme.programmeStructure) {
      const course = await Course.findOne({ code: crs.courseCode });
      if (!course) {
        console.log("Error: couldn't find course with code:", crs.courseCode, "\tAborting programme:", programme.code);
        continue;
      }
      newProgrammeStructure.push({ ...crs, course: course.id });
    }

    programme = { ...programme, programmeStructure: newProgrammeStructure };
    // console.log("finalProgramme: ", programme);
  }

  const newProgramme = await new Programme({
    ...programme,
    college: college.id,
    image: getImage(programme),
    thumbnail: getThumbnail(programme),
  }).save();
  await College.findOneAndUpdate(
    { code: programme.collegeCode },
    { $push: { programmes: newProgramme.id }, $inc: { programmesCount: 1 } }
  );
};
