const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
   brandName :{
      type:String,
      trim:true,
      required:true,
      unique:true,
   },
   brandImg :{
      type:String,
      trim:true,
      required:true,
   },
},{timeStamps:true,versionkey:false});



const BrandModel = mongoose.models('brands',DataSchema);
module.exports = BrandModel;













