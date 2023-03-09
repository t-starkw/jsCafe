// const { Model, DataTypes } = require('mongoose');

// const merchSchema = new Schema(

//     {
//         id:{
//             type: number,
//             required: false,
//             unique: true
//         },
//         product_name: {
//             type: String,
//             required: true
//         },
//         price: {
//             type: Decimal128,
//             required: true,
//             validate: {
//                 isDecimal: true
//             }
//         },
//         stock: {
//             type: number,
//             required: true,
//             defaultValue: 10,
//             validate: {
//                 isNumeric: true
//             }
//         },
//         category_id: {
//             type: String,
//             ref: { 'category'
//             }
//           }
//         },
// );


// module.exports = Merch;