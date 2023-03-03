const { Profile, Product } = require("../models");

const resolvers = {
  Query: {
    // Query one profile
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    // Query all profiles
    profiles: async () => {
      return Profile.find();
    },

    // Query all menu items
    menuItems: async () => {
      return Product.find();
    },
  },

  Mutation: {
    // Add a new user profile
    addProfile: async (parent, { name, email, password }) => {
      const newProfile = await Profile.create({ name, email, password });

      return newProfile;
    },

    // Log into an existing user profile
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      return profile;
    },

    // Remove a user profile
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },

    // Add order to order history
    addToHistory: async (parent, { profileId, order }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { order_history: order },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    addToMenu: async (parent, { product_name, price }) => {
      const newMenuItem = await Product.create({ product_name, price });

      return newMenuItem;
    },

    removeFromMenu: async (parent, { productId }) => {
      return Menu.findOneAndDelete({ _id: productId })
    },
  },
};

module.exports = resolvers;
