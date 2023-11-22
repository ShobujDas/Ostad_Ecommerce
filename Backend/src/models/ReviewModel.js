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
   des :{
      type:String,
      required:true,
   },
   rating :{
      type:String,
      required:true,
   },
},{timeStamps:true,versionkey:false});



const ReviewModel = mongoose.models('reviews',DataSchema);
module.exports = ReviewModel;