const db = require('../config/connection');
const { Product } = require('../models');

const menuData = require('./menuData.json');

db.once('open', async () => {
  await Product.deleteMany({});

  const items = await Product.insertMany(menuData);

  console.log('Menu items seeded!');
  process.exit(0);
});
