const Query = {
  getCourse: async (root, { id, code }, { Course }) => {
    if (!code && !id) {
      throw new Error("code or id is required params.");
    }

    if (code && id) {
      throw new Error("please pass only code or only id as a param");
    }

    const query = code ? { code: code } : { _id: id };

    const course = await Course.findOne(query).populate("programme");

    if (!course) {
      throw new Error("Course with given params doesn't exits.");
    }

    return course;
  },
};

export default { Query };
