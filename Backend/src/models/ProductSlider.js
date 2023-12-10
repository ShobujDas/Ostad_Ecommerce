const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
   title :{
      type:String,
      required:true,
   },
   des :{
      type:String,
      required:true,
   },
   price :{
      type:String,
      required:true,
   },
   image :{
      type:String,
      required:true,
   },
   productID :{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
   },
   
},{timeStamps:true,versionkey:false});



const ProductSliderModel = mongoose.model('productSliders',DataSchema);
module.exports = ProductSliderModel;







