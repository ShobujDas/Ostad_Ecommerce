const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
   userID :{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },
   productID :{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },
   qty :{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },
   price :{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },
   color :{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },
   size :{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },
},{timeStamps:true,versionkey:false});



const CartModel = mongoose.models('carts',DataSchema);
module.exports = CartModel;