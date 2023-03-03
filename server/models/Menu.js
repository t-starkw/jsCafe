const { Schema, model } = require("mongoose");

const menuSchema = new Schema({
  id: {
    type: Number
  },

  product_name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // category: {
  //   type: Number,
  //   // references: {
  //   //   model: 'category',
  //   //   key: 'id'
  //   // }
  // },
});

const Product = model('Product', menuSchema);

module.exports = Product;