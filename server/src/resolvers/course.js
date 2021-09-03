const Query = {
  /**
   * Gets course by code
   *
   * @param {string} code course code
   */
  getCourse: async (root, { code }, { Course }) => {
    if (!code) {
      throw new Error("code is required params.");
    }

    const query = { code: code };

    const course = await Course.findOne(query).populate("programmes");

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
      .populate("programmes")
      .skip(skip)
      .limit(limit);

    return { courses: allCourses, count: courseCount };
  },
};

export default { Query };
