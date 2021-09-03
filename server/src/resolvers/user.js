import { AuthenticationError } from "apollo-server";

export const assertAuthenticated = (authUser) => {
  if (!authUser) {
    throw new AuthenticationError("You need to be logged in");
  }
};

const Query = {
  /**
   * Gets the currently logged in user
   */
  getAuthUser: async (root, args, { authUser, User }) => {
    if (!authUser) return null;

    const user = await User.findOne({
      enrollmentNumber: authUser.enrollmentNumber,
    })
      .populate("programmes")
      .populate("courses");

    // handle the case when authuser is not in the database
    if (!user) return null;

    return user;
  },
  /**
   * Gets user by enrollmentNumber
   *
   * @param {string} enrollmentNumber
   */
  getUser: async (root, { enrollmentNumber }, { User, authUser }) => {
    if (!enrollmentNumber) {
      throw new Error("enrollmentNumber is a required param");
    }

    // assertAuthenticated(authUser);

    const query = { enrollmentNumber: enrollmentNumber };

    const user = await User.findOne(query)
      .populate("programmes")
      .populate("courses");

    if (!user) {
      throw new Error("User with given params doesn't exists.");
    }

    return user;
  },
  /**
   * Gets all users
   *
   * @param {string} enrollmentNumber
   * @param {int} skip how many users to skip
   * @param {int} limit how many users to limit
   */
  getUsers: async (root, { enrollmentNumber, skip, limit }, { User }) => {
    const query = {};
    const count = await User.where(query).countDocuments();
    const users = await User.find(query).skip(skip).limit(limit);

    return { users, count };
  },
  /**
   * Searches users by enrollmentNumber or firstName
   *
   * @param {string} searchQuery
   */
  searchUsers: async (root, { searchQuery }, { User, authUser }) => {
    // Return an empty array if searchQuery isn't presented
    if (!searchQuery) {
      return [];
    }

    const users = User.find({
      $or: [
        { username: new RegExp(searchQuery, "i") },
        { fullName: new RegExp(searchQuery, "i") },
      ],
      enrollmentNumber: {
        $ne: authUser.enrollmentNumber,
      },
    }).limit(50);

    return users;
  },
  /**
   * Gets Suggested people for user
   *
   * @param {string} enrollmentNumber
   */
  suggestPeople: async (root, { enrollmentNumber }, { User }) => {
    const LIMIT = 6;

    // Find random users
    const query = {};
    const usersCount = await User.where(query).countDocuments();
    let random = Math.floor(Math.random() * usersCount);

    const usersLeft = usersCount - random;
    if (usersLeft < LIMIT) {
      random = random - (LIMIT - usersLeft);
      if (random < 0) {
        random = 0;
      }
    }

    const randomUsers = await User.find(query).skip(random).limit(LIMIT);

    return randomUsers;
  },
};

export default { Query };
