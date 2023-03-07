const db = require('../config/connection');
const { Product, Profile } = require('../models');

const menuData = require('./menuData.json');
const profileData = require('./profileData.json')

db.once('open', async () => {
  await Product.deleteMany({});
  await Profile.deleteMany({});

  const items = await Product.insertMany(menuData);
  const profiles = await Profile.insertMany(profileData)

  console.log('Menu items and profiles seeded!');
  process.exit(0);
});
