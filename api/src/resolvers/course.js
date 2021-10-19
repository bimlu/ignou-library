const Query = {
  /**
   * Gets course by id or name
   *
   * @param {string} id
   * @param {string} name
   */
  getCourse: async (root, { id, name }, { Course }) => {
    if (!name && !id) {
      throw new Error("name or id is required params.");
    }

    if (name && id) {
      throw new Error("please pass only name or only id as a param");
    }

    const query = name ? { name: name } : { _id: id };

    const course = await Course.findOne(query)
      .populate("programme")
      .populate("college")
      .populate("createdBy")
      .populate("posts")
      .populate("students");

    if (!course) {
      throw new Error("Course with given params doesn't exits.");
    }

    return course;
  },
  /**
   * Gets all courses
   *
   * @param {int} skip how many courses to skip
   * @param {int} limit how many courses to limit
   */
  getCourses: async (root, { skip, limit }, { Course }) => {
    const query = {};

    const courseCount = await Course.where(query).countDocuments();
    const allCourses = await Course.find(query)
      .populate("programme")
      .populate("college")
      .populate("posts")
      .skip(skip)
      .limit(limit)
      .sort({ postsCount: "desc" })
      .sort({ createdAt: -1 });

    return { courses: allCourses, count: courseCount };
  },
  /**
   * Gets courses of a specific programme of a specific college
   * college > programme > courses
   *
   * @param {string} collegeId
   * @param {string} programmeId
   * @param {int} skip how many courses to skip
   * @param {int} limit how many courses to limit
   */
  getCollegeProgrammeCourses: async (root, { collegeId, programmeId, skip, limit }, { Course }) => {
    if (!collegeId || !programmeId) {
      throw new Error("collegeId and programmeId are required params.");
    }

    const query = { $and: [{ college: collegeId }, { programme: programmeId }] };

    const count = await Course.find(query).countDocuments();
    const courses = await Course.find(query)
      .populate("students")
      .populate("posts")
      .skip(skip)
      .limit(limit)
      .sort({ postsCount: "desc" })
      .sort({ createdAt: -1 });

    return { courses, count };
  },
};

export default { Query };
