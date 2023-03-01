const { User } = require("../models");

const resolvers = {
  Query: {
    // Query one user
    user: async (parent, { userId }) => {
      return User.findOne({ _id: profileId });
    },

    // Query all users
    users: async () => {
      return User.find();
    },
  },

  Mutation: {
    // Add a new user profile
    addUser: async (parent, { name, email, password }) => {
      const newUser = await Profile.create({ name, email, password });

      return newUser;
    },

    // Log into an existing user profile
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      return profile;
    },

    // Remove a user profile
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },

    // Add order to order history
    addToHistory: async (parent, { userId, order }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { order_history: order },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
  },
};

module.exports = resolvers;
