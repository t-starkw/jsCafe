const { Profile, Product } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

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
    allMenuItems: async () => {
      return Product.find();
    },
    me: async (parent, args, context) => {
      if (context.profile) {
        const userData = await Profile.findOne({ _id: context.profile._id })
          .select("-__v -password")
          .populate("order_history");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    // Add a new user profile
    addProfile: async (parent, { name, email, password }) => {
      const newProfile = await Profile.create({ name, email, password });
      const token = signToken(newProfile);
      return {token, newProfile};
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
      const token = signToken(profile);
      return {token, profile};
    },

    // Remove a user profile
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },

    // Add order to order history
    addToHistory: async (parent, { input }, context) => {
      if (context.profile) {
        const updatedProfile = await Profile.findOneAndUpdate(
          { _id: context.profile._id },
          { $addToSet: { order_history: input } },
          { new: true, runValidators: true }
        );
        return updatedProfile;
      }
      throw new AuthenticationError("You need to log in");
    },

    addToMenu: async (parent, { product_name, price, image }) => {
      const newMenuItem = await Product.create({ product_name, price, image });

      return newMenuItem;
    },

    removeFromMenu: async (parent, { productId }) => {
      return Menu.findOneAndDelete({ _id: productId })
    },
  },
};

module.exports = resolvers;
