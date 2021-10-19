const Query = {
  /**
   * Gets college by id or name
   *
   * @param {string} id
   * @param {string} name
   */
  getCollege: async (root, { id, name }, { College }) => {
    if (!name && !id) {
      throw new Error("name or id is required params.");
    }

    if (name && id) {
      throw new Error("please pass only name or only id as a param");
    }

    const query = name ? { name: name } : { _id: id };

    const college = await College.findOne(query).populate("createdBy").populate("programmes").populate("students");

    if (!college) {
      throw new Error("College with given params doesn't exits.");
    }

    return college;
  },
  /**
   * Gets all colleges
   *
   * @param {int} skip how many colleges to skip
   * @param {int} limit how many colleges to limit
   */
  getColleges: async (root, { skip, limit }, { College }) => {
    const query = {};

    const collegesCount = await College.find(query).countDocuments();
    const allColleges = await College.find(query)
      .populate({
        path: "programmes",
        populate: [{ path: "courses", options: { skip, limit, sort: { postsCount: "desc" } } }],
        options: { sort: { coursesCount: "desc" }, skip, limit },
      })
      .populate("students")
      .skip(skip)
      .limit(limit)
      .sort({ programmesCount: "desc" })
      .sort({ createdAt: -1 });

    return { colleges: allColleges, count: collegesCount };
  },
};

export default { Query };
