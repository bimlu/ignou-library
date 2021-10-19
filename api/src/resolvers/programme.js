const Query = {
  /**
   * Gets programme by id or name
   *
   * @param {string} id
   * @param {string} name
   */
  getProgramme: async (root, { id, name }, { Programme }) => {
    if (!name && !id) {
      throw new Error("name or id is required params.");
    }

    if (name && id) {
      throw new Error("please pass only name or only id as a param");
    }

    const query = name ? { name: name } : { _id: id };

    const programme = await Programme.findOne(query)
      .populate("college")
      .populate("createdBy")
      .populate("courses")
      .populate("students");

    if (!programme) {
      throw new Error("Programme with given params doesn't exits.");
    }

    return programme;
  },
  /**
   * Gets Programme Structure by id or name
   *
   * @param {string} id
   * @param {string} name
   */
  getProgrammeStructure: async (root, { id, name }, { Programme }) => {
    if (!name && !id) {
      throw new Error("name or id is required params.");
    }

    if (name && id) {
      throw new Error("please pass only name or only id as a param");
    }

    const query = name ? { name: name } : { _id: id };

    const programme = await Programme.findOne(query)
      .populate({ path: "programmeStructure", populate: { path: "course" } })
      .populate("college")
      .populate("createdBy")
      .populate("courses")
      .populate("students");

    if (!programme) {
      throw new Error("Programme with given params doesn't exits.");
    }

    return programme;
  },
  /**
   * Gets all programmes
   *
   * @param {int} skip how many programmes to skip
   * @param {int} limit how many programmes to limit
   */
  getProgrammes: async (root, { skip, limit }, { Programme }) => {
    const query = {};

    const programmesCount = await Programme.find(query).countDocuments();
    const allProgrammes = await Programme.find(query)
      .populate("courses")
      .skip(skip)
      .limit(limit)
      .sort({ coursesCount: "desc" })
      .sort({ createdAt: -1 });

    return { programmes: allProgrammes, count: programmesCount };
  },
  /**
   * Gets programmes of a specific college
   * college > programmes
   *
   * @param {string} collegeId
   * @param {int} skip how many programmes to skip
   * @param {int} limit how many programmes to limit
   */
  getCollegeProgrammes: async (root, { collegeId, skip, limit }, { Programme }) => {
    if (!collegeId) {
      throw new Error("collegeId param is required");
    }

    const query = { college: collegeId };

    const count = await Programme.find(query).countDocuments();
    const programmes = await Programme.find(query)
      .populate("courses")
      .populate("students")
      .skip(skip)
      .limit(limit)
      .sort({ coursesCount: "desc" })
      .sort({ createdAt: -1 });

    return { programmes, count };
  },
};

export default { Query };
