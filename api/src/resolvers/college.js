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
};

export default { Query };
