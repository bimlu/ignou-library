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
};

export default { Query };
