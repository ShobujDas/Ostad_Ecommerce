const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
   categoryName :{
      type:String,
      trim:true,
      required:true,
      unique:true,
   },
   categoryImg :{
      type:String,
      trim:true,
      required:true,
   },
},{timeStamps:true,versionkey:false});



const CategoryModel = mongoose.models('categories',DataSchema);
module.exports = BrandModel;







