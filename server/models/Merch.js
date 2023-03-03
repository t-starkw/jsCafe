const { Model, DataTypes } = require('mongoose');

const merchSchema = new Schema(

    {
        id:{
            type: number,
            required: false,
            unique: true
        },
        product_name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true,

        },
        stock: {
            type: number,
            required: true,
            defaultValue: 10,

        },
        category_id: {
            type: String,
            ref: { 'category'
            }
          }
        },
);


module.exports = Merch;