const Query = {
  getProgramme: async (root, { id, code }, { Programme }) => {
    if (!code && !id) {
      throw new Error("code or id is required params.");
    }

    if (code && id) {
      throw new Error("please pass only code or only id as a param");
    }

    const query = code ? { code: code } : { _id: id };

    const programme = await Programme.findOne(query).populate("courses");

    if (!programme) {
      throw new Error("Programme with given params doesn't exits.");
    }

    return programme;
  },

  getProgrammeStructure: async (root, { id, code }, { Programme }) => {
    if (!code && !id) {
      throw new Error("code or id is required params.");
    }

    if (code && id) {
      throw new Error("please pass only code or only id as a param");
    }

    const query = code ? { code: code } : { _id: id };

    const programme = await Programme.findOne(query).populate({
      path: "programmeStructure",
      populate: { path: "course" },
    });

    if (!programme) {
      throw new Error("Programme with given params doesn't exits.");
    }

    const sortedProgramme = {
      ...programme,
      programmeStructure: programme.programmeStructure.sort((a, b) => b.course.blocksCount - a.course.blocksCount),
    };

    return sortedProgramme;
  },

  getAssignmentTree: async (root, { skip, limit }, { Programme }) => {
    const query = {};

    const count = await Programme.find(query).countDocuments();
    const programmes = await Programme.find(query)
      .populate({
        path: "programmeStructure",
        populate: { path: "course" },
      })
      .skip(skip)
      .limit(limit)
      .sort({ code: "ascending" });

    return { programmes, count };
  },

  getProgrammes: async (root, { skip, limit }, { Programme }) => {
    const query = {};

    const count = await Programme.find(query).countDocuments();
    const programmes = await Programme.find(query)
      .populate("courses")
      .skip(skip)
      .limit(limit)
      .sort({ coursesCount: "descending" });

    return { programmes, count };
  },
};

export default { Query };
