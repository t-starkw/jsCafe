const { Schema, model } = require("mongoose");

const menuSchema = new Schema({
  id: {
    type: number,
    required: true,
    unique: true,
    trim: true,
  },

  product_name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Decimal128,
    required: true,
    validate: {
      isDecimal: true,
    },
  },
  category_id: {
    type: number,
    // references: {
    //   model: 'category',
    //   key: 'id'
    // }
  },
});

module.exports = Product;
