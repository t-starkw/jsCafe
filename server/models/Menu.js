const { Schema, model } = require('mongoose');

const menuSchema = new Schema(
    {
          product_name: {
            type: String,
            required: true,
            unique: true
        },
        price : {
          type: String,
          required: true,
        },
        category_id: {
            type: number,
          }
        },
        );
        
        module.exports = Product; 
