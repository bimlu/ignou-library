const Query = {
  getCollege: async (root, {}, { College }) => {
    const query = { code: "IGNOU" };

    const college = await College.findOne(query).populate("programmes");

    if (!college) {
      throw new Error("The College doesn't exits");
    }

    return college;
  },
};

export default { Query };
