const Query = {
  /**
   * Gets programme by code
   *
   * @param {string} code programme code
   */
  getProgramme: async (root, { code }, { Programme }) => {
    if (!code) {
      throw new Error("code is required params.");
    }

    const query = { code: code };

    const programme = await Programme.findOne(query).populate("courses");

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
      .limit(limit);

    return { programmes: allProgrammes, count: programmesCount };
  },
};

export default { Query };
