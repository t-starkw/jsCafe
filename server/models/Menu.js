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
    type: Number
    
  },
  image: {
    type: String
  },
  // FIGURE OUT HOW TO CATEGORIZE AS A FOOD OR DRINK ITEM
  // category: {
  //   type: Number,
  //   // references: {
  //   //   model: 'category',
  //   //   key: 'id'
  //   // }
  // },
});


module.exports = menuSchema;